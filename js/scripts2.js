function cadCompra() {

    cartao = document.getElementById("cartao").value;
    descricao = document.getElementById("descricao").value;
    valor = document.getElementById("valor").value;
    parcelas = document.getElementById("parcelas").value;
    valorParcela = valor / parcelas;

    tr = document.createElement("tr");

    tr.innerHTML = `
    <td>${cartao}</td>
    <td>${descricao}</td>
    <td>${valor}</td>
    <td>${parcelas}</td>
    <td class="parcelaItem">${valorParcela}</td>
    `;

    document.getElementById("tabelaCompras").appendChild(tr);
    somaPontos();
}

function somaPontos() {
    acumulado = 0;
    var capturaPontos = document.querySelectorAll(".parcelaItem");
    for (celula of capturaPontos) {

        acumulado = acumulado + celula.innerText * 1;

    }

    document.getElementsByClassName("celTotal")[0].innerText = acumulado;

}

function somaPontos() {
    var capturaPontos = document.querySelectorAll(".parcelaItem");
    var pontos = capturaPontos.textContent;
}

var pontosAcumulados = document.querySelector(".pontos-acumulados");
pontosAcumulados.textContent = somaPontos;

var pacientes = document.querySelectorAll("#tbTotal");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdImc = paciente.querySelector(".parcelaItem");

}