function funcao() {

    var mensagem = "Digite  uma opcao\n" +

        "1-Cadastrar vendedor\n" +

        "2-Cadastrar venda\n" +

        "3-Consultar vendas mensais de um funcionario\n" +

        "4-Consultar o total de vendas de vendedor\n" +

        "5-Mostrar o numero do vendedor que mais vendeu em um mes\n" +

        "6-Mostrar o numero do mes com mais vendas\n" +

        "7-Sair";



    var opcao;

    var venda = []; var vendedor = [];

    do {

        opcao = Number(prompt(mensagem))

        switch (opcao) {

            case 1: cadastrarVendedor(vendedor)

                break;

            case 2: cadastrarVendas(vendedor, venda)
                break;

            case 3: consultaVendas(venda)
                break;

            case 4: consultaTotalVendas(venda, vendedor)

                break;

            case 5: calculaMaisVendeu(venda)

                break;

            case 6: calculaMesMaisVendeu(venda)

                break;

            case 7: alert("Obrigado ! o programa encerrou"); break;

            default: alert("Opcao Invalida");

        }

    }

    while (opcao != 7);
}
function cadastrarVendedor(vendedor) {

    var obj = {};

    obj.codigo = Number(prompt("Informe o codigo"))

    obj.nome = prompt("Nome:")

    vendedor.push(obj)

}
function cadastrarVendas(vendedor, venda) {
    var obj = {};
    var cola = colar(vendedor)
    obj.codigo = Number(prompt("Informe o codigo\n" + cola))

    obj.valor = Number(prompt("Valor:"))

    obj.mes = Number(prompt("Mes:"))

    venda.push(obj)

}
function consultaVendas(venda) {
    var cola = colar(vendedor)

    var cod = Number(prompt("Informe o codigo\n" + cola))

    var mes = Number(prompt("Digite o mes"))

    for (var i = 0; i < venda.length; i++) {

        if ((venda[i].codigo == cod) && (venda[i].mes == mes)) {

            alert(venda[i].venda)
            break;

        }
    }

    if (i == venda.length) {

        //não encontrado

        alert("venda inexistente")
    }
}
function consultaTotalVendas(venda, vendedor) {
    var cola = colar(vendedor)
    
    var cod = Number(prompt("Codigo" + "\n" + cola))

    var soma = 0;

    for (var i = 0; i < venda.length; i++) {

        if (venda[i].codigo == cod) {

            soma = soma + vendas[i].valor;

        }

    }

    alert("A soma das vendas:" + soma);

}
function calculaMaisVendeu(venda) {

    var auxvende = 0;

    var auxvalor = 0;

    var nmes = Number(prompt("Informe o mes que deseja verificar"));



    for (var i = 0; i < vet.length; i++) {

        if ((nmes == venda[i].mes) && (auxvalor <= venda[i].valor)) {

            auxvalor = venda[i].valor;

            auxvende = venda[i].codigo;

        }
    }
    alert("Vendedor que mais vendeu no mes" + "\n" + auxvende + "\n" + auxvalor + "\n" + nmes);


}
function calculaMesMaisVendeu(venda) {

    var meses = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

    for (var i = 0; i < vet.length; i++) {

        meses[venda[i].mes = 1] = meses[venda[i].mes - 1] + venda[i].valor;

    }
    var maior = 0; var maisMaior = 0;

    for (var i = 0; i < meses.length; i++) {

        if (meses[i] > maior) {

            maior = meses[i];

            maisMaior = i + 1;
        }
    }
    alert(maisMaior)
}

function colar(vendedor) {
    var cola = "";

    for (var i = 0; i < vendedor.length; i++) {

        cola = cola + vendedor[i].codigo + "--" + vendedor[i].nome + "\n"
    }
    return cola
}