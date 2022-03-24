<p>
  <a href="https://sprucecss.com/#gh-light-mode-only">
    <br/>
    <img src="./.github/spruce-logo-dark.svg" alt="Spruce CSS" width="160">
    <br/>
  </a>
  <a href="https://sprucecss.com/#gh-dark-mode-only">
    <br/>
    <img src="./.github/spruce-logo-light.svg" alt="Spruce CSS" width="160">
    <br/>
  </a>
</p>

**The “Spruce CSS Starter Kit” repository contains a simple foundation for starting your next project with ease using Spruce CSS.**

It is a mix of essential tools that we like to use and necessary for working in the browser fast. This project aims to quickly design and then get the source files to integrate into other platforms like WordPress, Laravel, or Gatsby, but you can also use it as your primary tool, depending on your needs.

It contains everything that is needed to design in the browser. If you want to know why it is a good idea to develop in the browser, you can read about [my thoughts on Pine](https://pineco.de/designing-in-the-browser/).

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Get Up and Running](#get-up-and-running)
- [Pug](#pug)
- [SCSS](#scss)
- [Browsersync](#browsersync)
- [More Scripts](#more-scripts)
- [License](#license)

## Get Up and Running

The Starter Kit using [Pug](#pug), [Sass](#sass), [Browsersync](#browsersync).

1. **Clone the repository.**

2. **Install the dependencies.**

    In the `package.json` file, you will find all of the dependencies to install them using the following command:

    ```shell
    npm install
    ```

3. **Run the development mode**

    To run the development mode, use the `dev` script, which does everything (start the webserver, compile Pug and Sass). See more about the scripts in the `package.json` file.

    ```shell
    npm run dev
    ```

    This script will also watch for changes in the `pug` and `assets/scss` folders.

4. **Run the production mode**

    Running the `prod` script, you can create compressed CSS files without .map. Also, it will compile the `pug` files and run the beautifying too.

    ```shell
    npm run prod
    ```

## Pug

Pug (formerly Jade) is a JavaScript template engine primarily for Node. It compiles to HTML, has a simplified syntax. Easy to use, handles include (separate files like a header or footer component), can work with JSON data.

You can find the templates in the `pug/templates` folder in the root, and it will compile into the `html` folder.

Under the `pug/assets` folder, you find the `data.json` and the `mixin.pug` files. The first can contain any JSON formatted data for later use, and the second is a simple mixin for the icons. You can find an example for both in the `pug/templates/components/docs.pug` file.

## SCSS

The project compiles the SCSS files from the `assets/scss` folder into the `assets/css` folder. The project includes Spruce CSS, which gives most of the styles, but we have some pre-styled, minimal components too.

## Browsersync

Running the `npm run dev` will also start up a Browsersync server which you can share across your local network. It will automatically open the URL in your default browser with the `html/page/index.html` file.

## More Scripts

**HTML Beautify:** You can run your generated HTML files through a [beautifier](https://www.npmjs.com/package/js-beautify) with the `npm run beautify` command; this is needed because sometimes the Pug pretty formatting makes a mistake (or you need another indenting). This will also run with the `prod` script automatically.

**Sass Lint:** You can lint your SCSS files with [Stylelint](https://stylelint.io/) and [stylelint-config-sass-guidelines](https://github.com/bjankord/stylelint-config-sass-guidelines) preset with the `npm run sass-lint` command. Use the `npm run sass-lint-with-fix` command if you want automatic fixes.

**Icons:** A starter kit uses a simple SVG-based icon solution. You can extend it through `assets/icon/icons.svg` file. You have to include them in any Pug template (like you see it in the `docs.pug`) to use.

## License

The code is licensed under the [MIT](LICENSE).

<p>
  <a href="https://conedevelopment.com/#gh-light-mode-only">
    <br/>
    <img src="./.github/cone-logo-dark.svg" alt="Cone Development" width="70">
    <br/>
  </a>
  <a href="https://conedevelopment.com/#gh-dark-mode-only">
    <br/>
    <img src="./.github/cone-logo-light.svg" alt="Cone Development" width="70">
    <br/>
  </a>
</p>
