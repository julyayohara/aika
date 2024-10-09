function criaCartao(categoria, pergunta, resposta){
    let container = document.getElementById('container');
    let cartão = document.createElement('article');
    cartão.className = 'cartão'
    cartão.innerHTML =
    <div class="conteudo-cartão">
    <h3>categoria</h3>
<div class="pergunta-cartão">
<p>pergunta</p>
</div>
    <div class="resposta-cartõ">
        <p>resposta</p>
    </div>
</div>