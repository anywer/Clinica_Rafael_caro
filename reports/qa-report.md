# Relatório de QA

Data: 15/09/2026  
Ambiente: Chrome headless local, página servida por HTTP local.

## Resultado

Fluxos principais aprovados após correções. Teste automatizado final: `PASS`.

## Cobertura

- Viewports: 320×720, 375×812, 768×1024, 1024×768, 1115×764, 1440×900 e 1874×856.
- Carregamento: sem erro de console, imagem quebrada ou requisição externa.
- Layout: sem overflow horizontal nas cinco larguras.
- Navegação móvel: abre, atualiza `aria-expanded` e fecha com `Escape`.
- Agendamento: bloqueia avanço sem escolha, percorre três etapas e gera o resumo correto.
- Acessibilidade: um único `h1`, link de salto, foco visível nos controles, alvos de toque adequados e alternativa para `prefers-reduced-motion`.
- Movimento: entradas progressivas e linha de percurso sem trabalho pesado direto no evento de rolagem.

## Achados e correções

| ID | Severidade | Achado | Correção | Regressão |
| --- | --- | --- | --- | --- |
| QA-01 | Importante | Elementos podiam continuar ocultos após uma rolagem muito rápida. | Fallback com `requestAnimationFrame` revela todo conteúdo já percorrido. | Aprovada em cinco larguras. |
| QA-02 | Refinamento | O favicon ausente gerava erro 404 no console. | Favicon local adicionado e alinhado ao monograma aprovado. | Aprovada. |
| QA-03 | Refinamento | Foco programático do grupo exibia moldura visual excessiva. | Moldura removida apenas dos contêineres; rádios e botões mantêm foco visível. | Aprovada. |
| QA-04 | Importante | O RC havia sido redesenhado em SVG e apresentava proporção diferente da referência aprovada. | Assinatura extraída do mockup V5 e salva como PNG transparente com proporção fixa; aplicada no cabeçalho, rodapé e favicon. | Aprovada em cinco larguras. |
| QA-05 | Importante | Transparências invadiam a área textual do hero móvel e reduziam a leitura; título estava excessivamente largo. | Círculos movidos abaixo do conteúdo, opacidade reduzida e tipografia/entrelinha balanceadas. | Aprovada em 320, 375, 768, 1024 e 1440 px. |
| QA-06 | Importante | Em telas muito largas e baixas, o texto auxiliar, a frase final e a folha se sobrepunham ao conteúdo principal. | Hero recebeu altura mínima segura, escala tipográfica também limitada pela altura da tela e zonas verticais independentes para nota, folha e frase final. | Aprovada especificamente em 1874×856 e na regressão completa. |
| QA-07 | Importante | O retrato em “Sobre” ocupava uma coluna excessiva e o preenchimento da moldura dava aparência ampliada e recortada. | Moldura limitada a 368 px no desktop, proporção 4:5 preservada com `object-fit: contain` e `srcset` ampliado até 1120 px. | Aprovada em 320, 375, 768, 1024, 1115, 1440 e 1874 px. |
| QA-08 | Importante | O questionário exigia “Continuar” após cada escolha e não oferecia uma finalização útil. | Cada rádio avança automaticamente; a seta permite retornar; a tela final tem texto opcional, prévia e acesso ao WhatsApp provisório. | Aprovada por mouse e teclado, incluindo retorno e troca de resposta. |
| QA-09 | Refinamento | A navegação do cabeçalho não fornecia resposta visual refinada ao hover. | Links receberam linha em gradiente com entrada lateral de 580 ms; o CTA ganhou elevação, escala, cor e sombra suaves, com equivalência por foco e redução de movimento. | Aprovada em mouse, teclado, touch sem hover e `prefers-reduced-motion`. |

## Evidências

Capturas estão em `reports/screenshots/`, incluindo página completa nas cinco larguras e recortes de seções-chave.

## Observações

- Safari/iOS e dispositivos físicos não foram executados neste ambiente; recomenda-se uma conferência curta antes da publicação.
- O WhatsApp usa provisoriamente `17 9812-1449`; confirmar o número definitivo antes da publicação.
