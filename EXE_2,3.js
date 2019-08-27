function funcao(){
    var vet = [];
    var vetob = {};

    for (var i=0;i<20;i++){
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