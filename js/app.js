function limpar(){
    document.getElementById('lista-produtos').innerHTML = '';
    let total = document.getElementById('valor-total');
    total.textContent = `R$ ${0}`;
}

function adicionar() {
    let productList = document.getElementById('lista-produtos');
    let product = document.getElementById('produto').value;
    let productName = product.split('-')[0];
    let productValue = parseInt(product.split('$')[1]);

    if (isNaN(document.getElementById('quantidade').value) || document.getElementById('quantidade').value <= 0) {
        alert("Você não preencheu a quantidade ! Iremos considerar o mínimo de 1.");
    }
    let qnt = document.getElementById('quantidade').value == '' ? 1 : document.getElementById('quantidade').value;
    let total = document.getElementById('valor-total');
    let totalAmount = parseInt(total.innerHTML.split('$')[1]);

    let contem = false;
    let currentQnt = 0;
    productList.querySelectorAll('.carrinho__produtos__produto').forEach(element => {
        if(element.textContent.includes(productName)){
            contem = true;
            currentQnt++;
        }
    });

    if(contem){
        const newQnt = parseInt(qnt) + currentQnt;
        productList.innerHTML = `<section class="carrinho__produtos__produto"><span class="texto-azul">${newQnt}x</span> ${productName} <span class="texto-azul">R$${(productValue * newQnt)}</span></section>`

    }else{
    productList.innerHTML = `<section class="carrinho__produtos__produto">${productList.innerHTML} <span class="texto-azul">${qnt}x</span> ${productName} <span class="texto-azul">R$${(productValue * qnt)}</span></section>`;
    }

    total.textContent = `R$ ${totalAmount + (productValue * qnt)}`;
    document.getElementById('quantidade').value = null;

}


function capturarValores() {
    const nome = document.getElementById('campoNome').value;
    const email = document.getElementById('campoEmail').value;

 document.getElementById('mostraNome').innerHTML = `<span class="message">Obrigado por comprar conosco ${nome}</span>`;
    console.log(`Nome: ${nome}, Email: ${email}`);
}

const duasSentencas = "Criar o que não existe ainda deve ser a pretensão de todo sujeito que está vivo; A tarefa mais importante de uma pessoa que vem ao mundo é criar algo"
const frasesSeparadas = duasSentencas.split(';');

console.log(frasesSeparadas);

const numerosSeparados = "10,20,30,40,50";
const arrayNumeros = numerosSeparados.split(',');
console.log(arrayNumeros);