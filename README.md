# drip_store_api
Banco de dados, do projeto

## Express (pacote que sera utilizado para metodos HTTP requests)
fonte: [https://expressjs.com/en/starter/hello-world.html]

[comando]: npm i nodemon express mongoose dotenv

## Passo a passo da logica de criar o node(Servidor)
1. Instalações (npm i nodemon express mongoose dotenv)
2.Testar conexao com o banco Mongo Atlas no arquivo dbConnection 
3. Models -> entidades que vamos trabalhar no Banco (nesse caso Produto e Genero)
4. Controllers -> Ficam a logica 

5. Rotas -> que chama a logica do controller, tbm faz a ligação com o POSTMAN que e onde pesquisamos o caminho: EX: /usuario ; /usuario/id;  . 