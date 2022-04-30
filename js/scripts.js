var soma = parseFloat(0);
function cadPessoa(cartao, descricao, valorCompra, numParcelas) {
    var tabela = document.getElementById("tbGastos");/* Pegar a table */
    var qtdLinhas = tabela.rows.length; /* Ver quantas linhas tem a tabela */
    var linha = tabela.insertRow(qtdLinhas); /* Inserir uma linha */

    /* Inserir colunas na tabela */
    var cellCodigo = linha.insertCell(0);
    var cellcartao = linha.insertCell(1);
    var cellDescricao = linha.insertCell(2);
    var cellValorCompra = linha.insertCell(3);
    var cellNumParcelas = linha.insertCell(4);
    var cellValorDaParcela = linha.insertCell(5);

    /* Inserir dados no HTML */
    cellCodigo.innerHTML = qtdLinhas;
    cellcartao.innerHTML = cartao;
    cellDescricao.innerHTML = descricao;
    cellValorCompra.innerHTML = valorCompra;
    cellNumParcelas.innerHTML = numParcelas;
    cellValorDaParcela.innerHTML = parseFloat(valorCompra) / parseFloat(numParcelas);

    console.log("Soma: " + soma); //0
    /*soma = parseFloat(soma) + parseFloat(cellValorDaParcela);
    console.log("Soma: " + soma.value); //NaN*/
    soma = parseFloat(soma) + cellValorDaParcela;
    console.log("Soma: " + soma.value); //undefined
    soma = parseFloat(soma);
    console.log("Soma: " + soma); //NaN

    
    /* ----------------------------------------------------- */

    




}

//function soma() {
//    var tabela = document.getElementById("tbGastos");/* Pegar a table */
//    var qtdLinhas = tabela.rows.length; /* Ver quantas linhas tem a tabela */
//    var total = document.getElementById("tbTotal");
//    var novoValor = document.getElementById("txtDescricao");
//
//
//    for (var i = 0; i < qtdLinhas; i++) {
//        total.value = total.value + novoValor;
//    }
//    console.log(total.value);
//    return total.value;
//}


