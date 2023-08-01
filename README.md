# Perguntas e Respostas
Site para perguntas e respostas que ficam armazenadas no banco de dados.
Site criado para aprendizado de Sequelize e EJS.

## Tecnologias utilizadas:
- Bootstrap
- Javascript
- MySQL
- Node.js

## Funcionalidades:
- [x] Cadastro de perguntas;
- [x] Cadastro de respostas;
- [x] Listagem de perguntas;
- [ ] Busca de perguntas;
- [ ] Relacionar outras perguntas;
- [ ] Edição de perguntas e respostas;
- [ ] Exclusão de perguntas e respostas;
- [ ] Sobre;
- [ ] Perfil;

## Páginas:
![Página de perguntas](/public/assets/page%20perguntar.jpeg)    
![Página lista de perguntas](/public/assets/page%20perguntas.jpeg)

## Pré-requisitos:
Para começar, serão passadas algumas instruções para que o projeto rode na sua máquina:

### Rodando o Back End (servidor)
```bash
# Clone este repositório

# Acesse a pasta do projeto no terminal/cmd

# Instale as seguintes dependências utilizando npm install:
# - body-parser
# - ejs
# - express
# - mysql2
# - sequelize

# Abra o arquivo database.js dentro da pasta connection e edite a senha de acordo com sua senha do MySQL

# Execute a aplicação
$ nodemon index.js

# O servidor inciará na porta:8080 - acesse <http://localhost:8080>
```