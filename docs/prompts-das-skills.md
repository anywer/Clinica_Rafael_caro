# Prompts de criação e uso das skills

As skills já estão estruturadas em `.agents/skills/`. Os prompts abaixo servem para recriá-las ou adaptá-las em outro projeto sem carregar instruções desnecessárias.

## 1. Engenharia de código

```text
Crie uma skill chamada frontend-engineering-clean para implementar e corrigir interfaces web com mentalidade de engenharia sênior pragmática. Ela deve priorizar a solução mais simples que cumpra o requisito, HTML semântico, CSS organizado, JavaScript mínimo, acessibilidade, desempenho, segurança básica e consistência visual. Deve preservar o escopo, evitar dependências e abstrações sem benefício concreto, testar o comportamento alterado e ler relatórios de QA e segurança existentes no projeto. Ao receber achados, deve corrigir a causa raiz, registrar o que foi resolvido e sinalizar apenas os itens que realmente exigem decisão humana. Não permita gambiarras, duplicação ou mudanças cosméticas fora do escopo.
```

Prompt de uso:

```text
Use $frontend-engineering-clean para implementar o escopo aprovado. Depois, leia reports/qa-report.md e reports/security-review.md, corrija os achados confirmados dentro do escopo e valide novamente os fluxos afetados.
```

## 2. Segurança de frontend

```text
Crie uma skill chamada frontend-security-audit para revisar aplicações web e corrigir vulnerabilidades confirmadas dentro do escopo autorizado. Ela deve examinar fronteiras de confiança, coleta e exposição de dados, validação de entrada, XSS, URLs e redirecionamentos, segredos, dependências, cabeçalhos, formulários, integrações, tratamento de erros e riscos de privacidade. Para fluxos de psicologia, saúde ou menores, deve aplicar um gate LGPD reforçado: tratar dados de saúde como sensíveis; mapear finalidade, necessidade, hipótese legal, agentes, terceiros, retenção e direitos; impedir coleta clínica no formulário inicial; avaliar WhatsApp, analytics e transferências; exigir plano de incidentes e revisão jurídica nas decisões sensíveis. Deve priorizar por impacto e probabilidade, evitar alarmes genéricos, não alegar segurança absoluta nem presumir que consentimento resolve todo tratamento, e registrar evidência, impacto, correção e validação em reports/security-review.md. Mudanças arquiteturais, serviços externos ou ações destrutivas devem ser apenas recomendadas até receber autorização.
```

Prompt de uso:

```text
Use $frontend-security-audit para auditar a implementação atual, aplicar integralmente o checklist LGPD para saúde e menores, corrigir falhas confirmadas dentro do escopo e gerar reports/security-review.md com evidências, gates pré-lançamento e estado final de cada achado. Não aprove o fluxo de agendamento enquanto houver falha de minimização, destino de dados desconhecido ou decisão jurídica pendente.
```

## 3. QA rigoroso de frontend

```text
Crie uma skill chamada frontend-qa-adversarial para testar interfaces web de forma crítica e reproduzível. Ela deve verificar requisitos, fluxos, conteúdo, estados de erro, teclado, foco, leitor de tela, contraste, movimento reduzido, responsividade, overflow, toque, legibilidade, desempenho percebido e consistência visual. Deve testar larguras representativas, registrar passos, resultado esperado, resultado observado, evidência, severidade e ambiente em reports/qa-report.md. Não deve editar o produto: deve entregar achados claros para a skill de engenharia e, após as correções, executar regressão focalizada e atualizar cada item como aprovado, reprovado ou bloqueado.
```

Prompt de uso:

```text
Use $frontend-qa-adversarial para validar a implementação contra docs/planejamento-landing-page.md. Gere reports/qa-report.md, encaminhe os achados reproduzíveis para $frontend-engineering-clean e, após as correções, faça a regressão final.
```

## Ciclo recomendado

1. Engenharia implementa somente o escopo aprovado.
2. Segurança audita e corrige itens confirmados dentro do escopo.
3. QA testa a versão integrada e gera o relatório.
4. Engenharia corrige os achados reproduzíveis.
5. QA executa regressão focalizada e fecha o relatório.

O ciclo termina quando não restarem falhas críticas ou altas e os itens médios aceitos tiverem justificativa registrada.
