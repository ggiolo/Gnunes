function funcao() {

    var vet = [];
    var objeto = {};
    var qtd = 0;

    for (var i = 0; i < 5; i++) {
        objeto.codigo = Number(prompt("Informe o codigo: "));
        objeto.nome = prompt("Informe o nome: ");
        objeto.qtde = Number(prompt("Informe qtde: "));
        objeto.preco = Number(prompt("Informe o preco: "));
        vet.push(objeto);

        alert("Produto criado com sucesso !");
    }

    for (i = 0; i < 5; i++) {
        qtde = qtd + objeto[i].qtde;
    }
    alert("Qtde em estoque" + qtd);
}
