



function cadContas(cartao, descricao, valorCompra, numParcelas) {
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
    
    var f = document.querySelector("#frm");
    var capturado = f.celTotal.value;
    if (capturado == NaN) {
        capturado = 0;
    }
    
    console.log("3. Capturado: " + capturado);
    
    var soma = 0;
    console.log("4. Soma: " + soma);
    soma =+ parseFloat(valorParcela);
    console.log("5. Soma: " + soma);

    console.log("6. Soma após somar: " + parseFloat(soma));

    capturado = soma;
    console.log("7. Capturado: "+capturado);
    capturado.innerHTML = cartao;
    console.log("--------------------------------------------------------");

}