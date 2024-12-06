# departures-board

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

# README

### Overview

Your task is to build a flight Departures board as per [this design](https://www.figma.com/file/Kr6pYxQbIdbfD5wG3Mo6QP/Tech-Test-FID?node-id=2%3A2), and populate it with data consumed from the [flights data API](https://6315ae3e5b85ba9b11e4cb85.mockapi.io/departures/Flightdata).

We would expect this task to take a few hours, however there is no strict time limit and you won't be judged on how long it takes you to complete.

### Details

**Your solution MUST:**

- Function as a single page app.
- Use HTML and CSS (using pre-compilers such as LESS and Sass or CSS-in-JS is fine).
- Use **VueJS v2** and vanilla JavaScript. You _may_ use Nuxt - we'll leave this up to you.
- Support the major browsers (Chrome, Firefox, Safari, Edge).
- Be responsive.
- Have (partial or full) test coverage **(Mid, Senior)**.
- Include a README.md with details of how to run your solution, and any other information you think we might want.

**Your solution MUST include the following features:**

- Include a form below the Departures board to allow the user to select each flight,
  and update the status. Status options should include:

  - Free text
  - Departed
  - Diverted
  - Delayed
  - Cancelled

- Error handling - if the API call fails, an error message should be displayed to the user **(Mid, Senior)**.

**Optional Enhancements:**

If you'd like to go above and beyond the minimum requirements, we'd love you to show us what you're capable of!

Here are some pointers you might like to consider:

- How you might use arrivalAirport.countryName to improve the Departures board UI?
- How will the board look before it receives data?
- How will the board update once it receives data **(Mid, Senior)**?
- How should the flights be ordered on the board **(Mid, Senior)**?
- How will the board update when a flight's status is updated **(Senior)**?
- If a flight is diverted, what happens to the destination on the board **(Senior)**?
- What next steps might you take? You can include these in your README.md.

### External Packages

You are free to use external packages in your solution. Links to any external packages should be included in your README.md, along with
your reasoning for using each package.
