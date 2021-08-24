<!--
*** Obrigado por estar vendo o nosso README. Se você tiver alguma sugestão
*** que possa melhorá-lo ainda mais dê um fork no repositório e crie uma Pull
*** Request ou abra uma Issue com a tag "sugestão".
*** Obrigado novamente! Agora vamos rodar esse projeto incrível :D
-->

<!-- PROJECT SHIELDS -->



[![npm](https://img.shields.io/npm/v/react-native-template-gersonrsantos-basic?label=npm%20package&style=plastic)](https://www.npmjs.com/package/react-native-template-gersonrsantos-basic)
[![npm](https://img.shields.io/badge/type-Open%20Project-green?&style=plastic)](https://img.shields.io/badge/type-Open%20Project-green)
[![npm](https://img.shields.io/npm/dt/react-native-template-gersonrsantos-basic?&style=plastic)](https://www.npmjs.com/package/react-native-template-gersonrsantos-basic)
[![GitHub last commit](https://img.shields.io/github/last-commit/GersonRS/react-native-template-gersonrsantos-basic?logo=github&style=plastic)](https://github.com/GersonRS/react-native-template-gersonrsantos-basic/commits/master)
[![GitHub Issues](https://img.shields.io/github/issues/gersonrs/react-native-template-gersonrsantos-basic?logo=github&style=plastic)](https://github.com/gersonrs/react-native-template-gersonrsantos-basic/issues)
[![GitHub Language](https://img.shields.io/github/languages/top/gersonrs/react-native-template-gersonrsantos-basic?&logo=github&style=plastic)](https://github.com/GersonRS/react-native-template-gersonrsantos-basic/search?l=javascript)
[![GitHub Repo-Size](https://img.shields.io/github/repo-size/GersonRS/react-native-template-gersonrsantos-basic?logo=github&style=plastic)](https://img.shields.io/github/repo-size/GersonRS/react-native-template-gersonrsantos-basic)
[![GitHub Contributors](https://img.shields.io/github/contributors/GersonRS/react-native-template-gersonrsantos-basic?logo=github&style=plastic)](https://img.shields.io/github/contributors/GersonRS/react-native-template-gersonrsantos-basic)
[![GitHub Stars](https://img.shields.io/github/stars/GersonRS/react-native-template-gersonrsantos-basic?logo=github&style=plastic)](https://img.shields.io/github/stars/GersonRS/react-native-template-gersonrsantos-basic)
[![NPM](https://img.shields.io/github/license/GersonRS/react-native-template-gersonrsantos-basic?&style=plastic)](LICENSE)

<p align="center">
  <img alt="logo" src="assets/logo.png"/>
</p>

## Tabela de Conteúdo

- [Tabela de Conteúdo](#tabela-de-conte%C3%BAdo)
- [Sobre o Projeto](#sobre-o-projeto)
  - [Feito Com](#feito-com)
- [Começando](#come%C3%A7ando)
  - [Pré-requisitos](#pr%C3%A9-requisitos)
  - [Estrutura de Arquivos](#estrutura-de-arquivos)
  - [Instalação](#instala%C3%A7%C3%A3o)
    - [Passo Adicional no Android](#passo-adicional-no-android)
  - [Edição](#edi%C3%A7%C3%A3o)
  - [Publicação](#publica%C3%A7%C3%A3o)
- [Contribuição](#contribui%C3%A7%C3%A3o)
- [Licença](#licen%C3%A7a)
- [Contato](#contato)

<!-- ABOUT THE PROJECT -->

## Sobre o Projeto

Este projeto visa a criação de um template que possa ser utilizado no momento de criação de projetos utilizando React Native com expo, visto que o processo de instalação e configuração das libs no início de um projeto podem gerar certa complexidade e muitas vezes até erros que atrasam o processo, atrapalhando assim o fluxo de desenvolvimento.

### Feito Com

Abaixo segue o que foi utilizado na criação deste template:

- [React Native](http://facebook.github.io/react-native/) - O React Native é um framework que permite o desenvolvimento de aplicações mobile usando JavaScript e React;
- [Expo](https://docs.expo.io/) - O Expo é uma plataforma de código aberto para criar aplicativos nativos universais que são executados no Android, iOS e na web;
- [React Navigation](https://reactnavigation.org/) - O React Navigation surgiu da necessidade da comunidade do React Native de uma navegação de forma fácil de se usar e escrita toda em JavaScript;
- [React Native Gesture Handler](https://kmagiera.github.io/react-native-gesture-handler/) - API declarativa que permite a manipulação de toques e gestos no React Native;
- [Axios](https://github.com/axios/axios) - O Axios é um cliente HTTP baseado em Promises para Browser e NodeJS;
- [Prop Types](https://github.com/facebook/prop-types) - Verificação de tipo em tempo de execução para propriedades (props) React e objetos semelhantes;
<!-- - [Reactotron](https://github.com/infinitered/reactotron) - O Reactotron é um app Desktop para inspecionar projetos em React ou React Native. Está disponível para macOS, Linux e Windows; -->
  <!-- - [reactotron-react-native](https://github.com/infinitered/reactotron/blob/master/docs/quick-start-react-native.md) - Plugin para configurar o Reactotron para se conectar ao projeto React Native; -->
- [Babel](https://babeljs.io/) - O Babel é um compilador JavaScript gratuito e de código aberto e transpiler configurável usado no desenvolvimento de aplicações JavaScript;
  - [babel-eslint](https://github.com/babel/babel-eslint) - Este pacote é um _wrapper_ do parser do Babel para o ESLint;
  - [babel-plugin-root-import](https://github.com/entwicklerstube/babel-plugin-root-import) - Esse plugin do Babel permite que sejam feitos imports e requires em caminhos baseados em uma raiz(root);
  - [babel-plugin-transform-remove-console](https://github.com/babel/minify/tree/master/packages/babel-plugin-transform-remove-console) - Esse plugin do Babel remove todos os console.\* da sua aplicação ([Dica no site oficial do RN](https://facebook.github.io/react-native/docs/performance#using-consolelog-statements));
- [ESLint](https://eslint.org/) - O ESLint é uma ferramenta de lint plugável para JavaScript e JSX;
  - [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) - Este pacote fornece o .eslintrc do Airbnb como uma configuração compartilhada extensível;
  - [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import) - Plugin do ESLint com regras para ajudar na validação de imports;
  - [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y) - Verificador estático AST das regras do a11y em elementos JSX;
  - [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) - Regras de linting do ESLint específicas do React;
  - [eslint-plugin-react-native](https://github.com/Intellicode/eslint-plugin-react-native) - Regras de linting do ESLint específicas do React Native;
  - [eslint-import-resolver-babel-plugin-root-import](https://github.com/olalonde/eslint-import-resolver-babel-root-import) - Um resolver da lib _babel-root-import_ para a lib _eslint-plugin-import_;
- [Prettier](https://prettier.io/) - O Prettier atualiza seu código automaticamente seguindo os padrões que você quiser toda vez salva o arquivo;
  - [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier) - Roda o Prettier como uma regra do ESLint;
  - [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) - Desativa todas as regras que são desnecessárias ou que podem dar conflito com o Prettier;
- [EditorConfig](https://editorconfig.org/) - O EditorConfig é um formatador de arquivos e coleções em forma de Plugin para Editores de código/texto com o objetivo de manter um padrão de código consistente entre diferentes editores, IDE's ou ambientes;

<!-- GETTING STARTED -->

## Começando

Para conseguir utilizar o template, seja através do expo CLI ou com uma cópia local dos arquivos, siga os passos abaixo.

### Pré-requisitos

Antes de seguirmos para as configurações e uso do template, é ideal que você tenha o ambiente configurado para criar e testar aplicativos em React Native com expo, para isso você pode seguir o guia do link abaixo:

[Expo.dev (Installation)](https://docs.expo.dev/get-started/installation/)

### Estrutura de Arquivos

A estrutura de arquivos está da seguinte maneira:

```bash
gersonrsantos-basic
├── src/
│   ├── config/
│   │   └── ReactotronConfig.js
│   ├── assets/
│   │   ├── images/
│   │   └── sounds/
│   ├── screens/
│   │   └── Home/
│   │       ├── index.js
│   │       └── styles.js
│   ├── services/
│   │   └── api.js
│   └── routes/
│       └── index.js
├── .babelrc
├── .editorconfig
├── .eslintrc.js
├── .gitignore
├── .npmignore
├── .prettierrc.js
├── babel.config.js
├── App.js
├── app.jon
├── LICENSE
├── jsconfig.js
├── LICENSE
├── yarn.lock
├── package.json
├── package-lock.json
├── README_CRA.md
└── README.md
```

Serão explicados os arquivos e diretórios na seção de [Edição](#edição).

### Instalação

1. Para instalar e utilizar esse template o processo é bem simples, basta criar um projeto novo utilizando o comando:

```sh
expo init AwesomeExample --template react-native-template-gersonrsantos-basic
```

2. Depois do projeto criado você pode entrar na pasta do seu projeto e executar o comando
```sh
npm start
```

Com isso o projeto será criado com todas as dependências do template devidamente instaladas e linkadas, tal como os arquivos de configuração que são copiados para o projeto.

---

### Edição

Nesta seção haverão instruções caso você queira editar o template, explicando para que os diretórios são utilizados e também os arquivos de configuração.

> Esta sesão ainda esta em construção!

- **src** - Diretório contendo todos os arquivos da aplicação, é criado um diretório `src` para que o código da aplicação possa ser isolado em um diretório e facilmente portado para outros projetos, se necessário;

  - **config** - Diretório para guardar os arquivos de configuração da aplicação, por exemplo, a configuração de uso do Reactotron e configuração de inicialização do Firebase;

    <!-- - **ReactotronConfig.js** - Arquivo contendo a configuração do Reactotron para ser usado na aplicação; -->

  - **assets** - Diretório para armazenar imagens e recursos em geral que possam ser utilizadas na aplicação, esse diretório pode ser renomeado para `images` e dentro de `images` criar um novo diretório para guardar somente as imagens, assim é possível ter um diretório para guardar todo tipo de arquivo, e não apenas imagens;

  - **screens** - Diretório onde ficam as páginas (telas) da aplicação, como forma de padronização e boas práticas toda página fica dentro de um diretório com seu nome;

    - **Home** - Diretório exemplo de uma página cujo nome é **Home**, por padrão foi adotado usar sempre como nome do diretório o nome da página em camelCase, dentro desse diretório é necessária a criação ao menos do arquivo `index.js`;

      - **index.js** - Arquivo com toda a lógica da página, tal como os componentes visuais a serem renderizados;

      - **styles.js** - Arquivo com toda a estilização da página;

  - **services** - Diretório onde serão criados os arquivos relacionados a serviços utilizados na aplicação, por exemplo, requisições HTTP, autenticação com Firebase ou qualquer outro serviço que for utilizado;

    - **api.js** - Arquivo com a configuração da biblioteca Axios para envio de requisições HTTP, o endereço que vem configurado por padrão é para a API do Github;

  - **routes** - Diretório responsável por centralizar o código de navegabilidade da aplicação, nele são chamadas as rotas tal como qualquer outra configuração que precise ser executada na inicialização da aplicação, ele é como um _Entry Point_ das rotas da aplicação;

    - **routes.js** - Arquivo com as configurações de navegação da aplicação, nele são criados os Navigators disponibilizados na biblioteca React Navigation;

- **.editorconfig** - Arquivo destinado à configuração do plugin Editor Config, que padroniza algumas configurações para o editor em diferentes ambientes;

- **.eslintrc.json** - Arquivo de configuração do ESLint, é nele que são inseridas as regras e configurações de Linting do projeto, tal como a configuração do Resolver para o Babel Plugin Root Import e configuração da variável global `__DEV__`;

- **babel.config.js** - Arquivo de configuração do Babel, é nele que é configurado o Babel Plugin Root Import para aceitar imports absolutos na aplicação usando o diretório `src` como raiz;

- **App.js** - Arquivo raiz da aplicação, também chamado de _Entry Point_, é o primeiro arquivo chamado no momento do build e execução da aplicação, nele é chamado o arquivo `src/routes/index.js` que por sua vez chama as rotas da aplicação;

- **jsconfig.json** - Arquivo de configuração do JavaScript no Editor, ele é o responsável por ativar o Auto Complete de códigos JavaScript na aplicação;

- **package.json** - Diferente dos projetos comuns, esse arquivo tem as configurações necessárias para a publicação do Template no NPM, para saber mais sobre isso veja a seção abaixo.

### Publicação

Para publicar um template como esse, o processo é bastante simples e rápido.

1. Crie uma conta no [site do NPM](https://www.npmjs.com/);

2. Com a conta criada execute o comando abaixo e insira suas credenciais;

```sh
npm login
```

3. Basta abrir o arquivo `package.json` e modificar as informações de acordo com o seu template, mas as informações mais importantes são duas, o `name` e o `version`, que são os únicos que tem restrições, seguem abaixo as restrições:

   1. O `name` sempre deve começar com o prefixo `react-native-template-` seguido do nome do seu template;
   2. O template deve ser publicado em uma conta pessoal, pois quando publicado em uma **Organization** é acrescentado o prefixo `@<nome_da_organization>` no nome do pacote;
   3. O `name` deve ser único, não podendo ser igual ao de um template já publicado;
   4. A `version` deve ser atualizada a cada publicação, se o template está na versão **0.0.1** e é preciso publicar uma atualização no mesmo, a `version` deve ser diferente e superior a versão atual, por exemplo, **0.0.2**;

4. Após configurar corretamente o `package.json` basta executar no terminal/prompt o comando `npm publish`;

5. Com a publicação finalizada o template deve ficar disponível através do link `https://www.npmjs.com/package/react-native-template-<nome_do_template>`.

<!-- CONTRIBUTING -->

## Contribuição

Contribuições são o que fazem a comunidade open source um lugar incrível para aprender, inspirar e criar. Qualquer contribuição que você fizer será **muito apreciada**.

1. Faça um Fork do projeto
2. Crie uma Branch para sua Feature (`git checkout -b feature/FeatureIncrivel`)
3. Adicione suas mudanças (`git add .`)
4. Comite suas mudanças (`git commit -m 'Adicionando uma Feature incrível!`)
5. Faça o Push da Branch (`git push origin feature/FeatureIncrivel`)
6. Abra um Pull Request

<!-- LICENSE -->


## 📌 Suporte

Entre em contato comigo em um dos seguintes lugares!

- Linkedin em [Gerson Santos](https://www.linkedin.com/in/gerson-santos-a1442a90/)
- Instagram [gersonrsantos](https://www.instagram.com/gersonrsantos/)

---

## 📝 Licença

<img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361?color=rgb(89,101,224)">

Distribuído sob a licença MIT. Veja [LICENSE](LICENSE) para mais informações.

### 📱 Social

Me acompanhe nas minhas redes sociais.

<p align="center">

 <a href="https://twitter.com/gersonrs3" target="_blank" >
     <img alt="Twitter" src="https://img.shields.io/badge/-Twitter-9cf?logo=Twitter&logoColor=white"></a>

  <a href="https://instagram.com/gersonrsantos" target="_blank" >
    <img alt="Instagram" src="https://img.shields.io/badge/-Instagram-ff2b8e?logo=Instagram&logoColor=white"></a>

  <a href="https://www.linkedin.com/in/gerson-santos-a1442a90/" target="_blank" >
    <img alt="Linkedin" src="https://img.shields.io/badge/-Linkedin-blue?logo=Linkedin&logoColor=white"></a>

  <a href="https://t.me/gersonrsantos" target="_blank" >
    <img alt="Telegram" src="https://img.shields.io/badge/-Telegram-blue?logo=Telegram&logoColor=white"></a>

  <a href="mailto:gersonrodriguessantos8@gmail.com" target="_blank" >
    <img alt="Email" src="https://img.shields.io/badge/-Email-c14438?logo=Gmail&logoColor=white"></a>

</p>

---

Feito com ❤️ by **Gerson**
