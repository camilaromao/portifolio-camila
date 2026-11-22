# React + Vite

Este modelo oferece uma configuração mínima para utilizar o React no Vite, incluindo HMR (Hot Module Replacement) e algumas regras do ESLint.

Atualmente, dois plugins oficiais estão disponíveis:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) utiliza o [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) utiliza o [SWC](https://swc.rs/)

## React Compiler

O React Compiler não está habilitado neste modelo devido ao seu impacto no desempenho durante o desenvolvimento e a construção (build) da aplicação. Para adicioná-lo, consulte [esta documentação](https://react.dev/learn/react-compiler/installation).

## Expandindo a configuração do ESLint

Se você estiver desenvolvendo uma aplicação para produção, recomendamos o uso de TypeScript com regras de lint que levam em conta os tipos (type-aware lint rules). Confira o [modelo para TypeScript](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) para obter informações sobre como integrar o TypeScript e o [`typescript-eslint`](https://typescript-eslint.io) ao seu projeto.
