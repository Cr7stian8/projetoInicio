document.addEventListener('DOMContentLoaded', function () {
    const trilha = document.querySelector('.trilha-carrossel');
    const imagens = document.querySelectorAll('.trilha-carrossel img');

    let indice = 0;

    setInterval(() => {
        indice = (indice + 1) % imagens.length;
        const valorDeTranslacao = -indice * 100 + '%';
        trilha.style.transform = 'translateX(' + valorDeTranslacao + ')';
    }, 4000); // Muda a imagem a cada 3 segundos (ajuste conforme necessário)
});
