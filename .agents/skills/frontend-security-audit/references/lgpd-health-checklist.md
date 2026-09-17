# Checklist LGPD para psicologia e agendamento

Use este checklist antes de aprovar qualquer fluxo que colete, receba, infira, armazene, transmita ou exclua dados pessoais. Dados referentes à saúde são dados pessoais sensíveis e exigem análise mais rigorosa. Atendimento a adolescentes requer atenção adicional e validação jurídica do caso concreto.

Este material orienta engenharia e revisão de risco; não substitui parecer jurídico, definição profissional sobre sigilo clínico nem validação das normas aplicáveis pelo psicólogo e seu conselho.

## 1. Mapa do tratamento

Para cada campo, cookie, evento, mensagem e integração, registre:

- dado coletado ou inferido;
- titular e origem;
- finalidade específica;
- necessidade e proporcionalidade;
- hipótese legal aplicável, validada por responsável jurídico quando houver dúvida;
- onde trafega e onde fica armazenado;
- controlador, operador e terceiros envolvidos;
- pessoas ou perfis com acesso;
- prazo e critério de retenção;
- processo de exclusão e atendimento ao titular.

Não aprove o lançamento se algum dado não tiver finalidade necessária ou destino conhecido.

## 2. Minimização obrigatória no MVP

O formulário público deve pedir somente dados de contato e preferências práticas de agendamento. Não solicitar motivo da terapia, sintomas, diagnóstico, medicação, histórico, crise, relato íntimo ou documento no fluxo inicial.

- Não colocar dados pessoais em URL, query string ou nome de arquivo.
- Não persistir respostas em `localStorage`, logs, ferramentas de analytics, gravação de sessão ou pixels.
- Não enviar conteúdo do formulário a terceiros antes da ação consciente do usuário e da informação adequada.
- Se o fluxo gerar mensagem para WhatsApp, mostrar previamente o conteúdo e explicar que o envio passa pela plataforma escolhida.

Se surgir necessidade real de dado de saúde, interrompa a implementação até existir desenho próprio de tratamento, hipótese legal validada, transparência, retenção, acesso e segurança.

## 3. Transparência e escolha

- Aviso de privacidade acessível, claro e específico para cada finalidade.
- Identificação do controlador e canal funcional para direitos do titular.
- Separação entre contato necessário, analytics, marketing e publicação de depoimentos.
- Consentimento, quando for a hipótese escolhida, granular, demonstrável, revogável e sem caixas pré-marcadas.
- Não usar consentimento como padrão automático; documentar a hipótese legal apropriada para cada finalidade.
- Informar terceiros, compartilhamentos, retenção e eventual transferência internacional de forma compatível com o fluxo real.

## 4. Menores e adolescentes

- Identificar quando o fluxo pode envolver criança ou adolescente sem coletar data de nascimento completa se uma faixa etária bastar.
- Avaliar o melhor interesse, os responsáveis envolvidos, a transparência adequada à idade e as regras profissionais aplicáveis.
- Não implementar autorização genérica ou presumida do responsável.
- Exigir revisão jurídica/profissional antes de coletar dado sensível de menor ou automatizar qualquer decisão sobre atendimento.

## 5. Segurança e fornecedores

- HTTPS em produção e ausência de conteúdo misto.
- Validação no servidor, codificação de saída, proteção contra abuso e mensagens de erro sem dados pessoais.
- Controle de acesso pelo menor privilégio, autenticação forte para áreas administrativas e revisão periódica de acessos.
- Segredos apenas no servidor/gestor de segredos; nunca no cliente ou repositório.
- Criptografia adequada em trânsito e, quando aplicável, em repouso; backups protegidos e com exclusão coerente.
- Contratos e configuração dos operadores compatíveis com finalidade, confidencialidade, suboperadores, exclusão, incidentes e auditoria.
- Desativar analytics, pixels, chat, mapas incorporados e fontes remotas até avaliar necessidade, dados transmitidos e mecanismo de escolha.
- Definir retenção curta para contatos não convertidos e rotina verificável de descarte.

## 6. Direitos e governança

- Canal testado para acesso, correção, informação, revogação/oposição e exclusão quando aplicável.
- Registro simplificado das operações de tratamento e decisões de risco.
- Responsável nomeado pelo fluxo, mesmo quando não houver obrigação de encarregado.
- Política de segurança e treinamento proporcional ao acesso aos dados.
- Considerar RIPD antes do tratamento quando o contexto puder gerar alto risco; solicitar avaliação jurídica quando os critérios forem incertos.

## 7. Incidentes

- Plano com detecção, contenção, preservação de evidências, avaliação de risco e responsáveis.
- Operadores devem avisar o controlador sem demora injustificada e fornecer os dados necessários à análise.
- Manter registro dos incidentes pelo período exigido pela regulamentação vigente.
- Antes de afirmar prazos ou decidir comunicação, consultar a versão atual do Regulamento de Comunicação de Incidente de Segurança da ANPD. Incidentes com risco ou dano relevante podem exigir comunicação à ANPD e aos titulares.

## 8. Gates pré-lançamento

Marque cada item como `aprovado`, `reprovado`, `não aplicável` ou `decisão jurídica pendente`:

1. mapa de dados completo;
2. coleta mínima comprovada;
3. finalidades e hipóteses legais documentadas;
4. aviso de privacidade consistente com o comportamento real;
5. terceiros e transferências avaliados;
6. fluxo de menores validado quando aplicável;
7. retenção e exclusão implementadas;
8. direitos do titular testados;
9. controles técnicos testados;
10. plano de incidentes operacional;
11. RIPD avaliado;
12. revisão jurídica/profissional concluída para decisões sensíveis.

Falha nos itens 1–10 impede aprovação técnica. Uma `decisão jurídica pendente` impede afirmar conformidade e deve ser resolvida antes do lançamento do fluxo afetado.

## Fontes oficiais para conferência

- [Lei nº 13.709/2018 — texto compilado](https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709compilado.htm)
- [Guia de Segurança da Informação para Agentes de Tratamento de Pequeno Porte](https://www.gov.br/anpd/pt-br/assuntos/noticias/anpd-publica-guia-de-seguranca-para-agentes-de-tratamento-de-pequeno-porte)
- [Regulamento para agentes de tratamento de pequeno porte](https://www.gov.br/anpd/pt-br/acesso-a-informacao/institucional/atos-normativos/regulamentacoes_anpd/resolucao-cd-anpd-no-2-de-27-de-janeiro-de-2022)
- [Orientações da ANPD sobre comunicação de incidentes](https://www.gov.br/anpd/pt-br/canais_atendimento/agente-de-tratamento/comunicado-de-incidente-de-seguranca-cis)
- [Orientações da ANPD sobre RIPD](https://www.gov.br/anpd/pt-br/canais_atendimento/agente-de-tratamento/relatorio-de-impacto-a-protecao-de-dados-pessoais-ripd)

Confira sempre as versões vigentes; links e regras podem ser atualizados.
