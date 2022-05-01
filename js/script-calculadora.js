function calc(e) {

    var operacao = e.value;


    var n1 = parseFloat(document.getElementById("n1").value);
    var n2 = parseFloat(document.getElementById("n2").value);

    var calculo = eval(n1 + operacao + n2);

    if (!isNaN(calculo)) {
        alert(calculo);
    }

}

function ola(x) {
    var f = document.getElementById("frm");
    var txt = f.txtnome;
    txt.value = "Ola " + txt.value;
}

function limpar() {
    //alert("1");
    var f = document.getElementById("frm");
    var n1 = f.n1;
    var n2 = f.n2;
    var txt = f.txtnome;
    n1.value = "";
    n2.value = "";
    txt.value = "";
}