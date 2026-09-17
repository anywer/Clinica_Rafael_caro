document.documentElement.classList.add("js-enabled");

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function setupMenu() {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".site-nav");
  if (!toggle || !nav) return;

  const close = () => {
    toggle.setAttribute("aria-expanded", "false");
    toggle.querySelector(".sr-only").textContent = "Abrir menu";
    nav.classList.remove("is-open");
    document.body.classList.remove("menu-open");
  };

  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") !== "true";
    toggle.setAttribute("aria-expanded", String(open));
    toggle.querySelector(".sr-only").textContent = open ? "Fechar menu" : "Abrir menu";
    nav.classList.toggle("is-open", open);
    document.body.classList.toggle("menu-open", open);
  });
  nav.addEventListener("click", event => {
    if (event.target.closest("a")) close();
  });
  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && nav.classList.contains("is-open")) {
      close();
      toggle.focus();
    }
  });
}

function setupReveals() {
  const items = [...document.querySelectorAll(".reveal")];
  if (reducedMotion.matches || !("IntersectionObserver" in window)) {
    items.forEach(item => item.classList.add("is-visible"));
    return;
  }

  const pending = new Set(items);
  const reveal = item => {
    item.classList.add("is-visible");
    pending.delete(item);
    observer.unobserve(item);
  };
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting || entry.boundingClientRect.top < 0) {
        reveal(entry.target);
      }
    });
  }, { threshold: 0.16, rootMargin: "0px 0px -8%" });
  items.forEach(item => observer.observe(item));

  let scheduled = false;
  const revealPassed = () => {
    pending.forEach(item => {
      if (item.getBoundingClientRect().top < innerHeight * 0.92) reveal(item);
    });
    scheduled = false;
    if (!pending.size) removeEventListener("scroll", onScroll);
  };
  const onScroll = () => {
    if (!scheduled) {
      scheduled = true;
      requestAnimationFrame(revealPassed);
    }
  };
  addEventListener("scroll", onScroll, { passive: true });
  revealPassed();
}

function setupJourneyLine() {
  const path = document.querySelector("[data-journey-path]");
  if (!path || reducedMotion.matches) return;
  const length = path.getTotalLength();
  path.style.strokeDasharray = String(length);
  let scheduled = false;

  const update = () => {
    const available = document.documentElement.scrollHeight - innerHeight;
    const progress = available > 0 ? Math.min(scrollY / available, 1) : 0;
    path.style.strokeDashoffset = String(length * (1 - progress));
    scheduled = false;
  };

  addEventListener("scroll", () => {
    if (!scheduled) {
      scheduled = true;
      requestAnimationFrame(update);
    }
  }, { passive: true });
  update();
}

function setupScrollScenes() {
  const scenes = [...document.querySelectorAll("[data-scroll-scene]")];
  const desktop = window.matchMedia("(min-width: 901px)");
  if (!scenes.length) return;

  const sceneStates = scenes.map(scene => ({
    scene,
    steps: scene.dataset.scrollScene === "process" ? [...scene.querySelectorAll("[data-step]")] : [],
  }));
  const clamp = value => Math.min(Math.max(value, 0), 1);
  let scheduled = false;
  let currentPhase = -1;
  let scenesEnabled;

  const reset = () => {
    sceneStates.forEach(({ scene, steps }) => {
      scene.classList.remove("is-motion-active");
      scene.style.setProperty("--scene-progress", "0");
      scene.style.setProperty("--step-progress", "0");
      steps.forEach(step => {
        step.classList.remove("is-current", "is-complete");
        step.removeAttribute("aria-current");
      });
    });
    currentPhase = -1;
  };

  const update = () => {
    scheduled = false;
    if (!desktop.matches || reducedMotion.matches) {
      if (scenesEnabled !== false) reset();
      scenesEnabled = false;
      return;
    }
    scenesEnabled = true;

    const frames = sceneStates.map(({ scene, steps }) => {
      const rect = scene.getBoundingClientRect();
      const distance = Math.max(scene.offsetHeight - innerHeight, 1);
      const progress = clamp(-rect.top / distance);
      const phase = steps.length ? Math.min(Math.floor(progress * steps.length), steps.length - 1) : -1;
      return { scene, steps, progress, phase, active: rect.top < innerHeight && rect.bottom > 0 };
    });

    frames.forEach(({ scene, steps, progress, phase, active }) => {
      const value = progress.toFixed(4);
      scene.classList.toggle("is-motion-active", active);
      scene.style.setProperty("--scene-progress", value);

      if (!steps.length) return;
      scene.style.setProperty("--step-progress", value);

      if (phase === currentPhase) return;
      currentPhase = phase;
      steps.forEach((step, index) => {
        const current = index === phase;
        step.classList.toggle("is-current", current);
        step.classList.toggle("is-complete", index < phase);
        if (current) step.setAttribute("aria-current", "step");
        else step.removeAttribute("aria-current");
      });
    });
  };

  const schedule = () => {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(update);
  };

  addEventListener("scroll", schedule, { passive: true });
  addEventListener("resize", schedule);
  [desktop, reducedMotion].forEach(query => {
    if (query.addEventListener) query.addEventListener("change", schedule);
    else query.addListener(schedule);
  });
  update();
}

