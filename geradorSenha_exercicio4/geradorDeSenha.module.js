function geradorDeSenha(tamanho) {
  //constante com todo o alfabeto e os números
  const caracteres =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  //constante que guarda o numero de caracteres
  const numeroCaracteres = caracteres.length;

  //variavel que recebe a senha começa com senha vazia
  let senha = "";

  // O loop 'for' é executado até que o valor de 'i' seja igual ao tamanho desejado da senha
  for (let i = 0; i < tamanho; i++) {
    // Gera um número aleatório entre 0 e 1, multiplica pelo número de caracteres possíveis
    // e arredonda para baixo, obtendo um índice aleatório válido
    const indiceAleatorio = Math.floor(Math.random() * numeroCaracteres);
    

    // Utiliza o índice aleatório para obter o caractere correspondente no conjunto de caracteres
    // e concatena o caractere à senha
    senha += caracteres[indiceAleatorio];
  }

  return senha;
}


module.exports = geradorDeSenha;
