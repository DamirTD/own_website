React + TypeScript + Vite + ChakraUI + Motion + styled-components + SelfCreatedHooks
Damir Toriya 2023

You can see the website template on /website-look/{screenshot}

dependencies: 
@chakra-ui/icons": "^2.1.1",
@chakra-ui/react": "^2.8.1",
@emotion/react": "^11.11.1",
@emotion/styled": "^11.11.0",
framer-motion": "^10.16.4",
react": "^18.2.0",
react-dom": "^18.2.0",
react-icons": "^4.11.0",
react-intersection-observer": "^9.5.2",
react-responsive-carousel": "^3.2.23",
react-router-dom": "^6.17.0",
react-scroll": "^1.9.0",
styled-components": "^6.1.0"



This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
