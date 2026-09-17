# Planejamento da landing page — Rafael Caminha Caro

## 1. Objetivo da primeira versão

Criar uma presença digital acolhedora, clara e profissional que:

- apresente Rafael, sua abordagem e os formatos de atendimento;
- ajude a pessoa a entender se aquele atendimento faz sentido para ela;
- reduza a ansiedade antes do primeiro contato;
- conduza ao agendamento sem pressão comercial;
- permita expansão futura sem exigir uma reconstrução completa.

A página não deve diagnosticar, prometer resultados nem substituir atendimento de urgência.

## 2. Informações já fornecidas

- **Nome:** Rafael Caminha Caro
- **Registro informado:** CRP 124528/06 — confirmar a grafia/formatação pública antes de publicar
- **Públicos:** adolescentes, adultos e casais
- **Abordagem:** psicoterapia de base Gestalt-terapia
- **Modalidades:** presencial e on-line
- **Endereço informado:** Rua Floriano Peixoto, 1867, Boa Vista, São José do Rio Preto — SP, 15025-110

## 3. Direção de marca

### Personalidade

Calma, humana, contemporânea, confiável e sem aparência hospitalar. A comunicação deve ser direta, acolhedora e sóbria, evitando clichês motivacionais e linguagem excessivamente técnica.

### Conceito visual sugerido

**“Espaço para perceber”**: muito espaço em branco, formas orgânicas discretas e blocos que parecem respirar. O movimento representa processo e presença, não velocidade.

### Logo inicial

Monograma **RC** dentro de um círculo azul profundo, com as letras construídas por contraste de peso ou espaço negativo. O círculo pode ultrapassar parcialmente o limite superior direito do cabeçalho, criando a assimetria desejada. Evitar o símbolo Ψ e ícones genéricos de cérebro para diferenciar a marca.

Entregas futuras da logo:

- marca principal horizontal;
- monograma circular;
- versão monocromática;
- favicon;
- regras mínimas de respiro e contraste.

### Paleta proposta

| Papel | Cor | Hex |
|---|---|---|
| Fundo principal | Branco azulado | `#F7FAFC` |
| Superfície suave | Azul névoa | `#EAF3F8` |
| Primária | Azul sereno | `#3F7896` |
| Destaque escuro | Azul profundo | `#173B52` |
| Texto | Grafite azulado | `#24333D` |
| Texto secundário | Cinza ardósia | `#5F707A` |
| Acento pontual | Verde sálvia | `#91AFA4` |

O verde deve aparecer apenas como apoio. Todos os pares de cor precisam ser validados por contraste WCAG antes da implementação final.

### Tipografia

- **Títulos:** Manrope, pesos 500–700.
- **Texto:** Source Sans 3, pesos 400–600.
- **Fallback:** `system-ui, sans-serif`.

Usar no máximo duas famílias e poucos pesos. Corpo entre 17 e 19 px no desktop, títulos fluidos e linhas de texto com largura confortável.

## 4. Arquitetura da página

### 1. Cabeçalho

Logo, links curtos (`Início`, `Sobre`, `Atendimento`, `Artigos`, `Contato`) e CTA `Agendar conversa`. No celular, menu acessível e compacto. O contorno inferior pode ser uma curva suave, não uma faixa reta.

### 2. Hero

- título humano e objetivo;
- frase curta explicando público, abordagem e modalidades;
- CTA principal `Agendar uma conversa`;
- CTA secundário `Conheça meu trabalho`;
- retrato profissional de Rafael ou composição abstrata temporária;
- monograma circular integrado ao canto superior direito.

Direção de texto, ainda sujeita à aprovação:

> Um espaço de escuta para compreender o que você vive e construir novas possibilidades.

### 3. Faixa de confiança

Três informações fáceis de escanear: `CRP`, `Presencial e on-line` e `Adolescentes, adultos e casais`.

### 4. Apresentação breve

