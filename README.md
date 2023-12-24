
<div align="center">
  <img src="https://github.com/Matheuslm10/wongames-client/assets/17602947/527b7cfd-9d2f-41ee-8d4b-771da98369ac" height="80">
  <h1 align="center">
    Won Games
  </h1>
</div>

<h4 align="center">
  All your favorite games in one place!
</h4>

<div align="center">
  <img alt="CI status" src="https://github.com/Matheuslm10/wongames-client/workflows/ci/badge.svg">
</div>

<br />

<div align="center">
  <img width="820" alt="Desktop print" src="https://github.com/Matheuslm10/wongames-client/assets/17602947/51b95704-c33f-4ca0-8484-77908cceaf8e">
</div>

<!-- Verificar se vou colocar várias prints da versão mobile. Um do lado do outro, meio que na frente. -->

## Table of Contents

- [:dart: The Project](#dart-the-project)
- [:bulb: Features](#bulb-features)
- [:arrows\_counterclockwise: Continuous Integration](#arrows_counterclockwise-continuous-integration)
- [:test\_tube: UI Components Playground](#test_tube-ui-components-playground)
- [:hammer\_and\_wrench: Technologies](#hammer_and_wrench-technologies)
- [🏗️ The Development Process](#️-the-development-process)
- [:computer: How to run](#computer-how-to-run)
- [:star2: Credits](#star2-credits)


## :dart: The Project

Won Games is a PC games e-commerce platform built with the goal of applying advanced front-end development concepts, unit testing (with and without TDD), end-to-end testing, continuous integration, and delivery in a production environment.

The e-commerce platform consists of two applications:

- **wongames-client** (code available in this repository): the user interface for customers, built with Next.js.
- **wongames-api** (available in this other [repository](https://github.com/Matheuslm10/wongames-api)): the service responsible for providing data. It was built with Strapi, a headless CMS, which in addition to acting as the back-end of the client application, also offers a user interface for the e-commerce administrator.


## :bulb: Features

#### :mag: Explore Games
- The store features a page that was developed to allow users to explore games conveniently, using filters for price, genre, and platform.
  <details>

  <summary>Click here to see the demo video</summary>

  https://github.com/Matheuslm10/wongames-client/assets/17602947/94a02db4-cc08-4203-a197-529483906a59

  </details>

#### :space_invader: Game Details
- Each game has a unique page featuring detailed descriptions, screenshots, and technical information.
  <details>

  <summary>Click here to see the demo video</summary>

  https://github.com/Matheuslm10/wongames-client/assets/17602947/44be4396-55cc-4959-a2ce-7c5b2eeb164f

  </details>

#### :shopping_cart: Shopping Cart
- Customers can add multiple games to the cart and review them before completing the purchase.
  <details>

  <summary>Click here to see the demo video</summary>

  https://github.com/Matheuslm10/wongames-client/assets/17602947/6b9ff76d-f630-45b2-a349-fca227256353

  </details>

#### :credit_card: Payment Options
- Payment can be made with credit or debit cards. (Via integration with [Stripe](https://stripe.com/))
  <details>

  <summary>Click here to see the demo video</summary>

  https://github.com/Matheuslm10/wongames-client/assets/17602947/38c8edeb-a923-4786-b840-c6fcb5384917

  </details>

#### :key: Authentication
- Upon sign-up, users gain access to a personalized experience by logging in with their credentials.
  <details>

  <summary>Click here to see the demo video</summary>

  https://github.com/Matheuslm10/wongames-client/assets/17602947/38fa6bf4-505f-4395-b52d-e3249d7ff29f

  </details>

#### :bust_in_silhouette: Account Management
- There is a personalized area where users can manage their personal information, view past orders, and reset passwords.
  <details>

  <summary>Click here to see the demo video</summary>

  https://github.com/Matheuslm10/wongames-client/assets/17602947/08de2572-718e-485d-ba15-a0bc58b9b121

  </details>

#### :hearts: Wishlist
- This feature allows users to save desired games for later purchase, making it easier to keep track of upcoming releases.
  <details>

  <summary>Click here to see the demo video</summary>

  https://github.com/Matheuslm10/wongames-client/assets/17602947/f08b94f1-aba2-4b33-b0ce-1ad09c5f4a01

  </details>

## :arrows_counterclockwise: Continuous Integration

To automatically identify code problems on a regular basis - with each new set of changes incorporated - a continuous integration solution has been implemented to ensure higher software quality for the project. GitHub Actions has been employed for this purpose, actively detecting new modifications and triggering end-to-end tests automatically.

When a new change request is created in the wongames-client repository, a Github action is initiated, building an end-to-end testing environment from Docker images. These images are automatically generated for each commit to the [wongames-api](https://github.com/Matheuslm10/wongames-api) and [wongames-database](https://github.com/Matheuslm10/wongames-database) repositories.

The [wongames-database](https://github.com/Matheuslm10/wongames-database) repository is used to generate a Docker image containing a PostgreSQL database that is already populated with specific data that will be used in the end-to-end tests.

Example of a Pull Request with end-to-end verification: [PR](https://github.com/Matheuslm10/wongames-client/pull/78)

<br />

<div align="center">
  <img width="780" alt="Storybook Desktop print" src="https://github.com/Matheuslm10/wongames-client/assets/17602947/b35a573d-71c0-4e26-9143-10be0b246c58">
</div>

## :test_tube: UI Components Playground

In addition to the application, a UI component playground (which also serves as documentation), was built with Storybook. This tool can be really handy for front-end development teams, and it can even help non-technical individuals to envision new features. It helps provide a user-friendly interface to interact with components, ensuring a more intuitive understanding of their functionalities and variations. The advantages of using Storybook include consistency and maintainability throughout the development lifecycle.

<div align="center">
  <img width="820" alt="Storybook Desktop print" src="https://github.com/Matheuslm10/wongames-client/assets/17602947/9f52395f-1aea-4a4c-9764-83280ab585ed">
</div>

## :hammer_and_wrench: Technologies

<!-- Transformar em badges -->

- [Apollo](https://www.apollographql.com/)
- [Cypress](https://www.cypress.io/)
- [Docker](https://www.docker.com/)
- [Eslint](https://eslint.org/)
- [Husky](https://github.com/typicode/husky)
- [Jest](https://jestjs.io/)
- [NextJS](https://nextjs.org/)
- [Prettier](https://prettier.io/)
- [React JS](https://reactjs.org/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- [Storybook](https://storybook.js.org/)
- [Styled Components](https://www.styled-components.com/)
- [Typescript](https://www.typescriptlang.org/)

## 🏗️ The Development Process

The construction of this project was part of a very well-structured [course](https://www.udemy.com/course/react-avancado) that provided a solid foundation for application development. However, the course was released in 2020, and its support was discontinued before I had the availability to resume it. This required me to put in additional effort to investigate and resolve technical challenges that were not covered in the lessons, such as managing dependency versions, TypeScript errors, Docker image generation, and setting up the local development environment.

To overcome these technical challenges, I adopted an investigative problem-solving approach, delving deep into the technologies used, reviewing official documentation, and exploring online communities. I feel that this not only strengthened my problem-solving skills but also contributed to a deeper understanding of the tools and technologies involved in the project.

Overall, the development of this project was a rewarding experience. I learned a lot about front-end development, testing, and continuous integration. I also had the opportunity to make use of and enhance my skills and experience as a software engineer, which I have been building over the years.

### :jigsaw: Practiced Concepts

- Best practices with ReactJS;
- Best practices with Styled Components (CSS-in-JS);
- Best practices with Testing;
- Server Side Rendering (SSR);
- Static Site Generation (SSG);
- Next.js simple and dynamic routes;
- GraphQL operation principles;
- GraphQL queries and mutations;
- Filters and pagination;
- Using Storybook;
- Creating components from scratch;
- Utilizing third-party components;
- Rapid API development;
- Automated e-mail sending;
- User authentication;
- Payment flow;
- Creating CI pipelines.
<!-- - Automated deployment. -->

<!-- Incluir sub-tópico sobre próximos passos. -->

## :computer: How to run

<!-- Falar sobre NVM -->

Clone the repository:
```
git clone https://github.com/Matheuslm10/wongames-client.git
```

Enter the directory:
```
cd wongames-client
```

Install the dependencies:
```
yarn install
```

Run the application:
```
yarn start
```

Now you can access `http://localhost:3000` in your browser.

### Linting
```
yarn lint
```

### Testing
```
yarn test
```

### Storybook

1. Realize o build:
```
yarn run build-storybook
```

2. Execute:
```
yarn storybook
```


## :star2: Credits

Big thanks to the [course](https://www.udemy.com/course/react-avancado) creators: William Justen and Guilherme Louro. Appreciate you guys!

<br />

:smile: You can find me here:

[![Linkedin Badge](https://img.shields.io/badge/-Matheus_Machado-blue?style=flat-square&logo=Linkedin&logoColor=white)](https://www.linkedin.com/in/matheusmachado-dev/)

<br />

[:arrow_up: Back to Top](#----won-games--)
