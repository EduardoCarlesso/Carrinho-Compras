function adicionar(){
    let produto = document.getElementById("produto").value;
    let nomeProduto = produto.split("-", 2);
    //console.log(produto.value);
    let quantidade = document.getElementById("quantidade").value;
    let valorTotal = calcularTotal(nomeProduto[1], quantidade);
    //console.log("n" + nomeProduto[0]);
    let total = document.getElementById("valor-total");
    total.innerHTML = valorTotal;
    exibir(valorTotal, nomeProduto);
}

function limpar(){
    let carrinho = document.getElementById("lista-produtos");
    carrinho.innerHTML = "";
    let total = document.getElementById("valor-total");
    total.innerText = "";
}

function calcularTotal(item, qtd){
    let valor = item.split("$", 2);
    console.log(valor);
    console.log("q:" + qtd);
    console.log("V" + valor[1]);
    let total = parseInt(valor[1] * qtd);
    console.log(total);
    return total;
}

