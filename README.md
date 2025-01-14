# Dockerized Client-Server NextJS Project

Este projeto consiste em dois aplicativos Next.js separados, organizados para funcionar como um sistema **cliente-servidor**. Ambos os aplicativos são gerenciados e executados simultaneamente com Docker Compose.

- **Client App:** Responsável por buscar e consumir as APIs do servidor.
- **Server App:** Distribui as APIs usadas exclusivamente pelo cliente.

## Pré-requisitos

Antes de executar o projeto, certifique-se de ter as seguintes ferramentas instaladas:

- [Docker](https://www.docker.com/) / [Docker Compose](https://docs.docker.com/compose/)
- [Git](https://git-scm.com/)

## Como Executar

>### <br/> ⚠ Por padrão o client-side está configurado na porta 3030 e o server-side na porta 3131 <br/><br/>

1. Clone o repositório:

   ```bash
   git clone https://github.com/Dev-LDRC/Dockerized_Client-Server_NextJS.git
   ```

2. Configure as variáveis de ambiente:

   ### Adicione os arquivos `.env` para o cliente e servidor nas pastas correspondentes<br/>(`client_app` e `api-service`):

   - `./app_frontend/client_app/.env`:

     ```JS
     NEXT_PUBLIC_CLIENT_PORT = <your_client_side_port>
     NEXT_PUBLIC_SERVER_PORT = <your_server_side_port>
     ```

   - `./app_backend/api-service/.env`:
     ```JS
     NEXT_PUBLIC_SERVER_PORT = <your_server_side_port>
     NEXT_PUBLIC_CLIENT_PORT = <your_client_side_port>
     ```

3. Configure em quais portas serão executadas pelo NextJS de ambos os arquivos `package.json` das pastas correspondente (client_app e api-service):

   - `./app_frontend/client_app/package.json`:

     ```json
     {
        "name": "client_app",
        "version": "0.1.0",
        "private": true,
        "scripts": {
           "dev": "next dev -p <your_client_side_port>",
           "build": "next build",
           "start": "next start -p <your_client_side_port>",
           "lint": "next lint"
        },
        ...
     }
     ```

   - `./app_backend/api-service/package.json`:
     ```json
     {
        "name": "api-service",
        "version": "0.1.0",
        "private": true,
        "scripts": {
           "dev": "next dev -p <your_server_side_port>",
           "build": "next build",
           "start": "next start -p <your_server_side_port>",
           "lint": "next lint"
        },
        ...
     }
     ```

4. Configure em quais portas serão exportas de ambos os arquivos `package.json` das pastas correspondente (client_app e api-service):

   - `./app_frontend/client_app/Dockerfile`:

     ```Dockerfile
     ...

     RUN npm install --only=production

     EXPOSE <your_client_side_port>

     CMD [ "npm", "start" ]
     ```

   - `./app_backend/api-service/Dockerfile`:

     ```Dockerfile
     ...

     RUN npm install --only=production

     EXPOSE <your_server_side_port>

     CMD [ "npm", "start" ]
     ```

5. Execute os contêineres com Docker Compose da raiz do projeto:

   ```bash
   docker-compose up --build
   ```

<h2 style="text-align: center">PRONTO!!! AGORA VOCÊ ESTÁ COM O PROJETO SENDO EXECUTADO E ORQUESTRADO PELO DOCKER! 🤝😎🚀</h2>

<p style="font-size:20.5px;"><strong>Contribuição:</strong></p>

>### <br/> - Se você estiver com tempo disponivel, gostaria de um feedback seu, critica, recomendações, seja 100% sincero(a). 🤝😉<br/><br/> - Quer contribuir com este projeto? se sim, faça um fork, crie uma branch e envie um pull request. 👊 <br/><br/>