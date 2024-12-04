const fraseAPI = "https://api.quotable.io/random";
const traducaoAPI = "https://api.mymemory.translated.net/get?q={texto}&langpair=en|pt";

// Função para obter a frase e traduzir
async function obterFrase() {
    try {
        // 1. Obter frase da API Quotable
        const response = await fetch(fraseAPI);
        if (!response.ok) {
            throw new Error("Erro ao acessar a API de frases");
        }
        const data = await response.json();
        const fraseEmIngles = data.content;
        const autor = data.author;

        // 2. Traduzir a frase para português
        const urlTraduzir = traducaoAPI.replace("{texto}", encodeURIComponent(fraseEmIngles));
        const traducaoResponse = await fetch(urlTraduzir);
        if (!traducaoResponse.ok) {
            throw new Error("Erro ao acessar a API de tradução");
        }
        const traducaoData = await traducaoResponse.json();
        const fraseEmPortugues = traducaoData.responseData.translatedText;

        // 3. Exibir a frase traduzida com o autor
        document.getElementById("frase").innerHTML = `"${fraseEmPortugues}"<br><br>- ${autor}`;
    } catch (error) {
        console.error("Erro:", error);
        document.getElementById("frase").innerText = "Não foi possível carregar a frase. Tente novamente mais tarde.";
    }
}

// Chama a função ao carregar a página
obterFrase();