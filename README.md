# departures-board

This project uses Vue3 and Typescript. I have used Tailwind for quick prototyping.

I've used fetch() to get the API data and ordered the list by `scheduledDepartureDateTime`. The spec and designs werent overly specific so I have used some design freedom to build something that matches the spec and works well. As no endpoint to update the departures was given this only works on the client. It would've been interesting to create some WebHooks to get the list to update. I thought about doing something like adding a setInterval to check for updates but decided against it. I originally used GSAP to create animations of the flight cards but I encoutered an issue with the cards when running the tests so I have removed it for now.

It was avery enjoyable task!

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
