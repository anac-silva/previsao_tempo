const nomeCidade = document.getElementById("input-cidade");
const botaoPesquisa = document.getElementById("botao-pesquisa");
const cidade = document.getElementById("nome-cidade");

function VerificarCidade(event) {
    event.preventDefault();

    if (nomeCidade.value === "") {
        alert("Por favor, digite uma cidade!");
        return
    }

    cidade.innerText = nomeCidade.value;

    cidade.value="";

}

botaoPesquisa.addEventListener("click", VerificarCidade);

