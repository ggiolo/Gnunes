function ex3(){
    let codigos=[]; let estoque=[];
    let i;

    for(i=0; i<10; i++){
        codigos.push(Number(prompt("Digite o codigo do produto: ")));
        estoque.push(Number(prompt("Digite a quantidade do produto: ")));
    }
    let cliente = Number(prompt("Digite o codigo do cliente: "));

    while(cliente!=0){
        let codprod = Number(prompt("Codigo do produto: "));
        let qtdprod = Number(prompt("Quantidade do produto: "));
        let auxposicao = codigos.indexOf(codprod);

        if(auxposicao == -1){
            alert("Produto inexistente")
        }
        else{
            if(estoque[auxposicao]-qtdprod >=0){
                estoque[auxposicao] = estoque[auxposicao] - qtdprod;
                alert("Produto comprado com sucesso");
            }
            else{
                alert("Nao tem no estoque")
            }
        }
        cliente = Number(prompt("Digite o codigo do cliente novamente,digite 0 para parar : "));
    }
    alert("Estoque Atualizado: "+"\n"+"Produto:"+codigos+"\n"+"Quantidade"+estoque)
}

function ex5(){
    var vet1=[15], vet2=[10];
    var i;

    for(i=0;i<15;i++){
        vet1.push(Number(prompt("Digite o numero do aluno (Logica):")));
    }

    for(i=0;i<10;i++){
        vet2.push(Number(prompt("Digite o numero do aluno (Linguagem de Programacao):")));
    }

    alert("Matriculas(Logica)"+" - "+vet1+"  "+"Matriculas(Linguagem de Programacao)"+" - "+vet2)


}

function ex6(){
    let vet1=[];let vet2=[];let vet3=[];
    let i;

    for(i=0; i<vet3.length; i++){
        vet1.push(Number(prompt("Digite o numero de vendas: ")));
        vet2.push(Number(prompt("Digite sua comissão:")));
        vet3.push(prompt("Digite seu nome:"));
    }



}