Foto, biografia de 80–120 palavras, formação e modo de trabalho. Evitar currículo longo na página inicial; detalhes podem ir para uma página “Sobre”.

### 5. Por que fazer terapia

Cards ou lista curta, escritos como situações reconhecíveis: sofrimento emocional, mudanças de vida, relações, autoconhecimento e padrões que se repetem. A seção deve informar sem sugerir diagnóstico.

### 6. Como funciona o atendimento

Fluxo em três passos: primeiro contato, combinação de formato/horário e início do acompanhamento. Informar duração, frequência, valores ou política de consulta somente após validação de Rafael.

### 7. Gestalt-terapia

Explicação simples e curta, com link para um artigo mais completo. Priorizar como a experiência pode ser vivida pelo paciente, não uma definição acadêmica extensa.

### 8. Modalidades e públicos

Apresentar presencial, on-line, adolescentes, adultos e casais. Cada item precisa informar para quem é, como funciona e qual é o próximo passo.

### 9. Depoimentos

Espaço previsto, mas publicar somente com autorização adequada e após validação ética/profissional. Como alternativa inicial, usar “O que esperar do processo” ou perguntas frequentes, sem inventar avaliações.

### 10. Artigos

Grade com três publicações recentes, distinguindo claramente:

- conteúdo autoral de Rafael;
- conteúdo recomendado/compartilhado, com autor e fonte;
- data e tempo estimado de leitura.

### 11. FAQ

Perguntas sobre primeira sessão, atendimento on-line, confidencialidade, público atendido e agendamento. Respostas curtas, sem aconselhamento clínico individual.

### 12. CTA final e rodapé

Contato, localização, CRP, política de privacidade, direitos autorais e aviso de que o canal não atende emergências. Incluir orientação de urgência somente após validar texto e contatos oficiais aplicáveis.

## 5. Movimento e interação

- entrada suave apenas dos blocos principais;
- microinteração no botão e nos links;
- transição discreta na abertura do menu e FAQ;
- formas de fundo com movimento quase imperceptível;
- respeito a `prefers-reduced-motion`;
- nada de carrossel automático, cursor personalizado ou parallax pesado.

Meta: a animação deve orientar ou dar acabamento; se não cumprir uma dessas funções, não entra.

## 6. Agendamento por fases

### Fase 1 — contato guiado

Um formulário curto coleta apenas o necessário e gera uma mensagem organizada para WhatsApp ou outro canal escolhido. Sugestão de perguntas:

1. atendimento para adolescente, adulto ou casal;
2. preferência por presencial, on-line ou ambos;
3. períodos disponíveis;
4. melhor forma de retorno.

Não solicitar relato clínico, diagnóstico ou detalhes íntimos nesse fluxo. Exibir consentimento de contato e aviso de não emergência.

### Fase 2 — agenda simples

Disponibilidade real, reserva de horário, confirmação e lembrete. Antes de implementar, decidir política de cancelamento, proteção de dados, responsável pelo calendário e o que acontece quando não há horários.

### Fase 3 — conteúdo administrável

Painel enxuto para publicar artigos, editar FAQ e destacar conteúdos recomendados. Depoimentos permanecem sujeitos a consentimento e validação ética.

### Fase 4 — evolução opcional

SEO local, newsletter sem dados sensíveis, analytics com privacidade, páginas específicas por público e integração de agenda. Não criar área clínica/prontuário dentro deste projeto sem um escopo próprio de segurança e conformidade.

## 7. Regras do produto

- linguagem acolhedora, simples e sem promessas de cura;
- nenhum depoimento, credencial ou dado deve ser inventado;
- coleta mínima de dados, finalidade explícita e consentimento;
- acessibilidade por teclado, foco visível, semântica e contraste;
- desempenho móvel como prioridade;
- componentes e conteúdo preparados para expansão, sem arquitetura prematura;
- HTML semântico, CSS organizado e JavaScript apenas onde houver comportamento real;
- validar com Rafael toda informação profissional, ética, preço, agenda e contato antes da publicação.

