# UOIT Experts

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.2.

## Development server

For a dev server, run one of the following:

- `yarn start`
- `ng serve`
- `npm run start`

Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

To [generate a new component](https://github.com/angular/angular-cli/wiki/generate-component), run one of the following: 

- `yarn component -- component-name`
- `ng generate component component-name`
- `npm run component -- component-name`

You can also use `ng generate directive|pipe|service|class|module` for other component types.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build, or alternatively, use the `yarn build`/`npm run build` script (which includes it by default).

### IMPORTANT: production

Building the project executes a `prebuild` script located in the `scripts/` directory. The script is responsible for loading sensitive information from a `.env` file and injecting it into the app's `environment` variables, most notably the *ExpertFile* API credentials to be used with the built project. Until the `environment` is built, there will only be EJS templates in its place and the app **will not function correctly**.

To use this project, you will need, from *Expertfile*:

- an **organization ID**
- a valid **API key**
- the key's **API secret**

...and the information will need to be loaded into a `.env` file on the project root in the format of:

```
API_ID=
API_KEY=
API_SECRET=
```

## Running unit tests

Run one of:

- `yarn test`
- `ng test`
- `npm run test`

&hellip;to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run one of:
- `yarn e2e`
- `ng e2e`
- `npm run e2e`

&hellip;to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
