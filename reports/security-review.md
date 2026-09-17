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

## Atualização — narrativa de movimento (17/09/2026)

A alteração é estritamente visual e não modifica o fluxo de dados. O controlador de scroll usa apenas posição e dimensões da própria página em memória; não cria identificadores, logs, cookies, armazenamento, telemetria, requisições ou integração com terceiros.

- Nenhuma dependência externa ou script de fornecedor foi adicionado.
- A CSP existente permanece restritiva (`connect-src 'none'`).
- Nenhum dado do questionário participa das animações.
- Preferência de movimento reduzido é consultada localmente por `matchMedia` e não é armazenada.
- As pendências de publicação já registradas — número provisório, campo livre, WhatsApp, canal do titular e validação profissional/jurídica — permanecem inalteradas.

Conclusão desta alteração: nenhum novo risco de segurança ou LGPD identificado. O risco residual do protótipo continua moderado pelos motivos anteriores, não pela animação.

## Atualização — apresentação do aviso de privacidade (17/09/2026)

A alteração remove apenas o marcador visual nativo e padroniza os links do rodapé. O controle continua sendo um `<details>` semântico, operável por teclado e com estado expandido/recolhido exposto às tecnologias assistivas. O texto, o fluxo de dados, os terceiros e as pendências LGPD permanecem inalterados.

## Atualização — preparação para prévia pública (17/09/2026)

Escopo: mascaramento do registro profissional na interface e nos documentos textuais do estado atual do projeto.

- O valor exibido do CRP foi substituído por `XXXXXX/XX` no cabeçalho, retrato e rodapé.
- As referências textuais internas no estado atual também foram mascaradas.
- O número original ainda pode existir no histórico Git e estar visível dentro de mockups ou capturas antigas. Por isso, este repositório completo não deve ser tornado público para testes.
- A prévia pública deve ser criada em um repositório novo, sem histórico, contendo somente `index.html`, `styles.css`, `script.js` e os assets efetivamente usados pela página.
- Nome, retrato, endereço e WhatsApp continuam sendo dados pessoais/publicitários visíveis. A publicação depende de confirmação expressa do profissional e da substituição do telefone provisório.
- O campo livre e a integração com WhatsApp mantêm as pendências jurídicas e operacionais já registradas. Esta alteração não autoriza alegar conformidade integral com a LGPD.

Estado: adequado para uma prévia pública sanitizada, desde que ela não use este histórico Git nem inclua documentos, relatórios, mockups ou capturas internas.
