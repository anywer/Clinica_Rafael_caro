# Revisão de segurança e LGPD

Data: 15/09/2026  
Escopo: `index.html`, `styles.css`, `script.js` e fluxo de agendamento.

## Resultado

Nenhum bloqueador técnico encontrado. A página foi desenhada para minimizar dados e não deve ser descrita como “certificada” ou absolutamente conforme à LGPD sem validação jurídica e operacional.

## Fluxo de dados

| Etapa | Dado usado | Destino | Persistência |
| --- | --- | --- | --- |
| Questionário | Público, modalidade e período | Memória da página | Nenhuma |
| Texto opcional | Informação breve digitada pelo visitante | Memória da página | Nenhuma pelo site |
| Resumo | Texto criado no navegador | Área visível e área de transferência após ação consciente | Nenhuma pelo site |
| WhatsApp | Número provisório do profissional; mensagem colada pelo visitante | WhatsApp/Meta após abertura do chat | Conforme políticas e operação da plataforma |
| Navegação | Nenhum identificador | Apenas arquivos locais do site | Nenhuma |

O formulário não pede nome, telefone, e-mail, diagnóstico, sintomas, histórico, medicação, documento ou relato íntimo. O campo livre é opcional, limitado a 500 caracteres e acompanhado de orientação explícita para não inserir esses dados. Ainda assim, um visitante pode voluntariamente escrever informação sensível; essa possibilidade exige validação profissional/jurídica antes da publicação. O site não usa `localStorage`, `sessionStorage`, cookies, analytics, pixels ou fontes externas. As opções para adolescentes permanecem estritamente administrativas.

## Controles implementados

- Política CSP restritiva e `Referrer-Policy` por metatag.
- `connect-src 'none'`, sem código de terceiros e sem interpolação com `innerHTML`.
- Valores do formulário limitados a opções predefinidas; saída inserida com `textContent`.
- Questionário processado inteiramente no cliente e sem envio automático.
- O relato não é colocado em query string: o botão copia a prévia e abre somente o chat do número provisório, para revisão e colagem consciente pelo visitante.
- Link externo usa `noopener`, `noreferrer` e política de referenciador restritiva.
- Aviso de privacidade coerente com o comportamento atual.
- Aviso explícito de que o site não atende emergências.
- Depoimentos e artigos não foram inventados; espaços futuros estão identificados.
- Monograma servido como arquivo local, sem CDN, fonte ou requisição adicional a terceiros.

## Pendências antes de publicar

1. Substituir e confirmar o número provisório `17 9812-1449` antes da publicação.
2. Definir o canal responsável por solicitações de titulares e refletir isso no aviso de privacidade.
3. Validar a necessidade e a base jurídica do campo opcional, o tratamento no WhatsApp, o atendimento de adolescentes e as rotinas do consultório com orientação profissional/jurídica adequada.
4. No servidor de produção, repetir CSP e políticas de segurança como cabeçalhos HTTP.

Risco residual atual: moderado para publicação devido ao texto livre e ao terceiro WhatsApp; aceitável apenas como protótipo local até as decisões acima. Não há alegação de conformidade jurídica.
