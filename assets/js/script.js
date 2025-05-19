let carrinho = [];

function rolarMenu(){
    const alvo = document.getElementById('menu');
    alvo.scrollIntoView({ behavior: 'smooth' });
}

function pedirAgora(){
    mensagem = 'Olá, gostaria de solicitar meu pedido\n';
    numero = '9999999-9999';
    if(carrinho.length > 0){
        mensagem += carrinho.join('\n');
    }
    enviarParaWhatsapp(numero, mensagem);
}

function enviarParaWhatsapp(numero, mensagem) {
  const numeroLimpo = numero.replace(/\D/g, ''); // remove espaços, parênteses, etc.
  const mensagemCodificada = encodeURIComponent(mensagem);
  const url = `https://wa.me/${numeroLimpo}?text=${mensagemCodificada}`;
  window.open(url, '_blank'); // abre em nova aba
}

function adicionarAoCarrinho(nome){
    carrinho.push(nome);
    atualizarContador();
}

function atualizarContador(){
    const contador = document.getElementById('contador-carrinho');
    contador.textContent = carrinho.length;
}

function abrirCarrinho(){
    alert("Itens no carrinho:\n" + carrinho.join('\n'));
}