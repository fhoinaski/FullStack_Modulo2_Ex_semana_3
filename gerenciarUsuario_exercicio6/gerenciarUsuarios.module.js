const fs = require('fs');
const path = require('path');

const dadosUsuarioPatch = path.join(__dirname, 'usuarios.json');

function lerDadosUsuario() {
  try {
    const data = fs.readFileSync(dadosUsuarioPatch, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

function guardarDadosUsuario(users) {
  fs.writeFileSync(dadosUsuarioPatch, JSON.stringify(users, null, 2));
}

function criarUsuario(user) {
  const users = lerDadosUsuario();
  const emailExists = users.some(u => u.email === user.email);

  if (emailExists) {
    return { sucesso: false, message: 'Email já está sendo utilizado.' };
  }

  users.push(user);
  guardarDadosUsuario(users);
  return { sucesso: true, message: 'Usuário cadastrado com sucesso.' };
}

function login(email, password) {
  const users = lerDadosUsuario();
  const user = users.find(u => u.email === email);

  if (!user || user.senha !== password) {
    return { sucesso: false, message: 'Email ou senha incorretos.' };
  }

  return { sucesso: true, message: 'Login realizado com sucesso.' };
}

function deletarUsuario(email, password) {
  const users = lerDadosUsuario();
  const user = users.find(u => u.email === email);

  if (!user || user.senha !== password) {
    return { sucesso: false, message: 'Email ou senha incorretos.' };
  }

  const atualizarUsuario = users.filter(u => u.email !== email);
  guardarDadosUsuario(atualizarUsuario);
  return { sucesso: true, message: 'Usuário excluído com sucesso.' };
}

module.exports = {
  criarUsuario,
  login,
  deletarUsuario
};
