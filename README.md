```markdown

![Banner](assets/banner.png)

![Static Badge](https://img.shields.io/badge/version-v0.0.1-green)
![Static Badge](https://img.shields.io/badge/dependencies-up_to_date!-orange)
![Static Badge](https://img.shields.io/badge/downloads-0-blue)

# QuokkaDB 👨‍💻

> Um banco de dados leve, rápido e 100% baseado em arquivos JSON. Ideal para apps pequenos, protótipos, ferramentas offline e projetos educacionais.

---

## 🚀 Visão Geral

O **QuokkaDB** é um banco de dados minimalista e multiplataforma feito para funcionar com zero configuração. Ele lê e escreve diretamente em arquivos `.json`, oferecendo uma API simples e intuitiva para gerenciar dados estruturados.

---

## 🧠 Features

- 📦 Armazenamento baseado em JSON
- ⚡️ Leve e rápido
- 🔌 Zero dependências externas
- 🧰 API simples para leitura, escrita e consulta
- 🧪 Ideal para testes, mock data e protótipos
- 🏁 Pronto para ser usado com Node.js, Electron, React Native e mais

---

## 📂 Estrutura do Projeto

```quokkadb/
├── src/
│ ├── index.ts # Ponto de entrada
│ ├── quokka.ts # Lógica principal do DB
│ └── types.ts # Tipos e interfaces
├── data/ # Onde os arquivos JSON são salvos
├── assets/ # Imagens e banners
├── README.md
├── tsconfig.json
└── package.json
```


---

## 🛠️ Como usar

### Instalação

Use algum gerenciador de pacotes para instalar o QuokkaDB

## npm:
```bash
npm install quokkadb
```

## pnpm:

```bash
pnpm install quokkadb
```

## yarn:

```bash
yarn add quokkadb
```

## Exemplo de uso

```javascript
import QuokkaDB from 'quokkadb';

const users = new QuokkaDB("users");

const userTable = {
    name: "Lukas",
    age: 13,
    id: 4
}

users.init();
users.createElement(userTable);
users.saveState();
```

# FAQs
```