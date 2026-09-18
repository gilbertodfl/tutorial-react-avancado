# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## baixando do git
faça download
cd loginRegistar
npm install
npm run dev
Abra no browser: http://localhost:5173/
## criando o projeto do zero
npm create vite@latest
 responda:
    projeto: loginRegister
    react
    javascript

## install
Alguns install que rodamos. Mais detalhes veja no package.json

npm install react-router  @hookform/resolvers react-hook-form react-dom yup

## tailwind

https://tailwindcss.com/docs/installation/using-vite

npm install @tailwindcss/vite

vite.config.js:
```
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})```