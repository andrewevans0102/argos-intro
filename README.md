# Argos Intro

This is a companion project to my upcoming post on LogRocket about the [Argos CI](https://argos-ci.com/).

The project is a [modified version of Remix's Starter Tutorial](https://remix.run/docs/en/main/start/tutorial).

If you'd like to learn more about Argos CI please [check out their webpage](https://argos-ci.com/docs/introduction).

The project uses [Playwright](https://playwright.dev/) for End-to-End (E2E) tests, and a GitHub action to actually run the tests and connect to the Argos CI.

To run the project locally run `npm run dev`.

To run playwright tests with the project running locally run `npm run run-tests`.

Screenshots are saved in the `screenshots` folder.

The application itself is just a simple contacts app that has my 2 cats and dog as the contacts that you can see in the app. It uses a local array for saving and deleting contacts, and doesn't connect to a real database or persistent storage when saving etc.
