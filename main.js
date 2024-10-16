function criaCartao(categoria, pergunta, resposta){
    let container = document.getElementById('container');
    let cartao = document.createElement('article');
    cartao.className = 'Cartao';
cartao.innerHTML = `
<div class="conteudo-Cartao">
    <h3>categoria</h3>
<div class ="pergunta-Cartao">
<p>pergunta</p>
</div>
    <div class = "resposta-Cartao">
        <p>resposta</p>
    </div>
</div>
container.appendChlld(cartao);
}