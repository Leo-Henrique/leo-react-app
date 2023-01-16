# leo-react-app

<div align="center"
style="margin-bottom: 15px">
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
</div>

[![en](https://img.shields.io/badge/idioma-en-red.svg)](https://github.com/Leo-Henrique/leo-react-app/blob/main/README.md)
[![pt-br](https://img.shields.io/badge/idioma-pt--br-green.svg)](https://github.com/Leo-Henrique/leo-react-app/blob/main/README-pt-BR.md)

## Introdução

`leo-react-app` se trata de um template / ambiente de desenvolvimento em React e SASS para web utilizando Vite.

Gosto de utilizar o termo **boilerplate** para se referir a leo-react-app pelo mesmo possuir o objetivo de fornecer uma estrutura de pastas e comandos mínima, mas raramente desnecessária ou desproveitosa em um aplicativo front-end baseado em React com SASS.

## Recursos

* [React](https://pt-br.reactjs.org/) com [Vite](https://vitejs.dev/)
	* [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/tree/main/packages/plugin-react) - plugin oficial do Vite para o React (inclui recursos como [react-refresh](https://www.npmjs.com/package/react-refresh) e [JSX runtime](https://github.com/alloc/vite-react-jsx#faq), por exemplo)
	* [vite-plugin-svgr](https://github.com/pd4d10/vite-plugin-svgr) - loader para transformar SVGs em componentes React (baseado em [SVGR](https://react-svgr.com/))
* [SASS](https://www.npmjs.com/package/sass) - implementação JS do pré-processador SASS
	* [RFS](https://github.com/twbs/rfs#readme) - redimensionamento automático de tamanhos de fonte e espaçamentos com SASS
* [normalize.css](https://github.com/necolas/normalize.css) - normaliza estilizações padrões em alguns elementos HTML de forma consistente entre os navegadores
* [leo-css-reset](https://github.com/Leo-Henrique/leo-css-reset) - redefine a maioria das estilizações e define padrões CSS (baseado no [Meyer Web Reset](https://meyerweb.com/eric/tools/css/reset/)).

## Iniciando

Este repositório utiliza o [npm](https://www.npmjs.com/) para gerenciar os pacotes de terceiros. Efetue a [instalação do NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) após a instalação do [Node.js](https://nodejs.org/pt-br/).

### Clonando o repositório

Você pode [criar um novo repositório a partir deste](https://github.com/Leo-Henrique/leo-react-app/generate) ou utilizar o [degit](https://github.com/Rich-Harris/degit) para clonar `leo-react-app`:

```bash
npx degit leo-henrique/leo-react-app#app seu-aplicativo
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

## Configure o boilerplate para sua aplicação

* Em `vite.config.js`, altere [base](https://vitejs.dev/config/shared-options.html#base) para uma URL que utilizará o caminho base público. Exclua caso não for fazer o deploy da aplicação.
* Em `public/assets/`, inclua os favicons da sua aplicação. Eu gosto de utilizar o [Real Favicon Generator](https://realfavicongenerator.net/) para gerar meus favicons.
* Em `index.html`, altere os metadados conforme sua aplicação. Eu pressuponho que você também utilizará alguns metadados mínimos do [protocolo Open Graph](https://ogp.me/).
	* Utilize apenas `/assets` em vez de "*public/assets*" para [referenciar arquivos estáticos no index.html com Vite](https://vitejs.dev/guide/assets.html#the-public-directory).
* Em `src/scss/utilies/_variables.scss`, altere a UI da sua aplicação.
	* `$rfs-rem-value` se baseia no valor de 10px do *font size root*, conforme utilizo em [leo-css-reset](https://github.com/Leo-Henrique/leo-css-reset).
	* Os nomes que você utiliza nas chaves dos mapas são utilizados nos mixins. Você pode conferir como os mapas e os mixins são usados nos arquivos a seguir, dentro da pasta `scss`:
		* `base/typography` - exemplo de como utilizar o mapa `$fontSize` junto com o [RFS](https://github.com/twbs/rfs#readme).
		* `layout/grid` - exemplo de como utilizar o mapa `$grid` junto com os pontos de interrupção.
		* `components/button` - exemplo de como utilizar o mixin `state`.
		* `pages/home` - exemplo simples de como compor sua interface utilizando todos os recursos SASS com CSS BEM.

## Scripts 

* `npm start` - inicia o servidor de desenvolvimento e abre em seu navegador.
* `npm run build` - minifica o aplicativo para produção.
* `npm run preview` - visualize localmente sua produção em seu navegador.

## Recursos úteis

Alguns links que contém minhas inspirações ao criar a arquitetura e todos os outros recursos em SASS.

* [Media queries max-width do Bootstrap](https://getbootstrap.com/docs/5.3/layout/breakpoints/#max-width)
* [Containers responsivos do Bootstrap](https://getbootstrap.com/docs/5.3/layout/containers/#responsive-containers)
* [Estruturando projetos SASS](https://itnext.io/structuring-your-sass-projects-c8d41fa55ed4)
* [Arquitetura SASS](https://gist.github.com/AdamMarsden/7b85e8d5bdb5bef969a0)