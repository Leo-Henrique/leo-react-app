# leo-react-app

<div align="center">
	<img src="https://user-images.githubusercontent.com/72027449/212686494-3c9d878f-c269-4520-aa61-649a2d94f691.gif"
	alt="Captura de tela da página inicial do Léo React App" />
</div>

<div align="center">
	<a href="https://pt-br.reactjs.org/"
	target="_blank"
	rel="external referrer noopener"
	style="display: inline-block; padding: 8px">
		<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
		alt="React logo"
		width="65" />
	</a>
	<a href="https://vitejs.dev"
	target="_blank"
	rel="external referrer noopener"
	style="display: inline-block; padding: 8px">
		<img src="https://vitejs.dev/logo.svg"
		alt="SASS logo"
		width="65" />         
	</a>
	<a href="https://sass-lang.com/"
	target="_blank"
	rel="external referrer noopener"
	style="display: inline-block; padding: 8px">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
		alt="SASS logo"
		width="65" />
	</a>
    <a href="https://styled-components.com/"
	target="_blank"
	rel="external referrer noopener"
	style="display: inline-block; padding: 8px">
        <img src="https://avatars.githubusercontent.com/u/20658825?v=4"
		alt="styled-components logo"
		width="65" />
	</a>
</div>

[![en](https://img.shields.io/badge/idioma-en-red.svg)](https://github.com/Leo-Henrique/leo-react-app/blob/main/README.md)
[![pt-br](https://img.shields.io/badge/idioma-pt--br-green.svg)](https://github.com/Leo-Henrique/leo-react-app/blob/main/README-pt-BR.md)

## 🔎 Introdução

`leo-react-app` se trata de um template / ambiente de desenvolvimento em React para web utilizando Vite.

Gosto de utilizar o termo **boilerplate** para se referir a leo-react-app pelo mesmo possuir o objetivo de fornecer uma estrutura de pastas e comandos mínima, mas raramente desnecessária ou desproveitosa em um aplicativo front-end baseado em React.

## 💻 Recursos

Você pode utilizar duas opções do `leo-react-app`. Uma é com `SASS` e a outra com `styled-components`. Em ambas, há os seguintes recursos:

* [React](https://pt-br.reactjs.org/)
* [Vite](https://vitejs.dev/) - ambiente de desenvolvimento para front-end
	* [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/tree/main/packages/plugin-react) - plugin oficial do Vite para o React (inclui recursos como [react-refresh](https://www.npmjs.com/package/react-refresh) e [JSX runtime](https://github.com/alloc/vite-react-jsx#faq), por exemplo)
	* [vite-plugin-svgr](https://github.com/pd4d10/vite-plugin-svgr) - loader para transformar SVGs em componentes React (baseado em [SVGR](https://react-svgr.com/))
* [leo-css-reset](https://github.com/Leo-Henrique/leo-css-reset) - redefine a maioria das estilizações e define padrões CSS

### Com SASS:

* [SASS](https://www.npmjs.com/package/sass) - implementação JS do pré-processador SASS
* [RFS](https://github.com/twbs/rfs#readme) - redimensionamento automático de tamanhos de fonte e espaçamentos com SASS

### Com styled-components:

* [styled-components](https://styled-components.com/) - apenas a própria biblioteca

## 🚀 Iniciando

Este repositório utiliza o [npm](https://www.npmjs.com/) para gerenciar os pacotes de terceiros. Efetue a [instalação do Node.js](https://nodejs.org/pt-br/) que já possui o npm como gerenciador de pacotes padrão.

### Clonando o repositório

Utilize o [degit](https://github.com/Rich-Harris/degit) para clonar o `leo-react-app`. Você pode mencionar o nome que deseja para a pasta raiz do seu projeto especificando apenas um espaço após o comando ou utilizar o comando dentro da sua pasta raiz.

Se você optou por **SASS**:
```bash
npx degit leo-henrique/leo-react-app#sass
```

Se você optou por **styled-components**:
```bash
npx degit leo-henrique/leo-react-app#styled-components
```

### Instale as dependências

```bash
npm install
```

### Inicie o servidor de desenvolvimento

Uma nova guia [localhost:5173/leo-react-app](http://localhost:5173/leo-react-app) será aberta no seu navegador.

```
npm start
```

## ⚙️ Configure o boilerplate para sua aplicação

* Em `public`, inclua os favicons da sua aplicação. Eu gosto de utilizar o [Real Favicon Generator](https://realfavicongenerator.net/) para gerar meus favicons.
* Em `index.html`, altere os metadados conforme sua aplicação. Eu pressuponho que você também utilizará alguns metadados mínimos do [protocolo Open Graph](https://ogp.me/).
	* Utilize apenas `/` em vez de `public/` para [referenciar arquivos estáticos no index.html com Vite](https://vitejs.dev/guide/assets.html#the-public-directory).

### Com SASS:

* Em `src/scss/utilities/_variables.scss`, altere a UI da sua aplicação.
	* `$rfs-rem-value` se baseia no valor de 10px do *font size root*, conforme utilizo em [leo-css-reset](https://github.com/Leo-Henrique/leo-css-reset).

### Com styled-components:

* Em `src/styles/theme.js`, altere a UI da sua aplicação.
* Em `src/styles/mediaQueries.js`, altere os breakpoints caso desejar.

## 👨‍💻 Scripts 

* `npm start` - inicia o servidor de desenvolvimento e abre em seu navegador.
* `npm run build` - minifica o aplicativo para produção.
* `npm run preview` - visualize localmente sua produção em seu navegador.
* `npm run deploy` - faz o deploy da sua aplicação no GitHub segundo a pasta "dist"