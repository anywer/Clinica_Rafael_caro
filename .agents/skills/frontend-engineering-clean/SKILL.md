---
name: frontend-engineering-clean
description: Implementar ou corrigir interfaces web com código enxuto, acessível, seguro e visualmente consistente; usar em mudanças de HTML, CSS ou JavaScript e na resolução de relatórios de QA ou segurança.
---

# Engenharia de frontend pragmática

Entregue a menor solução completa e sustentável para o escopo aprovado.

## Decisões

- Preserve a arquitetura e as escolhas válidas existentes.
- Prefira HTML semântico, CSS nativo e JavaScript nativo quando forem suficientes.
- Adicione dependência, abstração ou estado somente quando houver benefício concreto e verificável.
- Remova duplicação criada pela mudança, sem refatorar áreas não relacionadas.
- Trate acessibilidade, responsividade, desempenho e segurança como requisitos da implementação.
- Não invente conteúdo, credenciais, dados, endpoints ou regras de negócio.

## Implementação

Antes de editar, identifique requisitos, estados, integrações e critérios de aceite. Implemente a causa raiz, mantenha nomes claros e deixe cada comportamento em um único lugar. JavaScript deve existir apenas para interação ou estado que HTML e CSS não resolvam adequadamente.

Valide os fluxos alterados, teclado, foco, telas estreitas, erros previsíveis e ausência de regressões óbvias. Use as ferramentas e testes já presentes; não crie infraestrutura desproporcional.

## Handoff de revisão

Se existirem `reports/qa-report.md` ou `reports/security-review.md`, leia-os antes de declarar conclusão. Para cada achado reproduzível dentro do escopo:

1. confirme a causa;
2. corrija-a sem mascarar o sintoma;
3. execute a verificação relevante;
4. atualize o estado do item ou forneça evidência clara para a nova rodada.

Não descarte um achado apenas por discordância. Se depender de conteúdo, decisão de produto, serviço externo ou ampliação material de escopo, registre o bloqueio específico e não improvise.

## Conclusão

Informe arquivos alterados, verificações executadas e riscos restantes. Não declare que está pronto enquanto houver falha crítica ou alta confirmada sem decisão explícita.
