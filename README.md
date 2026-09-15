# 🔍 API Achados e Perdidos

API REST desenvolvida para o controle, cadastro e gerenciamento de itens achados e perdidos. O sistema permite registrar objetos encontrados, gerenciar devoluções e facilitar a busca por pertences perdidos.

---

## 🚀 Tecnologias Utilizadas

O projeto foi construído utilizando as seguintes ferramentas e tecnologias:

* **Node.js** - Ambiente de execução JavaScript/TypeScript.
* **NestJS** - Framework progressivo para construção de aplicações eficientes e escaláveis.
* **TypeScript** - Superconjunto de JavaScript que adiciona tipagem estática.
* **MySQL** - Sistema de gerenciamento de banco de dados relacional.
* **MySQL Workbench** - Ferramenta visual para modelagem e gerenciamento do banco de dados.

---

## 🛠️ Como Executar o Projeto Localmente

Siga os passos abaixo para rodar a aplicação na sua máquina:

### 1. Clonar o Repositório
```bash
git clone https://github.com
cd api-achados-e-perdidos
```

### 2. Instalar as Dependências
```bash
npm install
```

### 3. Configurar o Banco de Dados (MySQL)
1. Abra o **MySQL Workbench** (ou o terminal do MySQL).
2. Execute o script contido no arquivo `achados_perdidos.sql` para criar a estrutura das tabelas.
3. Copie o arquivo `.env.exemplo` e renomeie-o apenas para `.env`.
4. Abra o arquivo `.env` e preencha com as credenciais do seu banco de dados local:
   ```env
   DB_HOST=localhost
   DB_PORT=3306
   DB_USER=seu_usuario_do_mysql
   DB_PASS=sua_senha_do_mysql
   DB_NAME=nome_do_banco
   ```

### 4. Rodar a Aplicação
Para iniciar o servidor em modo de desenvolvimento (com atualização automática):
```bash
npm run start:dev
```

A API estará disponível e rodando em `http://localhost:3000` (ou na porta configurada no seu `.env`).

---

## 👤 Autora

* **Noemi Amaro** - [GitHub](https://github.com)


## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
