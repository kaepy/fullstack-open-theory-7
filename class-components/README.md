# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## npm-check-updates

1. `npm-check-updates` check outdated dependencies
2. `ncu -u` update dependenvies
3. `npm install` install updated dependencies

## npm audit

Riippuvuuksien turvallisuus voidaan tarkistaa npm:n audit-komennolla, joka vertaa käytettyjen riippuvuuksien versioita keskitetyssä virhetietokannassa listattuihin tietoturvauhan sisältäviin riippuvuuksien versioihin.

`npm audit` näyttää korjausehdotukset

`npm audit fix` ei tee oletusarvoisesti versiopäivitystä kirjastolle, jonka major-versionumero on kasvanut

`npm audit fix --force` tekisi myös major päivityksen, mutta saattaa rikkoa kehitysympäristön samalla
