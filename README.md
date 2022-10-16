# NLW eSports Trilha Ignite - encontre-seu-duo
Software para encontrar duo de jogos online

## ✔️ Técnicas e tecnologias utilizadas

- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [TypeScript](https://www.typescriptlang.org)
- [NodeJS](https://nodejs.org/en/)
- [Tailwind CSS](https://tailwindcss.com)
- [Expo](https://expo.dev)
- [ReactJS](https://reactjs.org)
- [React Native](https://reactnative.dev)
- [HTML5](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
- [CSS3](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
- [Hoppscotch](https://hoppscotch.io)
- [Prisma](https://www.prisma.io)
- [SQlite](https://www.sqlite.org/index.html)
- [Radix UI](https://www.sqlite.org/index.html)
- [Ts-node-dev](https://www.npmjs.com/package/ts-node-dev)

## Design da aplicação WEB
<p align="center">
  <img src="https://user-images.githubusercontent.com/101130704/196013442-3299cf62-29a8-4656-93af-14acf51c64b2.png"/>
  <img src="https://user-images.githubusercontent.com/101130704/196013452-c5fdb70d-85ba-4537-9ac6-ddb7bc1c54bb.png"/>
</p>

## Design da aplicação Mobile
<p align="center">
  <img src="https://user-images.githubusercontent.com/101130704/196013465-f603e84f-eab5-4bbd-84a8-d06adcd94e9d.png" width="310em" hspace="12"/>
  <img src="https://user-images.githubusercontent.com/101130704/196013469-8ab4b319-5f42-4fba-9b47-b1c351e2b8c8.png" width="310em" hspace="12"/>
  <img src="https://user-images.githubusercontent.com/101130704/196013471-be9eab05-dc0d-4536-8c34-4563f2983c22.png" width="310em" hspace="12"/>
</p>

## 🕹️ Como Utilizar
Para rodar estas aplicações será necessário, primeiramente escolher a que deseja, entre elas:
- WEB;
- MOBILE.

A aplicação "server" se integra com a "web" e a "mobile", realizando o Back-end. Caso queira rodar as aplicações basta utilizar os seguintes comandos:

Primeiro vamos rodar a aplicação do backend, e depois podemos rodar as outras aplicações
#### Server
Rodamos os comandos com o [npm](https://www.npmjs.com) para instalar as dependências e o banco de dados local.
```
$ npm install
$ npm run db:migrate
```
Depois rodamos o comando para iniciar o servidor
```
$ npm run dev
```
#### Web
Rodando a aplicação web, primeiro iniciar o servidor e depois a "web"
```
$ npm install
$ npm run dev
```

#### Mobile
Rodando a aplicação mobile, primeiro iniciar o servidor e depois o próprio "mobile":
```
$ npx expo whoami
$ expo start 
```

Obs.: não esqueça de trocar pelo IP da sua máquina, para verificar o IP utilize `ipconfig` no terminal Windows e pegue o endereço IPv4 ou caso sistema Linux, vá em Configurações > Rede > *engrenagem* > Endereço IPv4, esse é o endereço IP que será usado.

## Informações Extras:

### HTTP methods 
- GET = Buscar
- POST = Criar
- PUT = Editar uma entidade
- PATCH = Editar uma informação específica
- DELETE = Deletar/Apagar

Obs.: o nome das rotas são sempre no plural.

### HTTP Codes

Tipo de resposta que o back-end está dando.

Status 201 - Algo foi criado

Status 200 - Resposta genérica de sucesso (ok)

Principais: 

- Começa com 2 -> Sucesso
- Começa com 3 -> Redirecionamento
- Começa com 4 -> Erro no código ou por parte do cliente
- Começa com 5 ou derivados -> Erro interno e/ou erros inesperados
