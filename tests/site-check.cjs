const { chromium } = require("playwright");
const fs = require("node:fs");
const path = require("node:path");

const baseUrl = process.env.SITE_URL || "http://127.0.0.1:4173";
const outputDir = path.resolve(__dirname, "..", "reports", "screenshots", process.env.SCREENSHOT_RUN || "");
fs.mkdirSync(outputDir, { recursive: true });

const sizes = [
  { name: "mobile-320", width: 320, height: 720 },
  { name: "mobile-375", width: 375, height: 812 },
  { name: "tablet-768", width: 768, height: 1024 },
  { name: "laptop-1024", width: 1024, height: 768 },
  { name: "reported-1115", width: 1115, height: 764 },
  { name: "desktop-1440", width: 1440, height: 900 },
  { name: "wide-short-1874", width: 1874, height: 856 },
];

(async () => {
  const browser = await chromium.launch({
    headless: true,
    executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  });
  const failures = [];

  for (const size of sizes) {
    const page = await browser.newPage({ viewport: size });
    const runtimeErrors = [];
    page.on("pageerror", error => runtimeErrors.push(error.message));
    page.on("console", message => {
      if (message.type() === "error") runtimeErrors.push(message.text());
    });
    page.on("request", request => {
      if (!request.url().startsWith(baseUrl)) failures.push(`${size.name}: requisição externa ${request.url()}`);
    });

    await page.goto(baseUrl, { waitUntil: "networkidle" });
    await page.evaluate(async () => {
      document.documentElement.style.scrollBehavior = "auto";
      for (let y = 0; y < document.documentElement.scrollHeight; y += innerHeight * 0.7) {
        scrollTo(0, y);
        await new Promise(resolve => setTimeout(resolve, 35));
      }
      scrollTo(0, 0);
    });
    await page.waitForTimeout(800);
    const revealState = await page.locator(".reveal").evaluateAll(items => ({
      total: items.length,
      visible: items.filter(item => item.classList.contains("is-visible")).length,
    }));
    if (revealState.visible !== revealState.total) {
      const missing = await page.locator(".reveal:not(.is-visible)").evaluateAll(items =>
        items.map(item => `${item.tagName.toLowerCase()}#${item.id}.${item.className}`).join(", ")
      );
      failures.push(`${size.name}: revelações incompletas (${revealState.visible}/${revealState.total}): ${missing}`);
    }
    await page.screenshot({ path: path.join(outputDir, `${size.name}.png`), fullPage: true });

    if (size.name === "desktop-1440") {
      for (const id of ["sobre", "processo", "abordagem", "artigos", "agendamento"]) {
        await page.locator(`#${id}`).screenshot({ path: path.join(outputDir, `section-${id}.png`) });
      }
    }

    const overflow = await page.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
    }));
    if (overflow.scrollWidth > overflow.clientWidth + 1) {
      failures.push(`${size.name}: overflow horizontal (${overflow.scrollWidth}/${overflow.clientWidth})`);
    }
    runtimeErrors.forEach(error => failures.push(`${size.name}: ${error}`));
    if ((await page.locator("h1").count()) !== 1) failures.push(`${size.name}: deve haver exatamente um h1`);
    const brokenImages = await page.locator("img").evaluateAll(images => images.filter(image => !image.complete || image.naturalWidth === 0).length);
    if (brokenImages) failures.push(`${size.name}: ${brokenImages} imagem(ns) não carregada(s)`);
    const portraitState = await page.locator(".portrait img").evaluate(image => ({
      naturalWidth: image.naturalWidth,
      renderedWidth: image.getBoundingClientRect().width,
      objectFit: getComputedStyle(image).objectFit,
    }));
    if (portraitState.objectFit !== "contain") failures.push(`${size.name}: retrato não preserva o enquadramento integral`);
    if (portraitState.naturalWidth + 1 < portraitState.renderedWidth) failures.push(`${size.name}: retrato ampliado além da resolução natural (${portraitState.naturalWidth}/${portraitState.renderedWidth.toFixed(1)})`);

    if (size.name === "mobile-375") {
      await page.screenshot({ path: path.join(outputDir, "viewport-mobile-top.png") });
      await page.locator("#agendamento").scrollIntoViewIfNeeded();
      await page.waitForTimeout(250);
      await page.screenshot({ path: path.join(outputDir, "viewport-mobile-booking.png") });
    }
    if (size.name === "wide-short-1874") {
      await page.screenshot({ path: path.join(outputDir, "viewport-wide-short-top.png") });
    }
    if (["mobile-375", "tablet-768", "reported-1115", "desktop-1440"].includes(size.name)) {
      await page.locator("#sobre").scrollIntoViewIfNeeded();
      await page.waitForTimeout(250);
      await page.screenshot({ path: path.join(outputDir, `viewport-${size.name}-about.png`) });
    }
    await page.close();
  }

  const page = await browser.newPage({ viewport: { width: 375, height: 812 } });
  await page.goto(baseUrl, { waitUntil: "networkidle" });

  const menu = page.locator(".menu-toggle");
  await menu.click();
  if ((await menu.getAttribute("aria-expanded")) !== "true") failures.push("menu: não abriu");
  await page.keyboard.press("Escape");
  if ((await menu.getAttribute("aria-expanded")) !== "false") failures.push("menu: Escape não fechou");

  await page.locator("#agendamento").scrollIntoViewIfNeeded();
  await page.locator('input[name="publico"][value="adulto"]').check();
  await page.waitForTimeout(250);
  if (!(await page.locator('[data-form-step]:nth-of-type(2)').isVisible())) failures.push("agendamento: não avançou automaticamente para modalidade");
  await page.locator("[data-form-back]").click();
  await page.locator('label:has(input[name="publico"][value="adulto"]) span').click();
  await page.waitForTimeout(250);
  await page.locator('input[name="modalidade"][value="on-line"]').check();
  await page.waitForTimeout(250);
  await page.locator('input[name="periodo"][value="tarde"]').check();
  await page.waitForTimeout(250);
  await page.locator("[data-contact-note]").fill("Prefiro receber informações sobre horários disponíveis.");
  const summary = await page.locator("[data-result-copy]").textContent();
  if (!summary.includes("adulto") || !summary.includes("on-line") || !summary.includes("tarde") || !summary.includes("horários disponíveis")) {
    failures.push("agendamento: resumo incorreto");
  }
  const whatsappHref = await page.locator("[data-whatsapp-send]").getAttribute("href");
  if (whatsappHref !== "https://wa.me/551798121449") failures.push("agendamento: número provisório incorreto");
  if ((await page.locator("[data-form-next]").count()) !== 0) failures.push("agendamento: botão Continuar ainda existe");
  await page.screenshot({ path: path.join(outputDir, "booking-result-375.png") });

  const reducedPage = await browser.newPage({ viewport: { width: 375, height: 812 }, reducedMotion: "reduce" });
  await reducedPage.goto(baseUrl, { waitUntil: "networkidle" });
  const hiddenWithReducedMotion = await reducedPage.locator(".reveal").evaluateAll(items =>
    items.filter(item => getComputedStyle(item).opacity !== "1").length
  );
  if (hiddenWithReducedMotion) failures.push("movimento reduzido: conteúdo ficou oculto");
  await reducedPage.close();

  const headerPage = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await headerPage.goto(baseUrl, { waitUntil: "networkidle" });
  const aboutLink = headerPage.getByRole("link", { name: "Sobre", exact: true });
  await aboutLink.hover();
  await headerPage.waitForTimeout(650);
  const underlineState = await aboutLink.evaluate(element => ({
    opacity: getComputedStyle(element, "::after").opacity,
    transform: getComputedStyle(element, "::after").transform,
  }));
  if (underlineState.opacity !== "1" || underlineState.transform === "none") failures.push("header: sublinhado do hover não apareceu");

  const headerCta = headerPage.getByRole("link", { name: "Agendar conversa", exact: true });
  const restingShadow = await headerCta.evaluate(element => getComputedStyle(element).boxShadow);
  await headerCta.hover();
  await headerPage.waitForTimeout(650);
  const ctaState = await headerCta.evaluate(element => ({
    transform: getComputedStyle(element).transform,
    shadow: getComputedStyle(element).boxShadow,
  }));
  if (ctaState.transform === "none" || ctaState.shadow === restingShadow) failures.push("header: destaque do CTA não foi aplicado");
  await headerPage.screenshot({ path: path.join(outputDir, "header-hover-1440.png") });
  await headerPage.close();

  await browser.close();
  if (failures.length) {
    console.error(failures.join("\n"));
    process.exitCode = 1;
  } else {
    console.log("PASS: responsividade básica, console, menu e fluxo de agendamento.");
  }
})().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
