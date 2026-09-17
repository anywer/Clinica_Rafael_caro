# Revisão de segurança e LGPD

Data: 15/09/2026  
Escopo: `index.html`, `styles.css`, `script.js` e fluxo de agendamento.

## Resultado

Nenhum bloqueador técnico encontrado. A página foi desenhada para minimizar dados e não deve ser descrita como “certificada” ou absolutamente conforme à LGPD sem validação jurídica e operacional.

## Fluxo de dados

| Etapa | Dado usado | Destino | Persistência |
| --- | --- | --- | --- |
| Questionário | Público, modalidade e período | Memória da página | Nenhuma |
| Resumo | Texto criado no navegador | Área visível e área de transferência após ação | Nenhuma pelo site |
| Navegação | Nenhum identificador | Apenas arquivos locais do site | Nenhuma |

O formulário não pede nome, telefone, e-mail, diagnóstico, sintomas, histórico, medicação ou relato íntimo. Não usa `localStorage`, `sessionStorage`, cookies, analytics, pixels, fontes externas ou requisições de rede. As opções para adolescentes permanecem estritamente administrativas.

## Controles implementados

- Política CSP restritiva e `Referrer-Policy` por metatag.
- `connect-src 'none'`, sem código de terceiros e sem interpolação com `innerHTML`.
- Valores do formulário limitados a opções predefinidas; saída inserida com `textContent`.
- Questionário processado inteiramente no cliente e sem envio automático.
- Aviso de privacidade coerente com o comportamento atual.
- Aviso explícito de que o site não atende emergências.
- Depoimentos e artigos não foram inventados; espaços futuros estão identificados.
- Monograma servido como arquivo local, sem CDN, fonte ou requisição adicional a terceiros.

## Pendências antes de publicar

1. Confirmar o número profissional de WhatsApp. Ele não foi presumido nem incluído em URL.
2. Definir o canal responsável por solicitações de titulares e refletir isso no aviso de privacidade.
3. Validar conteúdo, uso de depoimentos, atendimento de adolescentes e rotinas do consultório com orientação profissional/jurídica adequada.
4. No servidor de produção, repetir CSP e políticas de segurança como cabeçalhos HTTP.

Risco residual atual: baixo para a versão estática local; a classificação deve ser revista quando houver backend, agenda, analytics ou integrações.
