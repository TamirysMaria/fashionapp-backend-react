# fashionapp-backend

Backend da aplicação Fashion App desenvolvido com Node.js, Express e MongoDB.

## Tecnologias Utilizadas

- Node.js
- Express
- MongoDB Atlas
- Mongoose
- Dotenv
- Cors

## Pré-requisitos

Antes de iniciar, é necessário ter instalado:

- Node.js
- NPM
- MongoDB Atlas (ou outra instância MongoDB)

## Instalação

1. Clone o repositório:

```bash
git clone <URL_DO_REPOSITORIO>
```

2. Acesse a pasta do projeto:

```bash
cd fashionapp-backend
```

3. Instale as dependências:

```bash
npm install
```

## Configuração

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:
PORT= 3000
MONGO_URI=
Exemplo:

```env
PORT=3000
MONGO_URI=mongodb+srv://usuario:senha@cluster.mongodb.net/fashiondb?retryWrites=true&w=majority
```

## Executando o Projeto

### Modo desenvolvimento

```bash
npm run dev
```

### Modo produção

```bash
npm start
```

## Estrutura do Projeto

```text
fashionapp-backend
│
├── controllers/
├── models/
├── routes/
├── .env
├── server.js
└── package.json
```
## Desenvolvedor:
Tamirys Maria

Projeto desenvolvido para fins acadêmicos.
