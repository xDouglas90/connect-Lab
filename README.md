# Módulo 1 - Projeto Avaliativo 2

<img src="https://lab365.sesisenai.org.br/img/devinhouse-logo.png" />

![ReactJS](https://img.shields.io/badge/reactjs-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Netlify](https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

## 📚 Descrição

<img src="./public/connect-lab-logo.png" />

- Nome do Projeto: Connect Lab
- Link: [connect-lab.netlify](https://connect-lab.netlify.app/)
- Doc com requísitos do projeto: [DEVin[Intelbras] - Módulo 1 - Projeto 2](https://github.com/xDouglas90/connect-Lab/files/9795625/DEVin.Intelbras.-.Modulo.1.-.Projeto.2.pdf)


Aplicação frontend para interface de dispositivos conectados.

- Aplicação responsiviva e com tema claro/escuro:

![image](https://user-images.githubusercontent.com/23640888/192613751-fdef31a3-bf97-4031-acbe-ee369e809135.png)
![image](https://user-images.githubusercontent.com/23640888/192613831-4d5e7542-71a5-47cc-a692-264dc34ef085.png)


- <strong>Página Login</strong> - Onde o usuário deslogado é direcionado ao acessar a aplicação:

![image](https://user-images.githubusercontent.com/23640888/192612982-21834ee8-1b89-4389-bfd6-1d39051ff00e.png)

- <strong>Página Cadastro</strong> - Onde o usuário pode registrar uma conta nova:

![image](https://user-images.githubusercontent.com/23640888/192613319-d07d9503-2a11-460b-a3c1-d159dbef3f7f.png)


- <strong>Página Início</strong> - Onde o usuário logado é direcionado, contendo um box com informações do temperatura em tempo real, baseado no endereço fornecido em seu cadastro:

![image](https://user-images.githubusercontent.com/23640888/192611349-99459c4c-cb4a-4b2d-b5e9-fce5fe915e76.png)

Clicando no nome do dispositivo ou no ícone de info(i), o usuário obtém informações mais detalhadas do mesmo através de um modal:

![image](https://user-images.githubusercontent.com/23640888/192614515-7dbbc777-1ff1-4aec-8e15-5cc1556043b2.png)


- <strong>Página Dispositivos</strong> - Onde o usuário logado encontrara toda a gama de produtos disponíveis para o seu uso, podendo pesquisar digitando seu nome ou tipo e/ou selecionar os botões de filtros por tipos:

![image](https://user-images.githubusercontent.com/23640888/192611811-5a5b7432-ba9d-43d2-860e-333e3df5757c.png)

- <strong>Página Perfil</strong> - Onde o usuário logado poderá editar informações cadastradas:

![image](https://user-images.githubusercontent.com/23640888/192612254-ad336d4c-4b68-414b-84af-b50db56cee2a.png)

## 🛠️ Stack

- [ReactJS](https://pt-br.reactjs.org/)
- [Vite](https://vitejs.dev/)
- [ES Lint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Axios](https://axios-http.com/ptbr/)
- [Styled Components](https://styled-components.com/)
- [Polished](https://polished.js.org/)
- [React Router](https://reactrouter.com/en/main)
- [React Hook Form](https://react-hook-form.com/)
- [Yup](https://github.com/jquense/yup)
- [React Modal](https://reactcommunity.org/react-modal/)
- [React Query](https://react-query-v3.tanstack.com/)
- [React Spinners](https://www.davidhu.io/react-spinners/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Switch](https://www.npmjs.com/package/react-switch)
- [UUID](https://www.npmjs.com/package/uuid)

## ⚙️ Rodar Localmente

- Você vai precisar do repositório da API:

```bash
git clone git@github.com:DEVin-Intelbras/connect-lab-server-node.git
```

Para rodar a API é preciso criar o arquivo `.env` na raiz do projeto, adicionar a uri de conexão do mongo e a porta que será executado, além da secret que servirá para gerar os tokens de autenticação.

```bash
DB_URI_CONNECTION = "mongodb+srv://<user>:<password>@<uri>/<collection>?retryWrites=true&w=majority"
PORT = 3030
SECRET = mykey
```

Após, instale as dependências:

```bash
npm install
```

E rode a API localmente:

```bash
npm run dev
```

- Clone o repositório do Connect Lab:

```bash
git clone git@github.com:xDouglas90/connect-Lab.git
```

Instale as dependências:

```bash
npm install
```

E rode o projeto localmente:

```bash
npm run dev
```

Agora basta acessar o endereço: [http://localhost:4000/](http://localhost:4000/)

## 👨‍💻 Autor

<div align="center">
<a href="https://www.linkedin.com/in/odouglas-oliveira/">
 <img style="border-radius: 50%;" src="https://media-exp1.licdn.com/dms/image/C4D03AQFbTKz3Eu2jaw/profile-displayphoto-shrink_800_800/0/1649274791131?e=1666224000&v=beta&t=i02leEaNKD7lzAD9tst3mX9OHpvsL2t8DONcYk-wQaM" width="100px;" alt="Imagem de perfil do Linkedin"/>
 <br />
 <sub><b>Douglas Oliveira</b></sub></a> <a href="https://www.linkedin.com/in/odouglas-oliveira/" title="Linkedin">🚀</a>  <br />
</div>
