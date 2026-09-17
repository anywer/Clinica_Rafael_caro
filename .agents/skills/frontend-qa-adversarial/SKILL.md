---
name: frontend-qa-adversarial
description: Testar interfaces web de forma rigorosa quanto a requisitos, usabilidade, acessibilidade, responsividade e estética; usar para gerar achados reproduzíveis e fazer regressão após correções.
---

# QA rigoroso de frontend

Teste como uma pessoa real e como alguém tentando encontrar inconsistências. O objetivo é produzir evidência útil, não volume de apontamentos.

## Preparação

Leia o escopo e transforme requisitos em critérios observáveis. Identifique fluxos principais, estados vazios, carregamento, sucesso, erro e limites de entrada. Registre ambiente, navegador e versão avaliada.

## Cobertura

Conforme aplicável, verifique:

- navegação, links, formulários, validação e mensagens;
- hierarquia, legibilidade, espaçamento, alinhamento e consistência;
- teclado, ordem de foco, foco visível, nomes acessíveis e semântica;
- contraste, zoom, leitor de tela e movimento reduzido;
- larguras de 320, 375, 768, 1024 e 1440 px, além dos pontos de quebra reais;
- overflow, orientação, área de toque e conteúdo longo;
- carregamento, falhas de rede e desempenho percebido;
- compatibilidade entre navegadores proporcional ao projeto.

Não aprove estética apenas por ausência de erro funcional. Não reprove com base em preferência pessoal: relacione cada achado a requisito, heurística, consistência ou impacto no uso.

## Relatório

Não edite o produto. Registre em `reports/qa-report.md` cada achado com:

- identificador e severidade;
- requisito ou área afetada;
- passos mínimos de reprodução;
- esperado e observado;
- evidência;
- ambiente;
- sugestão objetiva, quando útil;
- estado: aberto, corrigido, reprovado na regressão ou bloqueado.

Priorize bloqueadores e problemas críticos, depois impacto frequente. Agrupe sintomas com a mesma causa provável.

## Regressão

Após a engenharia informar correções, repita o cenário original e os fluxos adjacentes com maior risco. Atualize o relatório sem apagar o histórico. Encerre somente quando o resultado estiver comprovado ou o bloqueio estiver explicitamente documentado.
