Anotações

- fecth: Significa "pegar"
- Ao criar componentes use a extensão "jsx". O react entenderá que se trata de um componente de ajudará na criação.
- Ao usar (\_e) no "Catch" de um "Try", a variavel é ignorada e não é criada em memória.

Extensões VSCode

- Simple React Snippets

Bibliotecas usadas

- yarn: permite fazer requisições http:

```bash
yarn i @latest
yarn start (inicializa a aplicação)
```

- axios: permite fazer requisições http:

```bash
yarn add axios
import axios from "axios"
```

- cors: para resolver o problema do CORS policy (instalado no back-end)

```bash
yarn add axios
```

- Saas: Adiciona funcionalidades especiais ao CSS
- Obs: requer renomear o index.css para "index.scss"
- Url: https://sass-lang.com/?_gl=1*1on8k18*_ga*ODUxNzAwNTc2LjE3MzA1NTg4OTE.*_ga_37GXT4VGQK*MTczNzA4MDU1Ny42OC4xLjE3MzcwODE4MDcuMC4wLjA.

```bash
yarn add node-sass
```

Fonte: Archivo (Buscado de google fonts)
Requer adição no index.html e mudança no index.js

```index.html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
```

- Saas: Adiciona funcionalidades especiais ao CSS

```bash
yarn add sass
```

- ReactIcon: Icones React
- Todos os ícones: https://react-icons.github.io/react-icons/?_gl=1*segjeb*_ga*ODUxNzAwNTc2LjE3MzA1NTg4OTE.*_ga_37GXT4VGQK*MTczNzIyMjMzNC43Ni4xLjE3MzcyMjI2MTAuMC4wLjA.

```bash
yarn add react-icons
```

- React Alert: Semelhante a toast, aparece uma caixinha de notificação.

```bash
yarn add react-alert react-alert-template-basic
```

- React Alert: É o toast.

```bash
yarn add react-toastify
```

- Requer configuração adicional no index.js

````index.js
   import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.scss';
import reportWebVitals from './reportWebVitals';

import App from './App';
import { ToastContainer } from 'react-toastify';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <ToastContainer
      position="bottom-center"
      autoClose={2500}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

- React Router DOM: Permite trabalhar com rotas no react.
- Obs: Requer configurações adicionais no index.js

```bash
yarn add react-router-dom@6.0.2
yarn add react-router-dom@latest
````

```

// Eventos usados
useState: Para criar variaveis manipulaveis no react
useState: Para executar rotinas ao montar um componente
useMemo: No componente "Tasks" estava sendo executando filter e map toda vez que o componente era renderizado, o que estava consumindo
useNavigate: Usado para navegar nas rotas.
useParam: Usado para passar variáveis entre rotas.
useCallBack: Necessário ao usar um useState dentro de um useEffect. Salva a função em memória e só a executa uma vez. Isto por que o useEffect exige que a dependencia seja passada mesmo que cause loop.
muita memória. Para resolver, usou-se useMemo que já retornava os dados do filtro, apenas quando correspondesse a regra. E no "[]", foi
passado que ele só deveria ser executado quando o item "Task" mudasse. Poupando performace.
onKeyDown: Para executar a adição de uma task ao pressionar "Enter"
onChange: Para escutar quando o valor do "Input" mudar.
onClick: Para vincular um método de click em um ícone.
```

- ESLint e Prettier para regras de código e formatação.
- Modelo usado: https://standardjs.com/

```bash
npx eslint@7.32.0 --init
yarn -D eslint-configer-prettier (Isto é usado para desativar todas as regras que entram em conflito com o eslint)
```

```Questions
√ How would you like to use ESLint? · style
√ What type of modules does your project use? · esm
√ Which framework does your project use? · react
√ Does your project use TypeScript? · No / Yes
√ Where does your code run? · browser, node
√ How would you like to define a style for your project? · guide
√ Which style guide do you want to follow? · standard
√ What format do you want your config file to be in? · JSON
√ Would you like to install them now with npm? · No / Yes
```

- Comando ESLINT para corrigir todos os arquivos de extensão "JSX"

```bash
yarn eslint --fix --ext .jsx .
```

- Requer configuração adicional para "eslint-configer-prettier" adicionando "prettier nos plugins:
- (Isto é usado para desativar todas as regras que entram em conflito com o eslint)

```.eslintrc.json
{
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "extends": ["plugin:react/recommended", "standard", "prettier"],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": ["react"],
  "rules": {
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off"
  }
}
```

-- Deve-se buscar o prettier correspondente ao style do ESLint

- Ao encontrar e instalar, é necessário alterar o .prettierrc
