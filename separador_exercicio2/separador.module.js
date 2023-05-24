


function separador(ar,op){
    //função para pegar os numeros par     
    const par = item => item % 2 ===0;
    //função para os numeros impar 
    const impar = item => item % 2 !==0;
    if(op===1){
        return ar.filter(par)
    } else if(op===2){
        return ar.filter(impar)
    }else if (op===3){
        return {
            pares:ar.filter(par),
            impares:ar.filter(impar),
        };
    }else{
        throw new Error("Você deve informar como primeiro argumento um array e opção 1 para pares, 2 para impares e 3 para array com os numeros pares e impares")
    }

}


//exporta o modulo para ser usado
module.exports=separador;