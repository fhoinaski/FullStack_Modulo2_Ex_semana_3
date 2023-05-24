// app.js

const gerenciarUsuario = require('./gerenciarUsuarios.module');

// Cadastrar um novo usuário
const newUser = {
  nome: 'John Doe',
  email: 'john.doe@example.com',
  senha: '123456'
};

// const createUserResult = gerenciarUsuario.criarUsuario(newUser);
// console.log(createUserResult.message);

// // Fazer login
// const loginResult = gerenciarUsuario.login('john.doe@example.com', '123456');
// console.log(loginResult.message);

// // Excluir usuário
const deleteUserResult = gerenciarUsuario.deletarUsuario('john.doe@example.com', '123456');
console.log(deleteUserResult.message);
