function funcao(){
    var vet = [];

    for (var i=0;i<20;i++){
        var vetob = {};
        vetob.sexo = prompt("Digite seu sexo (M ou F):");
        vetob.filhos = Number(prompt("Digite sua quantidade de filhos:"));
        vetob.salario = Number(prompt("Digite seu salário:"));
        vetob.idade = Number(prompt("Digite sua idade:"));
        vet.push(vetob);
    }

    var somaSal = 0
    var somaFil = 0
    var MaiorSal = vet[0].salario
    var mulheres = 0
    var media
    for(var i=0;i<vet.length;i++){
        media = somaSal/vet.length
        somaSal = somaSal+vet[i].salario
        somaFil = somaFil+vet[i].filhos
        if(vet[i].salario>MaiorSal){
            MaiorSal = vet[i].salario
        }
        if((vetob.sexo=="F")&&(vetob.salario > 1000)){
            mulheres = mulheres+1
        }
    }
    alert("Media:"+media);
    alert("Media de filhos:"+somaFil/vet.length);
    alert("Maior Salario:"+somaSal/vet.length);
    alert("Percentual:"+mulheres/3*100);
}



function funcao2(){
    var vet = []
   

    for (var i=0;i<2;i++){
        var objeto = {}

        objeto.sexo = prompt("Digite seu sexo (M ou F):");
        objeto.altura = Number(prompt("Digite sua altura:"));
        objeto.idade = Number(prompt("Digite sua idade:"));
        objeto.cor = prompt("Digite a cor dos seus olhos(A;V ou C):");
        vet.push(objeto);
    }

    var maiorIda = vet[0].idade;
    var homem = 0;
    var pessoas = 0;
    for(var i=0;i<=4;i++){

        if((vet[i].altura>1.60 )&&(vet[i].cor=="C")){
            soma = soma + vet[i].idade
        }
        media = soma/vet[i].length;

        for (var i = 0;i<=4;i++){
            var maiorIda = vet[0].idade;

            if(vet[i].idade > maiorIda){
                maiorIda = vet[i].idade; 
            }
            if(vet[i].sexo =="M"){
                homem = homem+1
            }
    
            if (((vet[i].idade >=20 && vet[i].idade <=45)&&(vet[i].sexo == "F")) || ((vet[i].cor=="V")&&(vet[i].altura<1.70))){
                pessoas = pessoas+1
            }
        }

    }
    alert("Maior idade:"+maiorIda);
    alert("Percentual de homens:"+homem/vet.length*100+"%");
    alert("Media:"+media);
    alert("Quantidade:"+pessoas);
}





function funcao3(){
    var vet = []

    for(var i=0;i<2;i++){

        var objeto = {}
    
        objeto.idade = Number(prompt("Digite sua idade:"));
        objeto.sexo = prompt("Digite seu sexo (M ou F)");
        objeto.renda = Number(prompt("Informe sua renda familiar:"));
        objeto.filhos = Number(prompt("Informe a quantidade de filhos:"));
        vet.push(objeto);
    }
    var salario = vet[0].renda
    var menorIda = vet[0].idade
    var maiorIda = vet[0].idade
    var mulheres = 0
    for(var i=0;i<vet.length;i++){
        salario = salario+vet[i].renda
        media = salario/vet.length
        if((vet[i].sexo=="F")&&(vet[i].filhos>2)){
            mulheres = mulheres+1
        }
        if(menorIda<vet[i].idade){
            menorIda = vet[i].idade
        }
        if (maiorIda>vet[i].idade){
            maiorIda = vet[i].idade
        }
    }
    alert("Media do salario"+media)
    alert("Qtd mulheres"+mulheres)
    alert("Maior idade"+maiorIda/vet.length+"Menor idade"+menorIda/vet.length)
}

function funcao1(){
    var vet = []

    for(var i=0;i<vet.length;i++){
        var objeto = {}

        objeto.codigo = Number(prompt("Digite seu codigo: "));
        objeto.vendas = Number(prompt("Numero de vendas: "));
        objeto.mes = Number(prompt("Mes: "));
    }
}

function funcao5(){
    var vet = []

    for(var i=0;i<5;i++){
        var objeto = {}

        objeto.codigo = Number(prompt("Código"));
        objeto.descricao = prompt("Descricao");
        objeto.valor = Number(prompt("Preço"));
        objeto.quantidade = Number(prompt("Qtde"));

        for(var j=0;j<vet.length;j++){
            if(objeto.codigo < vet[j].codigo){
                vet.splice(j, 0, objeto);
                alert("Adicionado com sucesso!");
                break;
            }
        }
        if(j == vet.length){
            vet.push(objeto);
            alert("Adicionado com sucesso!");            
        }
    }
    // permitir a alteracao dos valores
    var cod = prompt("Informe o codigo do produto que deseja alterar")
    for(var i=0;i<5;i++){
        if(cod == vet[i].codigo){
        objeto.descricao = prompt("Descricao");
        objeto.valor = Number(prompt("Preço"));
        objeto.quantidade = Number(prompt("Qtde"));
        break;
        }
        if(i==5){
            alert("Produto não existe")
        }
    }
    for(var i=0;i<vet.length;i++){
        alert(vet[i].codigo + " " + vet[i].descricao + " "+vet[i].valor+" "+vet[i].quantidade);
    }
}