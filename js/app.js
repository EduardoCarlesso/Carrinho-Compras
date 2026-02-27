function adicionar(){
    let produto = document.getElementById("produto").value;
    let nomeProduto = produto.split("-")[0];
    let valorIndividual = produto.split("R$")[1];
    let quantidade = document.getElementById("quantidade").value;
    if(quantidade <= 0){
        alert("Quantidade de produtos inválida! Deve ser adicionada no mínimo uma unidade");
    }else{
        let valorParcial = valorItens(valorIndividual, quantidade);
        exibir(valorParcial, nomeProduto, quantidade);
    }
}

function limpar(){
    let escolhaProduto = document.getElementsByClassName("produto-input");
    let quantidade = document.getElementById("quantidade").value;
    let carrinho = document.getElementById("lista-produtos");
    let total = document.getElementById("valor-total");
    escolhaProduto.innerText = "";
    quantidade.inner = ""
    carrinho.innerHTML = "";
    total.innerHTML = "0";
}

function valorItens(valor, qtd){
    let parcial = parseInt(valor * qtd);
    return parcial;
}

function exibir(valorParcial, nomeProduto, quantidade){
    let total = parseInt(document.getElementById("valor-total").innerText);
    let exibeTotal = document.getElementById("valor-total");
    let carrinho = document.getElementById("lista-produtos");
    let valorCarrinho = total + valorParcial;
    exibeTotal.innerText = valorCarrinho;
    carrinho.innerHTML += ` <section class="carrinho__produtos__produto"> <span class="texto-azul">${quantidade}x</span> ${nomeProduto}<span class="texto-azul">R$${valorParcial}</span> </section>`;
}
