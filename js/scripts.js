



function cadContas(cartao, descricao, valorCompra, numParcelas, x) {
    var tb = document.getElementById("tbGastos");/* Pegar a table */
    var qtdLinhas = tb.rows.length; /* Ver quantas linhas tem a tabela */
    var linha = tb.insertRow(qtdLinhas); /* Inserir uma linha */

    /* Inserir colunas na tabela */
    var cellCodigo = linha.insertCell(0);
    var cellcartao = linha.insertCell(1);
    var cellDescricao = linha.insertCell(2);
    var cellValorCompra = linha.insertCell(3);
    var cellNumParcelas = linha.insertCell(4);
    var cellValorDaParcela = linha.insertCell(5);

    valorParcela = parseFloat(valorCompra) / parseFloat(numParcelas);

    /* Inserir dados no HTML */
    cellCodigo.innerHTML = qtdLinhas;
    cellcartao.innerHTML = cartao;
    cellDescricao.innerHTML = descricao;
    cellValorCompra.innerHTML = valorCompra;
    cellNumParcelas.innerHTML = numParcelas;
    cellValorDaParcela.innerHTML = valorParcela;


    /* CAPTURAR VALOR DO TOTAL */

    console.log("1. Valor da Parcela: " + valorParcela);
    console.log("2. Número de linhas: " + qtdLinhas);

    var f = document.querySelector(".celTotal");
    var capturado = f.value;

    console.log("3. Capturado: " + capturado);

    var temp = parseFloat(capturado) + parseFloat(valorParcela);

    
    console.log("4. Capturado: " + capturado);
    capturado.value = temp;
    console.log("4. Capturado: " + capturado);
    console.log("--------------------------------------------------------");

}