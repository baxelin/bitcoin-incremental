# Bitcoin Incremental Game

Bitcoin Incremental Game é um jogo incremental (idle/clicker) desenvolvido em JavaScript puro, HTML e CSS, onde o objetivo é minerar e vender bitcoins para acumular riqueza e evoluir suas capacidades de mineração.


## Funcionalidades

- **Mineração Manual:** Clique no botão "Minerar!" para ganhar satoshis (frações de bitcoin).
- **Venda de Bitcoins:** Converta seus satoshis acumulados em dinheiro fictício (R$) usando o botão "Vender!".
- **Upgrade de Poder de Clique:** Compre melhorias para aumentar a quantidade de satoshis minerados por clique.
- **Auto Clicker:** Compre auto clickers para minerar automaticamente a cada segundo, mesmo sem clicar.
- **Progressão de Preços:** O custo dos upgrades aumenta progressivamente, tornando o desafio maior conforme você evolui.
- **Salvamento e Carregamento Automático com localStorage:** Todo o progresso do jogo é salvo automaticamente no navegador a cada 5 segundos e ao sair da página, utilizando o localStorage. Ao retornar ao jogo, seu progresso é carregado automaticamente, permitindo continuar de onde parou sem perder conquistas.

## Como Jogar

1. Clique em "Minerar!" para começar a acumular satoshis.
2. Quando tiver satoshis suficientes, clique em "Vender!" para convertê-los em dinheiro.
3. Use o dinheiro para comprar upgrades de poder de clique e auto clickers.
4. Continue evoluindo para minerar cada vez mais rápido!

## Estrutura do Projeto

- `index.html`: Estrutura básica da interface do jogo.
- `main.js`: Lógica principal do jogo, manipulação de DOM, upgrades, auto clicker e salvamento.

## Tecnologias Utilizadas

- HTML5
- JavaScript (ES6)

## Como Executar

1. Baixe ou clone este repositório.
2. Abra o arquivo `index.html` em seu navegador preferido.
3. Jogue diretamente, sem necessidade de instalação ou dependências externas.


## Observações

- O progresso é salvo localmente no navegador via localStorage. Limpar os dados do navegador irá resetar o jogo.
- O jogo é totalmente client-side, sem backend ou integração real com criptomoedas.

## Jogue Online

[Acesse o site aqui](https://baxelin.github.io/bitcoin-incremental/)

## Autor

Desenvolvido por Lucas Baccelli.

---

Sinta-se à vontade para sugerir melhorias ou customizar o jogo!
