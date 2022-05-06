function cadContas(cartao, descricao, valorCompra, dataEntrada, numParcelas) {
  
  
  
  
  var tb = document.getElementById("gastosJan"); /* Pegar a table */
  var qtdLinhas = tb.rows.length; /* Ver quantas linhas tem a tabela */
  var linha = tb.insertRow(qtdLinhas); /* Inserir uma linha */

  /* Extrair dia e mês da data */
  var data = new Date(dataEntrada);
  console.log(data);
  var mes = data.toLocaleString("default", { month: "long" });
  var dia = data.getUTCDate();

  var mesTabela = "";
  
  switch(mes) {
    case 'janeiro': mesTabela = "gastosJan"; break;
    case 'fevereiro': mesTabela = "gastosFev"; break;
    case 'março': mesTabela = "gastosMar"; break;
    case 'abril': mesTabela = "gastosAbr"; break;
    case 'maio': mesTabela = "gastosMai"; break;
    case 'junho': mesTabela = "gastosJun"; break;
    case 'julho': mesTabela = "gastosJul"; break;
    case 'agosto': mesTabela = "gastosAgo"; break;
    case 'setembro': mesTabela = "gastosSet"; break;
    case 'outubro': mesTabela = "gastosOut"; break;
    case 'novembro': mesTabela = "gastosNov"; break;
    case 'dezembro': mesTabela = "gastosDez"; break;
    default: alert("Mês inválido"); break;
  }
  console.log(mesTabela);

  // FUNÇÃO INSERIR DADOS NA TABELA -------------------------------

  var inserirConteudoCell = function (
    qtdLinhas,
    nomeCartao,
    descricaoCartao,
    valorDaCompra,
    dia,
    numeroDeParcelas,
    mesTabela
  ) {
    var tb = document.getElementById(mesTabela); /* Pegar a table */
    var qtdLinhas = tb.rows.length; /* Ver quantas linhas tem a tabela */
    var linha = tb.insertRow(qtdLinhas); /* Inserir uma linha */

    // Inserir colunas na tabela
    var cellCodigo = linha.insertCell(0);
    var cellDia = linha.insertCell(1);
    var cellcartao = linha.insertCell(2);
    var cellDescricao = linha.insertCell(3);
    var cellValorCompra = linha.insertCell(4);
    var cellNumParcelas = linha.insertCell(5);
    var cellValorDaParcela = linha.insertCell(6);

    var valorParcela = parseFloat(valorDaCompra) / parseFloat(numeroDeParcelas);
    console.log(valorParcela);

    // Inserir dados no HTML
    cellCodigo.innerHTML = qtdLinhas;
    cellDia.innerHTML = dia;
    cellcartao.innerHTML = nomeCartao;
    cellDescricao.innerHTML = descricaoCartao;
    cellValorCompra.innerHTML = parseFloat(valorDaCompra).toFixed(2);
    cellNumParcelas.innerHTML = numParcelas;
    cellValorDaParcela.innerHTML = parseFloat(valorParcela).toFixed(2);

    // CAPTURAR VALOR DO TOTAL E DEVOLVER SOMADO
    var f = document.querySelector(".celTotalJan");
    var capturado = f.value;
    if (capturado == "") {
      capturado = 0;
    }
    var temp = parseFloat(capturado) + parseFloat(valorParcela);
    f.value = temp.toFixed(2);
  };

  // FIM FUNÇÃO INSERIR DADOS NA TABELA -------------------------------

  inserirConteudoCell(
    qtdLinhas,
    cartao,
    descricao,
    valorCompra,
    dia,
    numParcelas,
    mesTabela
  );
  /*
  // Inserir colunas na tabela

  var cellCodigo = linha.insertCell(0);
  var cellDia = linha.insertCell(1);
  var cellcartao = linha.insertCell(2);
  var cellDescricao = linha.insertCell(3);
  var cellValorCompra = linha.insertCell(4);
  var cellNumParcelas = linha.insertCell(5);
  var cellValorDaParcela = linha.insertCell(6);

  valorParcela = parseFloat(valorCompra) / parseFloat(numParcelas);

  // Inserir dados no HTML
  cellCodigo.innerHTML = qtdLinhas;
  cellDia.innerHTML = dia;
  cellcartao.innerHTML = cartao;
  cellDescricao.innerHTML = descricao;
  cellValorCompra.innerHTML = parseFloat(valorCompra).toFixed(2);
  cellNumParcelas.innerHTML = numParcelas;
  cellValorDaParcela.innerHTML = valorParcela.toFixed(2);

  // CAPTURAR VALOR DO TOTAL E DEVOLVER SOMADO
  var f = document.querySelector('.celTotalJan');
  var capturado = f.value;
  if (capturado == '') {
    capturado = 0;
  }
  var temp = parseFloat(capturado) + parseFloat(valorParcela);
  f.value = temp.toFixed(2);
  */
}
