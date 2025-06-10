const apiKey = 'c3aaa20a34009a0555cf125c9eb8a13f';


const inputCidade = document.getElementById("input-cidade");
const botaoPesquisa = document.getElementById("botao-pesquisa");
const nomeCidade = document.getElementById("nome-cidade");
const temperatura = document.getElementById('temperatura');
const tempo = document.getElementById('tempo');
const imagemTempo = document.getElementById('imagem-tempo');
const porcentagemChuva = document.getElementById("porcentagem-chuva");
const umidade = document.getElementById("umidade");
const vento = document.getElementById("vento");

botaoPesquisa.addEventListener("click", async function (event) { // ele cria um evento assim que houver um click no botão "pesquisar".
    event.preventDefault(); // para previnir que o formulário recarrege.

    const cidade = inputCidade.value; //faz com que essa variável receba apenas o valor que está dentro da variavel inputCidade, e o trim, faz ele tirar os espaços.

    if (cidade.trim() === "") {
        alert("Por favor, digite uma cidade!");
        return
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric&lang=pt_br`;

    try {
        const resposta = await fetch(url);
        if (!resposta.ok) throw new Error("Cidade não encontrada");

        const dados = await resposta.json();

        nomeCidade.textContent = `${dados.name}, ${dados.sys.country}`;
        temperatura.textContent = `${Math.round(dados.main.temp)}°C`;
        tempo.textContent = dados.weather[0].description;
        imagemTempo.src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}@2x.png`;
        imagemTempo.alt = dados.weather[0].description;

        porcentagemChuva.textContent = "Chance de chuva: —";
        umidade.textContent = `Umidade: ${dados.main.humidity}%`;
        vento.textContent = `Vento: ${Math.round(dados.wind.speed * 3.6)} km/h`;

    } catch (erro) {
        alert("Erro ao buscar dados. Verifique o nome da cidade.");
        nomeCidade.textContent = "";
        temperatura.textContent = "";
        tempo.textContent = "";
        imagemTempo.src = "images/Ensolarado.png";
        porcentagemChuva.textContent = "";
        umidade.textContent = "";
        vento.textContent = "";
    }

    inputCidade.value = "";
});