function setupBooking() {
  const form = document.querySelector("[data-booking-form]");
  if (!form) return;

  const steps = [...form.querySelectorAll("[data-form-step]")];
  const result = form.querySelector("[data-form-result]");
  const resultCopy = form.querySelector("[data-result-copy]");
  const status = form.querySelector("[data-form-status]");
  const progress = form.querySelector("[data-form-progress]");
  const back = form.querySelector("[data-form-back]");
  const note = form.querySelector("[data-contact-note]");
  const send = form.querySelector("[data-whatsapp-send]");
  let current = 0;
  let advanceTimer;

  const show = index => {
    steps.forEach((step, position) => step.classList.toggle("is-active", position === index));
    result.classList.toggle("is-active", index === steps.length);
    back.hidden = index === 0;
    progress.style.width = `${((index + 1) / (steps.length + 1)) * 100}%`;
    status.textContent = "";
    (index === steps.length ? result : steps[index]).focus?.({ preventScroll: true });
  };

  const selectedValue = name => form.elements[name].value;
  const buildMessage = () => {
    const extra = note.value.trim();
    const base = `Olá, gostaria de informações sobre atendimento para ${selectedValue("publico")}. Tenho preferência por atendimento ${selectedValue("modalidade")} e disponibilidade no período da ${selectedValue("periodo")}.`;
    return extra ? `${base}\n\nInformação adicional: ${extra}` : base;
  };

  const updateMessage = () => {
    resultCopy.textContent = buildMessage();
  };

  const scheduleAdvance = input => {
    const stepIndex = steps.indexOf(input.closest("[data-form-step]"));
    if (stepIndex !== current) return;
    clearTimeout(advanceTimer);
    advanceTimer = setTimeout(() => {
      current += 1;
      if (current === steps.length) updateMessage();
      show(current);
    }, 180);
  };

  form.addEventListener("click", event => {
    const input = event.target.closest('input[type="radio"]');
    if (input) scheduleAdvance(input);
  });

  form.addEventListener("change", event => {
    if (event.target.matches('input[type="radio"]')) scheduleAdvance(event.target);
  });

  back.addEventListener("click", () => {
    clearTimeout(advanceTimer);
    current = Math.max(0, current - 1);
    show(current);
  });

  note.addEventListener("input", updateMessage);

  send.addEventListener("click", async () => {
    const message = buildMessage();
    try {
      await navigator.clipboard.writeText(message);
      status.textContent = "Mensagem copiada. Cole e revise o texto no WhatsApp antes de enviar.";
    } catch {
      const selection = getSelection();
      const range = document.createRange();
      range.selectNodeContents(resultCopy);
      selection.removeAllRanges();
      selection.addRange(range);
      status.textContent = "Copie a mensagem destacada e cole no WhatsApp.";
    }
  });

  show(current);
}

document.querySelector("[data-year]").textContent = new Date().getFullYear();
setupMenu();
setupReveals();
setupJourneyLine();
setupScrollScenes();
setupBooking();
