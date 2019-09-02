function funcao9(){
    var i=0;
    var vet = [];

    for (i=0;i<5;i++){
        var objeto = {};
        objeto.vendedor = Number(prompt("Digite seu numero(vendedor):"));
        objeto.salario = Number(prompt("Digite o valor do seu salario original: "));
        objeto.vendas = Number(prompt("Digite o seu total de vendas: "));
        vet.push(objeto)
        var comiss = 6/100*vet[i].vendas;
        var final = (comiss+vet[i].salario)
        var maior = vet[0].vendas
        var numero = vet[0].vendedor

        alert("Valor de comissao"+"\n"+"R$"+comiss+"\n"+"Valor final"+"\n"+"R$"+final);
        if(vet[i].vendas>maior){
            (maior == vet[i].vendas)&&(numero == vet[i].vendedor)
        }
    }
    alert("Maior numero de vendas:"+"\n"+maior)
    alert("Vendedor do mes"+"\n"+"codigo:"+numero)
}