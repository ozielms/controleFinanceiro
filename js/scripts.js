function cadPessoa(cartao, descricao, valorCompra, numParcelas, totalParcelado) {
    var tabela = document.getElementById("tbGastos");/* Pegar a table */ 
    var qtdLinhas = tabela.rows.length; /* Ver quantas linhas tem a tabela */
    var linha = tabela.insertRow(qtdLinhas); /* Inserir uma linha */

    var tabelaTotal = document.getElementById("tbTotal");

    /* Inserir colunas na tabela */
    var cellCodigo = linha.insertCell(0);
    var cellcartao = linha.insertCell(1);
    var cellDescricao = linha.insertCell(2);
    var cellValorCompra = linha.insertCell(3);
    var cellNumParcelas = linha.insertCell(4);
    var cellValorDaParcela = linha.insertCell(5);
    var cellTotalParcelato = 

    cellCodigo.innerHTML = qtdLinhas;
    cellcartao.innerHTML = cartao;
    cellDescricao.innerHTML = descricao;
    cellValorCompra.innerHTML = valorCompra;
    cellNumParcelas.innerHTML = numParcelas;
    cellValorDaParcela.innerHTML = valorCompra / numParcelas;

    calcularResultado();
    
}

function calcularResultado() {
    var numCapturado = document.querySelector("#total").value;
    var soma = parseInt(soma) + parseInt(numCapturado);
    document.querySelector("#total").innerHTML = soma;
}