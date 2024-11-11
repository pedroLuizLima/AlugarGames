    let jogosAlugados = ['game-3'];
function alterarStatus(id){
    let clicado = document.getElementById(`game-${id}`);
    let botao = clicado.querySelector('.dashboard__item__button');
    let imagem = clicado.querySelector('.dashboard__item__img');
    if (imagem.classList.contains('dashboard__item__img--rented')) {
        let devolucao = prompt('Você deseja devolver um jogo? 1 - Sim, 2 - Não.')
        if(devolucao == 1){
        imagem.classList.remove('dashboard__item__img--rented');
        botao.textContent = 'Alugar';
        botao.classList.remove('dashboard__item__button--return');
        jogoDA = jogosAlugados.indexOf(`game-${id}`);
        jogosAlugados.splice(jogoDA, 1, );
        } else{
            return;
        }
    }else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.textContent = 'Devolver';
        botao.classList.add('dashboard__item__button--return');
        jogosAlugados.push(`game-${id}`);
    }
    console.log(jogosAlugados.sort());
};