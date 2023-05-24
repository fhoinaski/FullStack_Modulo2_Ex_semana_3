
//função que conecta a api do cep
async function buscarCep(cep) {
    try {
        const buscar = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

        if (!buscar) {
            throw new Error('Erro ao buscar dados do endereço');
        }
        const dados = await buscar.json();
        return dados
    } catch (error) {
        console.log(error);
    }
}

//função que é exportada e recebe o cep e busca o cep na funçãode buscar cep
async function endereco(cep) {
    try {
        const dados = await buscarCep(cep);
        console.log(dados.bairro);
    } catch (error) {
        console.log('Erro ao buscar o CEP:', error);
    }
}


module.exports = endereco;
