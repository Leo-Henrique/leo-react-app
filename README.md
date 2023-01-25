# leo-react-app

<div align="center">
	<img src="https://user-images.githubusercontent.com/72027449/212686494-3c9d878f-c269-4520-aa61-649a2d94f691.gif"
	alt="Screenshot of the Leo React App homepage" />
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

[![en](https://img.shields.io/badge/lang-en-red.svg)](https://github.com/Leo-Henrique/leo-react-app/blob/main/README.md)
[![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg)](https://github.com/Leo-Henrique/leo-react-app/blob/main/README-pt-BR.md)

## 🔎 Introduction

`leo-react-app` it is a template / development environment in React and SASS for the web using Vite.

I like to use the term **boilerplate** to refer to leo-react-app because it is intended to provide a minimal but rarely unnecessary or wasteful folder and command structure in a React-based front-end app with SASS.

## 💻 Resources

* [React](https://pt-br.reactjs.org/) 
* [Vite](https://vitejs.dev/)
	* [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/tree/main/packages/plugin-react) - official Vite plugin for React (includes features like [react-refresh](https://www.npmjs.com/package/react-refresh) and [JSX runtime](https://github.com/alloc/vite-react-jsx#faq), for example)
	* [vite-plugin-svgr](https://github.com/pd4d10/vite-plugin-svgr) - loader to turn SVGs into React components (based on [SVGR](https://react-svgr.com/))
* [SASS](https://www.npmjs.com/package/sass) - JS implementation of the SASS preprocessor
	* [RFS](https://github.com/twbs/rfs#readme) - automatic resizing of font sizes and spacing with SASS
* [normalize.css](https://github.com/necolas/normalize.css) - normalizes default styling on some HTML elements consistently across browsers
* [leo-css-reset](https://github.com/Leo-Henrique/leo-css-reset) - redefines most styles and sets CSS standards (based on [Meyer Web Reset](https://meyerweb.com/eric/tools/css/reset/)).

## 🚀 Getting stated

This repository uses the [npm](https://www.npmjs.com/) to manage third-party packages. [Install NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) after installing [Node.js](https://nodejs.org/pt-br/).

### Cloning the repository

Use [degit](https://github.com/Rich-Harris/degit) to clone `leo-react-app`:

```bash
npx degit leo-henrique/leo-react-app#app your-app
```

### Install the dependencies

```bash
npm install
```

### Start the development server

A new tab [localhost:5173/leo-react-app](http://localhost:5173/leo-react-app) will open in your browser.

```
npm start
```

## ⚙️ Configure the boilerplate for your application

* In `vite.config.js`, change [base](https://vitejs.dev/config/shared-options.html#base) to a URL that will use the public basepath. Exclude if you are not going to deploy the application.
* In `public/assets/`, include your app's favicons. I like to use the [Real Favicon Generator](https://realfavicongenerator.net/) to generate my favicons.
* In `index.html`, change the metadata according to your application. I assume you will also use some minimal metadata from the [Open Graph protocol](https://ogp.me/).
	* Use only `/assets` instead of "*public/assets*" to [reference static files in index.html with Vite](https://vitejs.dev/guide/assets.html#the-public-directory).
* In `src/scss/utilies/_variables.scss`, change the UI of your application.
	* `$rfs-rem-value` is based on the 10px value of the *font size root*, as I use it in [leo-css-reset](https://github.com/Leo-Henrique/leo-css-reset).
	* The names you use in map keys are used in mixins. You can see how maps and mixins are used in the following files inside the folder `scss`:
		* `base/typography` - example of how to use the `$fontSize` map together with the [RFS](https://github.com/twbs/rfs#readme).
		* `layout/grid` - example of how to use the `$grid` map together with breakpoints.
		* `components/button` - example of how to use the `state` mixin.
		* `pages/home` - simple example of how to compose your interface using all SASS features with BEM CSS.

## 👨‍💻 Scripts 

* `npm start` - starts the development server and opens it in your browser.
* `npm run build` - minifies the app for production.
* `npm run preview` - locally view your production in your browser.

## 🔗 Useful resources

Some links that contain my inspirations when creating the architecture and all other resources in SASS.

* [Bootstrap max-width media queries](https://getbootstrap.com/docs/5.3/layout/breakpoints/#max-width)
* [Bootstrap Responsive Containers](https://getbootstrap.com/docs/5.3/layout/containers/#responsive-containers)
* [Structuring SASS projects](https://itnext.io/structuring-your-sass-projects-c8d41fa55ed4)
* [SASS architecture](https://gist.github.com/AdamMarsden/7b85e8d5bdb5bef969a0)