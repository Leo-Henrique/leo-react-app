# My frontend boilerplate using React, JavaScript, SASS and Vite.js

## Install

### Create standard Vite development environment

Select React framework and JavaScript variant.

```bash
npm create vite@latest
```

### Install Vite dependencies

```bash
npm install
```

### Install dependencies I use in this boilerplate

```bash
npm install normalize.css leo-css-reset rfs sass vite-plugin-svgr
```

### Remove default Vite files and created public folder

Replace all files Vite generated.

```bash
rm index.html .gitignore vite.config.js -f
rm -r public src
mkdir public
mkdir public/assets
```

### Clone my folders structure (boilerplate)

Afterwards, move all files and folders into your project.

```bash
git clone https://github.com/Leo-Henrique/frontend-boilerplate.git
```

## Use 

Change all variables according to your project by searching for "$$" in your ide.

### vite.config.js

Use vite-plugin-svgr and change base URL.

```js
import viteSvgr from "vite-plugin-svgr";

export default defineConfig({
    plugins: [react(), viteSvgr()],
    // base: "/$$your-project-url"
});
```

### .gitignore

Remove **dist** folder for deploy project and add the **package-lock.json** archive for ignore.

### index.html

Added main metadata and changed .jsx file path.

### public folder

* remove vite.svg
* added assets folder (for your favicons)

### src boilerplate

```
src/
|
|– assets/
|   |– (your images, icons ...)
|
|– components/
|   |– (your react components)
|
|– scss/ 
|   |– (your sass files: shown below)
|
`– App.jsx (your App component)
`– index.jsx (Creating the root HTML element and rendering the App)
```

### sass boilerplate (import in order)

```
scss/
|
|– utilities/
|   |– _variables.scss
|   |– _rfs.scss (npm)
|   |– _mixins.scss
|
|– base/
|   |– _normalize.css (npm)
|   |– _leo-css-reset (npm)
|   |– _typography.scss
|
|– layout/ 
|   |– _grid.scss (grid system)
|   |– (all layout styles: header, footer ...)
|
|– components/ 
|   |– (your widgets: dropdown, carousel ...)
|
|– pages/
|   |– (pages specific styles: home, contact ...)
|
`– style.scss (import all files)
```

## Useful resources

* [Sass Architecture Structure](https://gist.github.com/AdamMarsden/7b85e8d5bdb5bef969a0)
* [Structuring your Sass Projects](https://itnext.io/structuring-your-sass-projects-c8d41fa55ed4)