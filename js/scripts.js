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
  var mesTotal = "";
  
  switch(mes) {
    case 'janeiro': mesTabela = "gastosJan"; mesTotal = "#celTotalJan"; break;
    case 'fevereiro': mesTabela = "gastosFev"; mesTotal = "#celTotalFev"; break;
    case 'março': mesTabela = "gastosMar"; mesTotal = "#celTotalMar"; break;
    case 'abril': mesTabela = "gastosAbr"; mesTotal = "#celTotalAbr"; break;
    case 'maio': mesTabela = "gastosMai"; mesTotal = "#celTotalMai"; break;
    case 'junho': mesTabela = "gastosJun"; mesTotal = "#celTotalJun"; break;
    case 'julho': mesTabela = "gastosJul"; mesTotal = "#celTotalJul"; break;
    case 'agosto': mesTabela = "gastosAgo"; mesTotal = "#celTotalAgo"; break;
    case 'setembro': mesTabela = "gastosSet"; mesTotal = "#celTotalSet"; break;
    case 'outubro': mesTabela = "gastosOut"; mesTotal = "#celTotalOut"; break;
    case 'novembro': mesTabela = "gastosNov"; mesTotal = "#celTotalNov"; break;
    case 'dezembro': mesTabela = "gastosDez"; mesTotal = "#celTotalDez"; break;
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
    var f = document.querySelector(mesTotal);
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
