function cadContas(cartao, descricao, valorCompra, dataEntrada, numParcelas) {
  var tb = document.getElementById("gastosJan"); /* Pegar a table */
  var qtdLinhas = tb.rows.length; /* Ver quantas linhas tem a tabela */
  var linha = tb.insertRow(qtdLinhas); /* Inserir uma linha */

  /* Extrair dia e mês da data */
  let data = new Date(dataEntrada);

  var mes = data.toLocaleString("default", { month: "long" });
  var dia = data.getUTCDate();

  var mesTabela = "";
  var contMes = 0;
  var mesTotal = "";

  switch (mes) {
    case "janeiro":
      mesTabela = "gastosJan";
      mesTotal = "#celTotalJan";
      contMes = 1;
      break;
    case "fevereiro":
      mesTabela = "gastosFev";
      mesTotal = "#celTotalFev";
      contMes = 2;
      break;
    case "março":
      mesTabela = "gastosMar";
      mesTotal = "#celTotalMar";
      contMes = 3;
      break;
    case "abril":
      mesTabela = "gastosAbr";
      mesTotal = "#celTotalAbr";
      contMes = 4;
      break;
    case "maio":
      mesTabela = "gastosMai";
      mesTotal = "#celTotalMai";
      contMes = 5;
      break;
    case "junho":
      mesTabela = "gastosJun";
      mesTotal = "#celTotalJun";
      contMes = 6;
      break;
    case "julho":
      mesTabela = "gastosJul";
      mesTotal = "#celTotalJul";
      contMes = 7;
      break;
    case "agosto":
      mesTabela = "gastosAgo";
      mesTotal = "#celTotalAgo";
      contMes = 8;
      break;
    case "setembro":
      mesTabela = "gastosSet";
      mesTotal = "#celTotalSet";
      contMes = 9;
      break;
    case "outubro":
      mesTabela = "gastosOut";
      mesTotal = "#celTotalOut";
      contMes = 10;
      break;
    case "novembro":
      mesTabela = "gastosNov";
      mesTotal = "#celTotalNov";
      contMes = 11;
      break;
    case "dezembro":
      mesTabela = "gastosDez";
      mesTotal = "#celTotalDez";
      contMes = 12;
      break;
    default:
      alert("Mês inválido");
      break;
  }

  // FUNÇÃO INSERIR DADOS NA TABELA -------------------------------

  var inserirConteudoCell = function (
    qtdLinhas,
    nomeCartao,
    descricaoCartao,
    valorDaCompra,
    dia,
    numeroDeParcelas,
    mesTabela,
    contMes
  ) {
    var cont = 0;
    while (cont < numeroDeParcelas) {
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

      var valorParcela =
        parseFloat(valorDaCompra) / parseFloat(numeroDeParcelas);

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
      cont++;
      contMes++;

      // Contador para avançar os meses conforme número de parcela
      switch (contMes) {
        case 1:
          mesTabela = "gastosJan";
          mesTotal = "#celTotalJan";
          break;
        case 2:
          mesTabela = "gastosFev";
          mesTotal = "#celTotalFev";
          break;
        case 3:
          mesTabela = "gastosMar";
          mesTotal = "#celTotalMar";
          break;
        case 4:
          mesTabela = "gastosAbr";
          mesTotal = "#celTotalAbr";
          break;
        case 5:
          mesTabela = "gastosMai";
          mesTotal = "#celTotalMai";
          break;
        case 6:
          mesTabela = "gastosJun";
          mesTotal = "#celTotalJun";
          break;
        case 7:
          mesTabela = "gastosJul";
          mesTotal = "#celTotalJul";
          break;
        case 8:
          mesTabela = "gastosAgo";
          mesTotal = "#celTotalAgo";
          break;
        case 9:
          mesTabela = "gastosSet";
          mesTotal = "#celTotalSet";
          break;
        case 10:
          mesTabela = "gastosOut";
          mesTotal = "#celTotalOut";
          break;
        case 11:
          mesTabela = "gastosNov";
          mesTotal = "#celTotalNov";
          break;
        case 12:
          mesTabela = "gastosDez";
          mesTotal = "#celTotalDez";
          break;
      }

      if (contMes > 12) {
        alert(
          "A(s) próxima(s) " +
            (numeroDeParcelas - cont) +
            " parcela(s) ficará(ão) para o próximo ano!"
        );
        break;
      }
    }
  };

  // FUNÇÃO RESETAR TABELA --------------------------------------------

  function resetar() {
    document.getElementById("formCaptura").reset();
  }



  inserirConteudoCell(qtdLinhas, cartao, descricao, valorCompra, dia, numParcelas, mesTabela, contMes);
  resetar();
}
 /*Não FUNCIONA AINDA*/
function retornarNome(nome) {
  var nomeRetorno = document.getElementById("uname");
  var boasVindas = document.getElementById("nomeUsuario");

  boasVindas.innerText = boasVindas.value + nomeRetorno.value;


}
