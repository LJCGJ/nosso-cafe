
document.querySelectorAll('.adicionar').forEach(button => {
    button.addEventListener('click', () => {
        const produto = button.parentElement;
        const nome = produto.querySelector('h2').innerText;
        const preco = parseFloat(produto.getAttribute('data-preco'));

        adicionarAoCarrinho(nome, preco);
    });
});


const carrinho = [];
const listaCarrinho = document.getElementById('lista-carrinho');
const totalDisplay = document.getElementById('total');


function adicionarAoCarrinho(nome, preco) {
    carrinho.push({ nome, preco });
    atualizarCarrinho();
}


function atualizarCarrinho() {
    listaCarrinho.innerHTML = ''; 
    let total = 0; 

    
    carrinho.forEach(item => {
        const li = document.createElement('li');
        li.innerText = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
        listaCarrinho.appendChild(li);
        total += item.preco; 
    });

    totalDisplay.innerText = `Total: R$ ${total.toFixed(2)}`; 
}

document.getElementById('finalizar').addEventListener('click', () => {
    if (carrinho.length > 0) {
        
        const total = carrinho.reduce((acc, item) => acc + item.preco, 0).toFixed(2);
        alert(`Compra finalizada! Total: R$ ${total}`);
        
        carrinho.length = 0; 
        atualizarCarrinho(); 
    } else {
        alert("O carrinho está vazio!");
    }
});