## 8. Conteúdo necessário antes do código final

- foto profissional em boa resolução;
- mini-biografia e formação;
- confirmação do formato do CRP;
- telefone/WhatsApp e e-mail profissionais;
- endereço e indicação de acessibilidade do consultório;
- disponibilidade e política de atendimento;
- lista de temas de artigos;
- autorização e estratégia para depoimentos;
- links profissionais existentes;
- preferência entre foto real ou arte abstrata no hero.

## 9. Critérios de sucesso da primeira versão

- proposta compreendida em até poucos segundos;
- CTA principal visível sem rolagem em telas comuns;
- fluxo de contato concluído com teclado e celular;
- página legível em 320 px sem rolagem horizontal;
- boa experiência com movimento reduzido e leitor de tela;
- carregamento rápido e sem bibliotecas desnecessárias;
- nenhum dado sensível enviado sem necessidade ou consentimento.

### Gate LGPD antes da publicação

O lançamento do formulário ou agenda depende da aplicação do checklist em `.agents/skills/frontend-security-audit/references/lgpd-health-checklist.md`. Devem estar documentados o mapa dos dados, finalidades, hipóteses legais validadas, agentes e fornecedores, retenção, exclusão, canal do titular, fluxo para menores e plano de incidentes. A revisão técnica não substitui validação jurídica e profissional.

## 10. Próxima decisão de design

Antes de codar, produzir um wireframe de baixa fidelidade para desktop e celular e escolher uma das duas direções:

- **Editorial humana:** fotografia, tipografia expressiva e formas orgânicas discretas;
- **Minimalista abstrata:** monograma, gradientes leves e ilustração geométrica, útil enquanto não houver fotografia profissional.

A recomendação inicial é **Editorial humana**, porque confiança e vínculo são centrais para este tipo de serviço.

## 11. Wireframe de baixa fidelidade

O primeiro esqueleto comparativo para desktop e celular está em `assets/wireframes/landing-wireframe-desktop-mobile-v1.png`. Ele valida ordem, hierarquia, densidade e adaptação das seções; não representa ainda cores, tipografia final, fotografia ou acabamento visual.

## 12. Protótipo visual V1

A direção **Editorial humana** foi aplicada no mockup `assets/mockups/landing-editorial-humana-v1.png`. As decisões e pendências desta etapa estão documentadas em `docs/direcao-visual-v1.md`.

## 13. Protótipo de fluxo orgânico V2

O mockup `assets/mockups/landing-fluxo-organico-v2.png` substitui a visão comprimida da página por cenas sucessivas de rolagem. A estratégia de movimento, os limites de acessibilidade e a evolução do monograma estão em `docs/direcao-movimento-v2.md`.

## 14. Direção adotada e retrato V3

A direção de fluxo orgânico foi aprovada. O retrato profissional tratado está em `assets/portraits/rafael-profissional-v1.png` e sua aplicação na seção `Sobre`, em desktop e celular, está consolidada no mockup `assets/mockups/landing-fluxo-organico-com-retrato-v3.png`. A imagem não será repetida no hero, preservando a descoberta progressiva da página.

## 15. Direção visual final V4

A referência botânica enviada pelo usuário passa a ser a fonte visual oficial. A versão final desta etapa está em `assets/mockups/landing-botanica-com-retrato-v4-aprovada.png` e combina folhas, círculos translúcidos, linha contínua, RC circular e o retrato tratado na seção `Sobre`. Regras completas: `docs/direcao-visual-aprovada-v4.md`.

## 16. Cabeçalho e monograma V5

A versão definitiva combina o layout botânico e o retrato da V4 com o cabeçalho curvo e o monograma RC aberto da V3. A fonte de verdade passa a ser `assets/mockups/landing-botanica-retrato-header-rc-v5-aprovada.png`, documentada em `docs/direcao-visual-aprovada-v5.md`.
