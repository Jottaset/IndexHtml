function dizOla(){
    var nome = document.getElementById("nomeUsuario").value;
    var sobrenome = document.getElementById("sobrenomeUsuario").value;
    var idade = document.getElementById("idadeUsuario").value;
    //alert("ola, seja bem vindo " + nome + " " + sobrenome + " Idade: " + idade + " anos");
    var tudo = (nome + " " + sobrenome + " " + idade + " anos");
    document.getElementById("content").value = tudo;
}
function mostraMsg(){
    alert("testando...");
}