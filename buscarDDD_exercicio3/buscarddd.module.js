const dddsEstados = [
  { ddd: 11, estado: "São Paulo" },
  { ddd: 12, estado: "São Paulo" },
  { ddd: 13, estado: "São Paulo" },
  { ddd: 14, estado: "São Paulo" },
  { ddd: 15, estado: "São Paulo" },
  { ddd: 16, estado: "São Paulo" },
  { ddd: 17, estado: "São Paulo" },
  { ddd: 18, estado: "São Paulo" },
  { ddd: 19, estado: "São Paulo" },
  { ddd: 21, estado: "Rio de Janeiro" },
  { ddd: 22, estado: "Rio de Janeiro" },
  { ddd: 24, estado: "Rio de Janeiro" },
  { ddd: 27, estado: "Espírito Santo" },
  { ddd: 28, estado: "Espírito Santo" },
  { ddd: 31, estado: "Minas Gerais" },
  { ddd: 32, estado: "Minas Gerais" },
  { ddd: 33, estado: "Minas Gerais" },
  { ddd: 34, estado: "Minas Gerais" },
  { ddd: 35, estado: "Minas Gerais" },
  { ddd: 37, estado: "Minas Gerais" },
  { ddd: 38, estado: "Minas Gerais" },
  { ddd: 41, estado: "Paraná" },
  { ddd: 42, estado: "Paraná" },
  { ddd: 43, estado: "Paraná" },
  { ddd: 44, estado: "Paraná" },
  { ddd: 45, estado: "Paraná" },
  { ddd: 46, estado: "Paraná" },
  { ddd: 47, estado: "Santa Catarina" },
  { ddd: 48, estado: "Santa Catarina" },
  { ddd: 49, estado: "Santa Catarina" },
  { ddd: 51, estado: "Rio Grande do Sul" },
  { ddd: 53, estado: "Rio Grande do Sul" },
  { ddd: 54, estado: "Rio Grande do Sul" },
  { ddd: 55, estado: "Rio Grande do Sul" },
  { ddd: 61, estado: "Distrito Federal" },
  { ddd: 62, estado: "Goiás" },
  { ddd: 63, estado: "Mato Grosso do Sul" },
  { ddd: 64, estado: "Mato Grosso" },
  { ddd: 65, estado: "Mato Grosso" },
  { ddd: 66, estado: "Acre" },
  { ddd: 67, estado: "Rondônia" },
  { ddd: 68, estado: "Amazonas" },
  { ddd: 69, estado: "Amapá" },
  { ddd: 71, estado: "Bahia" },
  { ddd: 73, estado: "Bahia" },
  { ddd: 74, estado: "Bahia" },
  { ddd: 75, estado: "Bahia" },
  { ddd: 77, estado: "Bahia" },
  { ddd: 79, estado: "Sergipe" },
  { ddd: 81, estado: "Pernambuco" },
  { ddd: 82, estado: "Alagoas" },
  { ddd: 83, estado: "Paraíba" },
  { ddd: 84, estado: "Rio Grande do Norte" },
  { ddd: 85, estado: "Ceará" },
  { ddd: 86, estado: "Piauí" },
  { ddd: 87, estado: "Pernambuco" },
  { ddd: 88, estado: "Ceará" },
  { ddd: 89, estado: "Piauí" },
  { ddd: 91, estado: "Pará" },
  { ddd: 92, estado: "Amazonas" },
  { ddd: 93, estado: "Pará" },
  { ddd: 94, estado: "Pará" },
  { ddd: 95, estado: "Roraima" },
  { ddd: 96, estado: "Amapá" },
  { ddd: 97, estado: "Amazonas" },
  { ddd: 98, estado: "Maranhão" },
  { ddd: 99, estado: "Maranhão" },
];

function buscadorDDD(ddd) {
    // Se o DDD foi informado como uma string, tenta convertê-lo para um número
    if (typeof ddd === 'string') {
      ddd = parseInt(ddd, 10);
    }
  
    // Verifica se o DDD é NaN após a conversão
    if (isNaN(ddd)) {
      // Se for NaN, lança um erro
      throw new Error("Erro: DDD deve ser um número");
    }
  
    // Procura o objeto correspondente ao DDD na lista dddsEstados
    const nomeEstado = dddsEstados.find(dddEstado => dddEstado.ddd === ddd);
  
    // Retorna o nome do estado se encontrado, caso contrário, retorna "DDD não encontrado"
    return nomeEstado ? nomeEstado.estado : "DDD não encontrado";
  }
  
  
  


  
module.exports = buscadorDDD;
