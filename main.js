function criarCartao(categoria, pergunta, resposta) {
    let container = document.getElementById('container');
    let cartao = document.createElement('article');
    cartao.className = 'cartao';
    cartao.respostaEstaVisivel = false;  // Define a propriedade no cartão

    cartao.innerHTML = `
        <div class="conteudo-cartao">
            <h3>${categoria}</h3>
            <div class="pergunta-cartao">
                <p>${pergunta}</p>
            </div>
        </div>
        <div class="resposta-cartao">
            <p>${resposta}</p>
        </div>
    `;a

    function viracartao() {
        cartao.respostaEstaVisivel = !cartao.respostaEstaVisivel;
        cartao.classList.toggle('active', cartao.respostaEstaVisivel);
    }

    cartao.addEventListener('click', viracartao);
    container.appendChild(cartao);
}