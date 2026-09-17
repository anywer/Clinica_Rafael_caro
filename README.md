
# Rafael Caminha Caro — Website Institucional

Landing page responsiva para apresentação profissional do psicólogo Rafael Caminha Caro, com foco em leitura tranquila, confiança, acessibilidade e contato inicial simples.

> **Status:** protótipo aprovado em preparação para testes públicos. O registro profissional está mascarado e os dados definitivos devem ser validados antes do lançamento oficial.

## Visão geral

O projeto combina uma direção visual editorial e botânica com uma experiência de navegação progressiva. A página apresenta o profissional, sua abordagem, modalidades de atendimento, etapas do primeiro contato, artigos, perguntas frequentes e um fluxo breve de agendamento pelo WhatsApp.

Todo o site foi construído com tecnologias nativas, sem framework ou dependências de produção.

## Principais recursos

- Layout responsivo para celular, tablet, notebook e desktop.
- Navegação acessível por mouse, toque e teclado.
- Movimento narrativo vinculado à rolagem em telas maiores.
- Alternativa estática para `prefers-reduced-motion` e dispositivos menores.
- Retrato responsivo sem ampliação acima da resolução disponível.
- Questionário de agendamento com avanço automático e opção de retorno.
- Prévia da mensagem antes da abertura do WhatsApp.
- Conteúdo funcional mesmo quando o JavaScript está indisponível.
- Política de conteúdo restritiva e ausência de scripts externos.
- Sem cookies, analytics ou armazenamento local no estado atual.

## Tecnologias

- HTML5 semântico
- CSS3 nativo
- JavaScript nativo
- Imagens responsivas em WebP
- Playwright para regressão visual e funcional

Python não faz parte da aplicação. Ele pode ser utilizado apenas como servidor HTTP local durante o desenvolvimento.

## Estrutura do projeto

```text
.
├── index.html                 # Estrutura e conteúdo da página
├── styles.css                 # Identidade visual e responsividade
├── script.js                  # Navegação, animações e agendamento
├── assets/
│   ├── brand/                 # Monograma aprovado
│   ├── images/                # Imagens otimizadas utilizadas pelo site
│   └── portraits/             # Retrato profissional de fallback
├── docs/                      # Decisões de produto e direção visual
├── reports/                   # Relatórios de QA, segurança e evidências
├── tests/site-check.cjs       # Regressão automatizada no navegador
└── CONTEXT.md                 # Glossário e contexto do domínio
```

## Executar localmente

Na raiz do projeto, inicie um servidor HTTP:

```powershell
python -m http.server 5500 --bind 127.0.0.1
```

Depois, abra:

```text
http://127.0.0.1:5500/index.html
```

Também é possível usar uma extensão como Live Server. Abrir o arquivo diretamente pelo protocolo `file://` não é recomendado para validação final.

## Verificações

Validação de sintaxe JavaScript:

```powershell
node --check script.js
```

Regressão automatizada, com Chrome e Playwright disponíveis:

```powershell
$env:SITE_URL="http://127.0.0.1:5500"
$env:SCREENSHOT_RUN="local"
node tests/site-check.cjs
```

A suíte verifica, entre outros pontos:

- larguras entre 320 e 1874 pixels;
- overflow horizontal e imagens quebradas;
- erros no console e requisições externas;
- menu móvel e navegação por teclado;
- fluxo completo de agendamento;
- comportamento das cenas de rolagem;
- redução de movimento;
- enquadramento e resolução do retrato.

As capturas geradas ficam em `reports/screenshots/`.

## Privacidade e segurança

O formulário funciona inteiramente no navegador e não envia respostas para um servidor próprio. O visitante escolhe preferências práticas, revisa a mensagem e decide conscientemente se deseja abrir o WhatsApp.

No estado atual:

- não há banco de dados, cookies, pixels ou analytics;
- não há armazenamento em `localStorage` ou `sessionStorage`;
- o texto livre é opcional e limitado;
- a interface orienta a não informar diagnóstico, medicação, documentos ou relatos íntimos;
- nenhum dado deve ser colocado em URLs, logs ou nomes de arquivo;
- o WhatsApp passa a ser um terceiro envolvido somente após a ação do visitante.

Este projeto não deve ser descrito como integralmente adequado à LGPD sem a validação jurídica e operacional do fluxo, dos fornecedores e das rotinas do consultório. Consulte `reports/security-review.md` para as pendências registradas.

## Antes da publicação oficial

- Confirmar o CRP e restaurar sua exibição obrigatória.
- Substituir e validar o número provisório do WhatsApp.
- Confirmar endereço, modalidades e horários.
- Definir o responsável e o canal para solicitações de titulares.
- Revisar o texto livre, o atendimento a adolescentes e o tratamento no WhatsApp.
- Configurar HTTPS e cabeçalhos de segurança na hospedagem.
- Criar `robots.txt`, `sitemap.xml`, URL canônica e dados estruturados.
- Remover qualquer diretiva `noindex` usada em ambientes de teste.
- Validar o site em dispositivos físicos, especialmente Safari no iOS.

Para uma prévia pública, use um repositório novo e sem histórico, contendo apenas os arquivos necessários ao site. Não publique `docs/`, `reports/`, mockups, imagens-fonte ou o histórico interno deste repositório.

## Diretrizes para manutenção

- Preserve HTML semântico e a leitura do conteúdo sem JavaScript.
- Prefira CSS e JavaScript nativos quando forem suficientes.
- Não adicione bibliotecas sem benefício mensurável.
- Mantenha animações discretas, responsivas e compatíveis com movimento reduzido.
- Não publique depoimentos, alegações clínicas ou promessas de resultado sem revisão ética.
- Identifique claramente artigos autorais e conteúdos compartilhados.
- Execute a regressão antes de integrar alterações visuais ou funcionais.

## Próximas evoluções

- Domínio e hospedagem oficiais.
- Páginas individuais para serviços e abordagem.
- Área de artigos com autoria, fontes e datas de revisão.
- SEO técnico e presença local no Google.
- Agendamento estruturado somente após definição do fluxo de dados e LGPD.
- Métricas de uso apenas após decisão de privacidade e atualização do aviso correspondente.

## Direitos de uso

O código, a identidade visual, o monograma, os textos e as imagens deste projeto são de uso privado. A ausência de uma licença de código aberto significa que nenhum direito de cópia, modificação ou redistribuição é concedido automaticamente.
