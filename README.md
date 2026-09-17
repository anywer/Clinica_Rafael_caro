# Landing page — Rafael Caminha Caro

Landing page estática em HTML, CSS e JavaScript, sem dependências de produção, cookies ou rastreadores.

## Executar localmente

Na pasta do projeto:

```powershell
python -m http.server 4173 --bind 127.0.0.1
```

Abra `http://127.0.0.1:4173`.

## Antes da publicação

- Confirmar com Rafael o número profissional de WhatsApp e o canal para solicitações de privacidade.
- Revisar textos, endereço e `CRP 124528/06` com o profissional.
- Publicar depoimentos somente após autorização específica e revisão ética.
- Substituir os cartões “Em preparação” apenas quando os artigos estiverem disponíveis.

## Teste automatizado

O teste em `tests/site-check.cjs` usa Playwright e o Chrome instalado para verificar console, imagens, requisições externas, overflow, menu, questionário e movimento reduzido em 320, 375, 768, 1024 e 1440 px.
