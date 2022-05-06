function cadContas(cartao, descricao, valorCompra, dataEntrada, numParcelas) {
  var tb = document.getElementById('tbGastos'); /* Pegar a table */
  var qtdLinhas = tb.rows.length; /* Ver quantas linhas tem a tabela */
  var linha = tb.insertRow(qtdLinhas); /* Inserir uma linha */

  /* Extrair dia e mês da data */
  var data = new Date(dataEntrada);
  console.log(data);
  var mes = data.toLocaleString('default', { month: 'long' });
  var dia = data.getUTCDate();
  
  /* Inserir colunas na tabela */
  var cellCodigo = linha.insertCell(0);
  var cellDia = linha.insertCell(1);
  var cellcartao = linha.insertCell(2);
  var cellDescricao = linha.insertCell(3);
  var cellValorCompra = linha.insertCell(4);
  var cellNumParcelas = linha.insertCell(5);
  var cellValorDaParcela = linha.insertCell(6);

  valorParcela = parseFloat(valorCompra) / parseFloat(numParcelas);

  /* Inserir dados no HTML */
  cellCodigo.innerHTML = qtdLinhas;
  cellDia.innerHTML = dia;
  cellcartao.innerHTML = cartao;
  cellDescricao.innerHTML = descricao;
  cellValorCompra.innerHTML = parseFloat(valorCompra).toFixed(2);
  cellNumParcelas.innerHTML = numParcelas;
  cellValorDaParcela.innerHTML = valorParcela.toFixed(2);

  /* CAPTURAR VALOR DO TOTAL E DEVOLVER SOMADO*/
  var f = document.querySelector('.celTotalJan');
  var capturado = f.value;
  if (capturado == '') {
    capturado = 0;
  }
  var temp = parseFloat(capturado) + parseFloat(valorParcela);
  f.value = temp.toFixed(2);
}
