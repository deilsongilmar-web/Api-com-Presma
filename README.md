<img width="1024" height="393" alt="Api com Prisma 01" src="https://github.com/user-attachments/assets/b4b55dc3-66e2-4b0d-9345-174c8c64a193">


# API com Prisma 
Sistema de Cadastro de Motorista - Prisma Backend
Este projeto é uma aplicação Node.js desenvolvida com TypeScript e Prisma ORM para gerenciamento de banco de dados. O objetivo principal é demonstrar a configuração de schemas, migrações e integração com variáveis de ambiente.

🚀 Tecnologias Utilizadas
Node.js

TypeScript

Prisma ORM

Dotenv

📦 Estrutura do Projeto
.
├── prisma/
│   ├── migrations/      # Histórico de alterações do banco de dados
│   └── schema.prisma    # Definição dos modelos e fonte de dados
├── src/                 # Código fonte da aplicação
├── .env                 # Variáveis de ambiente (não versionado)
├── prisma.config.ts     # Arquivo de configuração do Prisma
└── package.json         # Dependências e scripts.
├── prisma/
│   ├── migrations/      # Histórico de alterações do banco de dados
│   └── schema.prisma    # Definição dos modelos e fonte de dados
├── src/                 # Código fonte da aplicação
├── .env                 # Variáveis de ambiente (não versionado)
├── prisma.config.ts     # Arquivo de configuração do Prisma
└── package.json         # Dependências e scripts


🛠️ Instalação e Configuração
1. Clone o repositório: Bash git clone https://github.com/deilsongilmar-web/atividade-22-23.git
cd atividade-22-23
2. Instale as dependências:npm install
3. Configure as variáveis de ambiente: Bash Snippet de código
Crie um arquivo .env na raiz do projeto e adicione a URL do seu banco de dados:
DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"
4. Execute as Migrações do Prisma: Bash
Para criar as tabelas no banco de dados:npx prisma migrate dev --name init
5. Gere o Prisma Client: Bash  npx prisma generate

   
🏃 Como executar
Para rodar o projeto em modo de desenvolvimento: c npm run dev

O Gemini disse
Com base na estrutura de código que você apresentou (que usa Prisma, TypeScript, Dotenv e possivelmente um ambiente Node.js moderno), preparei um modelo de README profissional para o seu repositório atividade-22-23.

Este modelo assume que o projeto é uma API ou um serviço backend focado em banco de dados.

Atividade 22-23 - Prisma Backend
Este projeto é uma aplicação Node.js desenvolvida com TypeScript e Prisma ORM para gerenciamento de banco de dados. O objetivo principal é demonstrar a configuração de schemas, migrações e integração com variáveis de ambiente.

🚀 Tecnologias Utilizadas
Node.js

TypeScript

Prisma ORM

Dotenv

📦 Estrutura do Projeto
Plaintext
.
├── prisma/
│   ├── migrations/      # Histórico de alterações do banco de dados
│   └── schema.prisma    # Definição dos modelos e fonte de dados
├── src/                 # Código fonte da aplicação
├── .env                 # Variáveis de ambiente (não versionado)
├── prisma.config.ts     # Arquivo de configuração do Prisma
└── package.json         # Dependências e scripts
🛠️ Instalação e Configuração
Clone o repositório:

Bash
git clone https://github.com/deilsongilmar-web/Api-com-Presma.git
Instale as dependências:

Bash
npm install
Configure as variáveis de ambiente:
Crie um arquivo .env na raiz do projeto e adicione a URL do seu banco de dados:

Snippet de código
DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"
Execute as Migrações do Prisma:
Para criar as tabelas no banco de dados:

Bash
npx prisma migrate dev --name init
Gere o Prisma Client:

Bash
npx prisma generate
🏃 Como executar
Para rodar o projeto em modo de desenvolvimento: Bash npm run dev


🧪 Comandos Úteis do Prisma
npx prisma studio: Abre uma interface visual para explorar seus dados.

npx prisma validate: Verifica se o arquivo de schema está correto.

npx prisma format: Formata automaticamente o arquivo schema.prisma.
