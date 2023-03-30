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
    <a href="https://styled-components.com/"
	target="_blank"
	rel="external referrer noopener"
	style="display: inline-block; padding: 8px">
        <img src="https://avatars.githubusercontent.com/u/20658825?v=4"
		alt="styled-components logo"
		width="65" />
	</a>
</div>

[![en](https://img.shields.io/badge/lang-en-red.svg)](https://github.com/Leo-Henrique/leo-react-app/blob/main/README.md)
[![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg)](https://github.com/Leo-Henrique/leo-react-app/blob/main/README-pt-BR.md)

**⚠️ Warning**

This readme was written primarily with Google Translate. I'll be happy if you make an exception for any grammatical errors!

## 🔎 Introduction

`leo-react-app` it is a template / development environment in React for the web using Vite.

I like to use the term **boilerplate** to refer to leo-react-app because it is intended to provide a minimal but rarely unnecessary or wasteful folder and command structure in a React-based front-end app.

## 💻 Resources

You can use two `leo-react-app` options. One is with `SASS` and the other with `styled-components`. Both have the following features:

* [React](https://pt-br.reactjs.org/)
* [Vite](https://vitejs.dev/) - frontend development environment
	* [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/tree/main/packages/plugin-react) - official Vite plugin for React (includes features like [react-refresh](https://www.npmjs.com/package/react-refresh) and [JSX runtime](https://github.com/alloc/vite-react-jsx#faq), for example)
	* [vite-plugin-svgr](https://github.com/pd4d10/vite-plugin-svgr) - loader to turn SVGs into React components (based on [SVGR](https://react-svgr.com/))
* [leo-reset.css](https://github.com/Leo-Henrique/leo-reset.css) - redefines most styles and sets CSS standards

### With SASS:

* [SASS](https://www.npmjs.com/package/sass) - JS implementation of the SASS preprocessor
* [RFS](https://github.com/twbs/rfs#readme) - automatic resizing of font sizes and spacing with SASS

### With styled-components:

* [styled-components](https://styled-components.com/) - just the library itself

## 🚀 Get Started

This repository uses the [npm](https://www.npmjs.com/) to manage third-party packages. Perform the [Installation of Node.js](https://nodejs.org/pt-br/) which already has npm as default package manager.

### Cloning the repository

Use [degit](https://github.com/Rich-Harris/degit) to clone leo-react-app. You can mention the name you want for your project's root folder by specifying just a space after the command or use the command already inside your root folder.

If you opted for **SASS**:
```bash
npx degit leo-henrique/leo-react-app#sass
```

If you opted for **styled-components**:
```bash
npx degit leo-henrique/leo-react-app#styled-components
```

### Install the dependencies

```bash
npm install
```

### Start the development server

A new tab [localhost:5173](http://localhost:5173) will open in your browser.

```
npm start
```

## ⚙️ Configure the boilerplate for your application

* In `public`, include your application's favicons. I like to use [Real Favicon Generator](https://realfavicongenerator.net/) to generate my favicons.
* In `index.html`, change the metadata according to your application. I assume you will also use some minimal metadata from the [Open Graph protocol](https://ogp.me/).
    * Only  use `/` instead of `public/` to [reference static files in index.html with Vite](https://vitejs.dev/guide/assets.html#the-public-directory).

### With SASS:

* In `src/scss/utilities/_variables.scss`, change the UI of your application.
    * `$rfs-rem-value` is based on the 10px value of *font size root*, as used in [leo-css-reset](https://github.com/Leo-Henrique/leo-css-reset ).

### With styled-components:

* In `src/styles/theme.js`, change your application's UI.
* In `src/styles/mediaQueries.js`, change the breakpoints if you want.

## 👨‍💻 Scripts 

* `npm start` - starts the development server and opens it in your browser.
* `npm run build` - minifies the app for production.
* `npm run preview` - locally view your production in your browser.
* `npm run deploy` - deploy your application on GitHub according to the "dist" folder