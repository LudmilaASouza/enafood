# API Rest - EnaFood

Este projeto foi realizado como parte do processo seletivo para a vaga de Desenvolvedor Backend na Enacom.

O objetivo foi projetar a API Rest e o banco de dados de um sistema de delivery, o **EnaFood**. Onde cada usuário poderá colocar no carrinho produtos que estejam disponíveis, adicionar forma de pagamento e endereço de entrega.

## Tecnologias utilizadas

- [Node.Js](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [MongoDB](https://www.mongodb.com/atlas)
- [Insomnia](https://insomnia.rest)
- [VSCode](https://code.visualstudio.com/download)

## Instruções

**No terminal, executar os comandos:**

npm init -y

npm install express mongoose cors dotenv

npm install noodemon-D

npm run dev


## Funcionalidades:

- User (Usuário): para criar o usuário é necessário informar o nome, telefone e e-mail, sendo todas as informações obrigatórias, enviando um erro caso não sejam preenchidas. Há também a possibilidade de visualizar os usuários, facilitando a visualização do (user_id) de cada um.

- Products (Produtos): para criar o produto você precisa enviar as seguintes informações: nome do produto, descrição, valor e quantidade. Você tem como identificar qual usuário cadastrou o produto, listar o produto de um usuário específico (user_id), atualizar, deletar e visualizar a lista de todos os produtos cadastrados.

- Cart (Carrinho): criar um carrinho inserindo um produto pela sua id (product_id) e passando por parâmetro a id do usuário (user_id). É também necessário adicionar o seu endereço com as seguintes informações: rua, número, cidade, estado e cep. Logo depois você adiciona a forma de pagamento: cartão de crédito/débito ou vale alimentação, informa o número do cartão e o código cvc.

- Login: é feito pelo e-mail informado pelo usuário e você consegue visualizar todas as informações cadastradas por ele.
