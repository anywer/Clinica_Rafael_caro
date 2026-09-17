# Frontend Quality Gate

## Veredito

**Aprovado com observações**

## Avaliação

| Área | Status | Evidência |
| --- | --- | --- |
| Requisitos e direção visual | Aprovado | Layout editorial botânico, monograma RC extraído da referência V5 e usado como imagem com proporção fixa, retrato apenas em “Sobre” e fluxo progressivo por rolagem. |
| Código | Aprovado | HTML/CSS/JS nativos, sem dependências de produção, sem duplicação funcional crítica e sintaxe JavaScript válida. |
| Responsividade | Aprovado | 320, 375, 768, 1024, 1440 e o caso largo/baixo de 1874×856 sem overflow ou sobreposição. |
| Acessibilidade | Aprovado | Semântica, foco, teclado, link de salto, estados ARIA e movimento reduzido. |
| Performance | Aprovado | Imagens WebP responsivas, JavaScript pequeno, observadores nativos e microinterações do header restritas a `transform`, opacidade, cor e sombra, com redução de movimento. |
| Segurança e LGPD | Aprovado para protótipo local, com pendências de publicação | Sem persistência/rastreio e sem relato na URL; número é provisório e o campo opcional/WhatsApp exigem validação profissional-jurídica e canal de privacidade. |

## Comandos executados

- `node --check script.js`
- `node tests/site-check.cjs`

Resultado final automatizado: `PASS: responsividade básica, console, menu e fluxo de agendamento.`

## Observações para publicação

Confirmar número profissional, necessidade/base jurídica do texto opcional, tratamento no WhatsApp, canal de privacidade, textos e registro com Rafael. Repetir a CSP como cabeçalho HTTP na hospedagem e fazer uma verificação rápida em Safari/iOS real.

## Reavaliação — narrativa de movimento (17/09/2026)

Resultado da reavaliação: nenhum bloqueador; permanecem as observações de publicação registradas neste relatório.

| Área | Status | Evidência |
| --- | --- | --- |
| Requisito | Aprovado | Retrato com sticky breve em desktop, processo com três fases ligadas ao scroll e revelações discretas preservadas no restante da página. |
| Fluidez e performance | Aprovado | Um controlador com scroll passivo e escrita agrupada em `requestAnimationFrame`; animações limitadas a `transform` e `opacity`; `will-change` apenas enquanto a cena está no viewport. |
| Responsividade | Aprovado | Cenas desativadas até 900 px; fluxo vertical validado nas larguras móveis e tablet. |
| Acessibilidade | Aprovado | Ordem e conteúdo do DOM inalterados, fase atual indicada por `aria-current` e alternativa completa para `prefers-reduced-motion`. |
| Robustez | Aprovado | Sem biblioteca externa; conteúdo permanece legível sem JavaScript; regressão automatizada inclui fases do processo e estabilidade do retrato. |
| Segurança e LGPD | Sem novo risco | Movimento não lê nem persiste dados pessoais e não adiciona terceiros ou rede. Pendências de publicação anteriores continuam válidas. |

Observação: conferir Safari/iOS em dispositivo real antes da publicação. Isso não bloqueia o protótipo local nem a avaliação desta branch.

## Verificação rápida — links do rodapé (17/09/2026)

Resultado da verificação: nenhum achado bloqueador ou importante.

- Estado fechado e aberto inspecionados no navegador; o texto expandido permanece abaixo do título.
- Sem alteração de semântica: `<details>` e `<summary>` preservam teclado e estado acessível.
- Regressão automatizada aprovada entre 320×720 e 1874×856, sem overflow, erro de console ou quebra dos fluxos existentes.
- Mudança restrita ao CSS, sem impacto no tratamento de dados ou em integrações.

## Verificação rápida — mascaramento para prévia pública (17/09/2026)

Resultado: **Aprovado com observações**.

- Escopo visual restrito a três linhas de identificação profissional; estrutura, estilos e interações permanecem inalterados.
- O registro aparece como `CRP XXXXXX/XX` no cabeçalho, retrato e rodapé.
- A suíte automatizada e a sintaxe JavaScript foram reexecutadas após a mudança.
- Observação de publicação: usar um repositório sanitizado e sem histórico, pois documentos visuais e commits antigos não são apagados pela simples alteração do HTML atual.
