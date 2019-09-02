function funcao(){
    var mes = []

    for (var i = 0;i<=11;i++){
        var objeto={}

        objeto.codigo = Number(prompt("Insira seu codigo"))
        objeto.vendas = Number(prompt("Insira o numero de vendas"))
        objeto.mensal = prompt("Insira o mes")
        mes.push(objeto)

        if (mes[i].mensal!="Janeiro"||"Fevereiro"||"Março"||"Abril"||"Maio"||"Junho"||"Julho"||"Agosto"||"Setembro"||"Outubro"||"Novembro"||"Dezembro"){
            alert("Mes invalido")
        }
        if(mes[i].codigo==mes[i].codigo){
            alert("codigo já inserido")
            break;
        }
        else{

        }
    
    }
}