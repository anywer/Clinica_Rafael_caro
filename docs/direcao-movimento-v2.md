# Direção visual e de movimento V2

> **Versão superada.** A direção final aprovada recupera as folhas e transparências do estudo anterior e está documentada em `docs/direcao-visual-aprovada-v4.md`.

## Intenção

A página deve ser percebida como uma sequência de encontros, não como uma coleção de blocos exibidos ao mesmo tempo. O mockup `assets/mockups/landing-fluxo-organico-v2.png` apresenta três momentos consecutivos da rolagem e uma adaptação móvel.

## O que muda em relação à V1

- monograma RC passa a ter desenho próprio e integração com a curva do cabeçalho;
- saem folhas, pedras, grupos de círculos translúcidos e outros clichês de bem-estar;
- saem faixas horizontais repetitivas e grades de cards iguais;
- entram seções de maior altura, composição assimétrica e pausas de espaço vazio;
- uma linha contínua atravessa a experiência e conecta visualmente os assuntos;
- o fim de cada tela revela apenas uma pequena parte da próxima seção;
- modalidades são tratadas como tipografia editorial, não como quatro cartões idênticos.

## Sequência de rolagem

### Cena 1 — abertura

Hero próximo de uma tela completa. Título, CTA e informações essenciais entram em poucos grupos. A linha surge discretamente e conduz ao próximo bloco. O início da seção seguinte aparece no rodapé da tela para sugerir continuidade.

### Cena 2 — apresentação e contexto

Composição assimétrica com texto à esquerda e o retrato profissional de Rafael dentro do arco à direita. Durante a rolagem, a coluna visual pode permanecer brevemente fixa enquanto `Sobre` dá lugar a `Por que fazer terapia`.

### Cena 3 — processo e abordagem

Os três passos são ativados em sequência ao lado de um campo visual fixo. Depois, o campo se abre para Gestalt-terapia e modalidades. Artigos aparecem somente como início do próximo capítulo.

### Cenas posteriores

Artigos, FAQ e contato final mantêm o ritmo editorial, mas com menos movimento para evitar fadiga. Depoimentos só entram quando houver conteúdo autorizado; até lá, a seção não ocupa espaço vazio na página publicada.

## Interações preparadas para implementação futura

- progresso sutil da linha conforme a rolagem;
- revelação escalonada de título, texto e ação;
- camadas geométricas com deslocamentos curtos em velocidades diferentes;
- coluna visual fixa apenas enquanto sua seção estiver ativa;
- ativação progressiva dos três passos;
- transição do monograma entre assinatura ampla e cabeçalho compacto;
- prévia da próxima seção para incentivar continuidade.

## Limites técnicos e de usabilidade

- movimento nunca pode bloquear leitura ou navegação;
- animações devem usar preferencialmente `transform` e `opacity`;
- evitar cálculo contínuo pesado no evento de rolagem;
- reduzir ou remover efeitos com `prefers-reduced-motion`;
- nenhuma informação pode depender exclusivamente da animação;
- no celular, reduzir paralaxe e elementos fixos para preservar espaço e desempenho;
- reservar dimensões dos elementos para impedir saltos de layout;
- manter contraste e foco visível em todos os estados.

## Direção do monograma RC

O RC deve funcionar como assinatura, não como duas letras digitadas dentro de um círculo. A direção aprovada para refinamento usa:

- `R` e `C` conectados por gesto contínuo;
- espessura estável e boa leitura em tamanho pequeno;
- azul profundo e branco azulado;
- integração com a curva do cabeçalho;
- versão circular apenas para favicon e avatar;
- versão aberta para cabeçalho e assinatura.

Antes da implementação, o símbolo deverá ser redesenhado como SVG limpo, com curvas óticas ajustadas e teste em 16, 24, 32 e 64 px.

## Estado da etapa

A V2 está adotada como direção de fluxo, densidade e linguagem visual. O retrato tratado foi integrado na V3. Textos secundários do mockup continuam provisórios e não devem ser publicados sem revisão de Rafael.
