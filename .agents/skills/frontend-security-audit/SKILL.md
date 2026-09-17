---
name: frontend-security-audit
description: Auditar e endurecer aplicações web, formulários e integrações quanto a segurança, privacidade e LGPD; usar em revisões de vulnerabilidades ou fluxos que tratem dados pessoais, especialmente dados de saúde ou de menores.
---

# Auditoria de segurança de frontend

Baseie conclusões em comportamento observável e fronteiras de confiança reais. Não produza listas genéricas nem alegue segurança absoluta.

## Escopo de análise

Revise, conforme aplicável:

- entrada, saída, renderização e persistência de dados;
- XSS, injeção, URLs, redirecionamentos e conteúdo de terceiros;
- segredos e informações sensíveis no cliente, repositório, logs ou mensagens;
- formulários, consentimento, minimização, retenção e exposição de dados;
- autenticação, autorização, sessão, CSRF e CORS quando existirem;
- dependências, configuração de build, cabeçalhos e política de conteúdo;
- tratamento de erros, abuso, automação e integrações externas.

Considere que validação no navegador não substitui validação no servidor. Em fluxos ligados à saúde, evite coletar detalhes clínicos quando dados de contato e preferência bastarem.

## LGPD e dados de saúde

Quando o produto tratar ou puder inferir dados de saúde, atender adolescentes ou compartilhar dados com agenda, mensageria, analytics, hospedagem ou outro terceiro, leia e aplique [references/lgpd-health-checklist.md](references/lgpd-health-checklist.md) antes de aprovar a solução.

Trate essa revisão como bloqueadora de lançamento quando não estiverem definidos: finalidade, necessidade, hipótese legal validada, papéis dos agentes, transparência, retenção, canal do titular, controles de acesso e resposta a incidentes. Não presuma que consentimento resolve todo tratamento e não ofereça garantia de conformidade ou de ausência de responsabilização jurídica. Marque decisões jurídicas como pendentes de profissional qualificado.

## Correção

Corrija falhas confirmadas quando a mudança estiver dentro do escopo autorizado, for reversível e não exigir nova decisão de produto. Preserve funcionalidade e teste o cenário vulnerável após a alteração. Para mudanças arquiteturais, serviços externos, credenciais, exclusões ou ampliação relevante de coleta, apenas recomende e solicite decisão.

## Relatório

Registre em `reports/security-review.md`:

- escopo e limitações;
- achados por severidade e confiança;
- evidência ou forma de reprodução;
- impacto plausível;
- correção aplicada ou recomendada;
- validação e estado final.

Inclua uma seção `LGPD` com o mapa mínimo do tratamento, terceiros envolvidos, pontos de coleta, riscos de dados sensíveis ou de menores e o resultado de cada gate pré-lançamento do checklist.

Separe vulnerabilidade, melhoria de defesa e risco aceito. Não exponha segredos no relatório.
