<h1 align="center">
  <img src="assets/reprograma-fundos-claros.png" alt="logo reprograma" width="500">
</h1>

# On23-TodasEmTech-Santander-ReactJS-I

Esta é a 13ª semana da turma online: Todas em Tech 0n23 - Front-end, nesta aula do dia 17/06/2023 teremos os seguintes conteúdos:

  - [1. O que é o ReactJS?](#1-o-que-é-o-reactjs)
  - [2. Preparando o ambiente](#2-preparando-o-ambiente)
  - [3. Primeiro Projeto - Hello Word!](#3-primeiro-projeto---hello-word)
  - [4. Componentes e JSX](#4-components-e-jsx)
  - [5. Props](#5-props)
  - [6. State](#6-state)
## Apresentação

### Quem é a professora Lilit?

<img src='./assets/lilit.jpeg' width=500 alt='Selfie da Lilit com cabelos cacheados longos pretos, com o rosto rodeado por bolinhas predominantemente roxas'>

[Lilit Bandeira](https://www.instagram.com/lilitravesti), é uma travesti paraibana residente no São Paulo, trabalho como Software Engineer no Nubank, ex-aluna e professora {reprograma} e professora também no minas programam, estudante de Analise e Desenvolvimento de Sistemas na Mackenzie;

#### Contatos

- [E-mail](devlilitbandeira@gmail.com)
- [LinkedIn](https://www.linkedin.com/in/lilitbandeira)
- [GitHub](https://github.com/lilitbandeira)

### Quem são as monitoras?

<img src='./assets/titania.jpeg' width=500 alt='personagem Titania do anime Mahoutsukai no Yome, ela tem cabelos pretos lisos e longos, olhos cor de groselha, está sorrindo e usa um vestido preto com ombros amostra, ao fundo o tronco de uma arvore'>

### Quem são as alunas?

<img src='./assets/kunoichis.webp' width=500 alt='4 personagens do anime naruto'>

## Acordos

- Enviar dúvidas no chat com as monitoras;
- Levantar a mão sempre que desejar falar, o que pode ser feito a qualquer momento;
- Manter microfones desligados sempre que alguém estiver falando;
- Manter as câmeras ligadas o máximo de tempo possível;
- Antes de começar, vamos organizar nosso setup.
  * Fork esse [repositório](https://github.com/reprograma/on23-santander-s9-js-3) 
  * Clone o fork na sua máquina (Para isso basta abrir o seu terminal e digitar `git clone url-do-seu-repositorio-forkado`)
  * Entre na pasta do seu repositório (Para isso basta abrir o seu terminal e digitar `cd nome-do-seu-repositorio-forkado`)
  * Altere as pastas chamadas "nome-aluna" para o seu nome-sobrenome, estes são os únicos locais onde você deve realizar alterações 

# Plano de Aula

## 1. O que é o ReactJS? 
<br>

> Acesse a documentação em português do [ReactJS](https://pt-br.legacy.reactjs.org/)

<br>

- O React é uma biblioteca Javascript usada para criar interfaces para pessoas usuárias.

- Como já vimos, biblioteca é um conjunto de funcionalidades já desenvolvidas por outras pessoas desenvolvedoras para que outras pessoas possam utilizar estas funcionalidades sem precisar recriá-las, bibliotecas costumam ser criadas para solucionar problemas ou necessidades comuns a várias aplicações.

- Interface é camada da aplicação com a qual pessoa usuária irá interagir, é a experiência que a usuária tem com nossas telas.

- O React é uma das tecnologias mais usadas no mercado nacional e global para interfaces Web (ReactJS) e até mobile (React Native).

- O React, que hoje apresenta várias novas possibilidades e soluções, especialmente através de frameworks como o `Next.JS`, surgiu especialmente para possibilitar a criação de SPAs (Single Page Application) que pode reescrever dinamicamente uma página ou partes dela com novos dados sem a necessidade de carregar uma nova página inteira, o que possibilita criar soluções complexas de maneira bem mais simples.

<br>
--- 

## 2. Preparando o ambiente
<br>

> Para iniciar nosso projeto, vamos precisar do [`NodeJs`](https://nodejs.org/en/) que já instalamos anteriormente

<br>

### 2.1. Vamos relembrar o que é o [`npm`](https://www.npmjs.com/) ?

- Para gerenciar as bibliotecas que usamos no nosso projeto, utilizamos um gerenciador de pacotes. O próprio Node.Js ao ser instalado, instala automaticamente o seu gerenciador de pacotes padrão, o NPM (Node Package Manager).

- É através dos gerenciadores (npm, yarn) que também gerenciamos frameworks, como o ReactJS, o Angular ou o VueJS

<br>
---

## 3. Primeiro Projeto - Hello Word!
<br>

### 3.1. Vamos utilizar o [`Vite`](https://vitejs.dev/guide/) para criar nosso primeiro projeto React
<br>

**Dicas de conteúdo:**
> [Thread da Simara Conceição no Twitter](https://twitter.com/SimaraConceicao/status/1529800875144781825?s=20&t=2KZjH-NL3eMEORI166W79w)   <br>
> [Reels da Simara Conceição no Instagram](https://www.instagram.com/reel/CeBTbEoDUTM/)  

<br>

### 3.2. Passo a passo
<br>

- Vamos rodar o seguinte comando:

```bash
npm create vite@latest nome-do-app -- --template react
```
> Este comando vai criar um projeto react do zero para nós, usando um template do Vite.<br>
> Estará concluído quando aparecer no terminal:<br> 
`Done. now run!`

<br>

- Em seguida, devemos entrar no diretório do projeto, usando o comando:

```bash
  cd nome-do-app
```

- Depois baixamos as dependências do projeto, com o comando:

```bash
  npm install
```

- Por fim rodamos o projeto:

```bash
  npm run dev
```
> O navegador será aberto automaticamente usando a porta `localhost:3000` onde acompanharemos a página enquando desenvolvemos, esta página vai atualizar automaticamente a cada mudança salva no projeto.<br>
> O Vite já criou uma página base prontinha, de onde partiremos para construir o que quisermos!

<br>

- Vamos trocar o conteúdo da página pronta pelo nosso Hello Word!

  - Vá ao arquivo src/App.jsx;
  - Apague todo a `<div>` e todo seu conteúdo;
  - Adicione o `<h1>Hello Word</h1>` no lugar;

<br>

- Entendendo a estrutura do projeto:

<img src='./assets/estrutura.png'>
<br>

## 4. Components e JSX

- O React utiliza o conceito de componentes, que permitem que a interface seja dividida em várias partes independentes e que podem ser reutilizadas, essas partes podem ser tão pequenas quanto necessário.

- Isto possibilita muitas vantagens, entre elas dar manutenção em partes específicar e alterar vários lugares que utilizam aquele componente, alterando só o código encapsulado por ele.

- Apesar de existem duas formar de criar componentes no React, com classes e funções, mas a maneira mais simples e moderna é com funções, é como aprenderemos aqui.

- Conceitualmente os componentes são como funções `javascript`, que aceitam entradas de dados semelhantes aos argumentos `props` e retornam elementos React que descrevem o que deve ser construído na tela, como `HTML`;

- No interior do componente podemos misturar as sintaxes de `javascript` e `HTML`, chamamos esta sintaxe de `JSX`;

### 4.1. Criando um componente

- Criamos um arquivo com extensão `.js` ou `.jsx` cujo nome inicie com letra maiúscula;
- Neste arquivo criamos uma uma função com o mesmo nome do arquivo e exportamos esta função:

```jsx
function Title() {
  return (
    <h1>Hello Word</h1>
  )
}

export default Title;
```
---
## 5. Props

- Através das props podemos deixar um componente reutilizável e dinâmico, por exemplo:

```jsx
function Title(props) {
  return (
    <h1>{props.text}</h1>
  )
}

export default Title;
```
E assim podemos chamar o componente Title diversas vezer para renderizar títulos diferentes:


```jsx
function App() {
  return(
    <div>
      <Title text="Hello Word"/>
    </div>
  )
}
```
Dentro das props também existem o children e basicamnete em vez de usar dentro de atributos em tags de autofechamento usaríamos como conteúdo em componentes de fechamento e de abertura. Assim:

```jsx
function Subtitle(props) {
  return(
    <h3>{props.children}</h3>
  )
}

export default Name
```

Ao usar esse componente, por exemplo no App.js ficaria dessa forma:

```jsx
function App() {
  return(
    <div>
      <Subtitle>on23 Todas em Tech</Subtitle>
    </div>
  )
}
```

---
## 6. State

Estado é o super poder que vai renderizar quase que em tempo real, o componente com as informações atualizadas de acordo com a interação da pessoa usuária ou regras que criamos no componente.

Diferente das props, a gente não repassa o estado pra o componente  quando vai utilizá-lo, mas a gente cria o estado dentro do próprio componente usando variaveis que terão seus valores atualizados. 

É importante também saber que o estado não muda, ou seja, ele nunca vai ser alterado, mas vai ser sobreposto a partir do seu estado atual.


# Exercícios 

## [Exercicio para sala](https://github.com/reprograma/reprograma-on23-santander-s13-react-1/tree/main/exercicios/nome-aluna/para-sala)

## [Exercicio para casa](https://github.com/reprograma/reprograma-on23-santander-s13-react-1/tree/main/exercicios/nome-aluna/projeto-casa)

---
# Citação e Agradecimento

<p align="center">
Aula construída a partir das aula da Simara Conceição 💜
</p>
