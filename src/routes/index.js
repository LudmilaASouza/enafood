const { Router } = require('express')
const UserController = require('../controllers//UserController')
const SessionController = require('../controllers/Login')
const ProductController = require('../controllers/ProductController')
const CartController = require('../controllers/CartController')

const routes = Router ()

routes.post('/users', UserController.createUser) // criar usuário
routes.get('/users', UserController.getUsers) // listar usuário

routes.post('/sessions', SessionController.createSession) // fazer login

routes.post('/products/:user_id',  ProductController.createProduct) // cadastrar produtos e identificar qual usuário cadastrou produto
routes.get('/products/:user_id', ProductController.getUserProduct) // listar produtos de um usuário
routes.patch('/products/:user_id/:product_id', ProductController.updateProduct) // atualizar produto
routes.delete('/products/:user_id/:product_id', ProductController.deleteProduct) // deletar produto
routes.get('/products', ProductController.getProducts) //lista todos produtos

routes.post('/carts/:user_id', CartController.createCart) // carrinho
routes.get('/carts/:user_id', CartController.getUserCarts) // visualizar carrinho de compra
routes.get('/carts/:user_id/:cart_id', CartController.getCart) // visualizar produtos dentro da compra de um carrinho

module.exports = routes

