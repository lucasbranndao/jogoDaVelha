let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#buttons-container button");
let mensagemContainer = document.querySelector("#mensagem");
let mensagemText = document.querySelector("#mensagem p");
let segundoJogador;

// contador de jogadas
let jogador1 = 0;
let jogador2 = 0;

// adicionando o vento de click aos boxes
for(let i = 0; i < boxes.length; i++) {

    // quando alguem clica na caixa
    boxes[i].addEventListener("click", function() {
        
        let el = checkEl(jogador1, jogador2)
        // verifica se já tem x ou o
    if(this.childNodes.length == 0) {


    
        let cloneEl = el.cloneNode(true);

        this.appendChild(cloneEl);


        // computar jogada

        if(jogador1 == jogador2){
        jogador1++;
            if(segundoJogador == 'ai-jogador' ){
                // funcao execuar jogada
                computadorJogador();                
                jogador2++;

            }

        } else {
            jogador2++;
        }
        // checa quem venceu

        checkWinCondition();
        
    }

});
}
// evento para saber se é 2 jogadores ou IA

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function(){

        segundoJogador = this.getAttribute("id");
        for(j = 0; j < buttons.length; j++) {
            buttons[j].style.display = 'none';
        }

        setTimeout(function() {
            let container = document.querySelector("#container");
            container.classList.remove("hide");
        }, 500);

    });
}

// ve quem vai jogar
function checkEl(jogador1, jogador2){
    if(jogador1 == jogador2){
        // jogador1 = x
        el = x;
        
    } else {
        // jogador2 = o
        el = o;

    }
    return el;
}
// ve quem ganhou
function checkWinCondition(){
    let b1 = document.getElementById("block1");
    let b2 = document.getElementById("block2");
    let b3 = document.getElementById("block3");
    let b4 = document.getElementById("block4");
    let b5 = document.getElementById("block5");
    let b6 = document.getElementById("block6");
    let b7 = document.getElementById("block7");
    let b8 = document.getElementById("block8");
    let b9 = document.getElementById("block9");

    // horizontal
    if(b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0){
        let b1Child = b1.childNodes[0].className;
        let b2Child = b2.childNodes[0].className;
        let b3Child = b3.childNodes[0].className;

        if(b1Child == 'x' && b2Child =='x' && b3Child =='x'){
        //  x 
        declareVencedor('x');
    } else if(b1Child == 'o' && b2Child =='o' && b3Child =='o'){
        // o
        declareVencedor('o');

    }
    }

    if(b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0){
        let b4Child = b4.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;

        if(b4Child == 'x' && b5Child =='x' && b6Child =='x'){
        //  x 
        declareVencedor('x');
    } else if(b4Child == 'o' && b5Child =='o' && b6Child =='o'){
        // o
        declareVencedor('o');

    }
    }

    if(b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0){
        let b7Child = b7.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if(b7Child == 'x' && b8Child =='x' && b9Child =='x'){
        //  x 
        declareVencedor('x');
    } else if(b7Child == 'o' && b8Child =='o' && b9Child =='o'){
        // o
        declareVencedor('o');

    }
    }

    // vertical

    if(b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0){
        let b1Child = b1.childNodes[0].className;
        let b4Child = b4.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;

        if(b1Child == 'x' && b4Child =='x' && b7Child =='x'){
        //  x 
        declareVencedor('x');
    } else if(b1Child == 'o' && b4Child =='o' && b7Child =='o'){
        // o
        declareVencedor('o');

    }
    }
    if(b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0){
        let b2Child = b2.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;

        if(b2Child == 'x' && b5Child =='x' && b8Child =='x'){
        //  x 
        declareVencedor('x');
    } else if(b2Child == 'o' && b5Child =='o' && b8Child =='o'){
        // o
        declareVencedor('o');

    }
    }
    if(b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0){
        let b3Child = b3.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if(b3Child == 'x' && b6Child =='x' && b9Child =='x'){
        //  x 
        declareVencedor('x');
    } else if(b3Child == 'o' && b6Child =='o' && b9Child =='o'){
        // o
        declareVencedor('o');

    }
    }
    // diagonal
    if(b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0){
        let b1Child = b1.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if(b1Child == 'x' && b5Child =='x' && b9Child =='x'){
        //  x 
        declareVencedor('x');
    } else if(b1Child == 'o' && b5Child =='o' && b9Child =='o'){
        // o
        declareVencedor('o');

    }
    }
    if(b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0){
        let b3Child = b3.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;

        if(b3Child == 'x' && b5Child =='x' && b7Child =='x'){
        //  x 
        declareVencedor('x');
    } else if(b3Child == 'o' && b5Child =='o' && b7Child =='o'){
        // o
        declareVencedor('o');

    }
    }


    //  deu velha

    let counter = 0;
    for(let i = 0; i < boxes.length; i++){
        if(boxes[i].childNodes[0] !=undefined){
            counter++;
        }
    }
    if(counter == 9){
        declareVencedor('Deu Velha')
    }
}


// limpa o jogo, decalta o vencedor e atualiza o placar

function declareVencedor(winner){
    
    let placarX = document.querySelector("#placar-1");
    let placarO = document.querySelector("#placar-2");
    let mensagem ='';

    if(winner == 'x') {
        placarX.textContent = parseInt(placarX.textContent) + 1;
        mensagem = " O jogador 1 venceu!!!"

    } else if(winner == 'o') {
        placarO.textContent = parseInt(placarO.textContent) + 1;
        mensagem = " O jogador 2 venceu!!!"
    } else {
        mensagem = "Deu velha";
    }

    // exibir mensagem

    mensagemText.innerHTML = mensagem;
    mensagemContainer.classList.remove("hide");

    // esconde mensagem
    setTimeout(function() {
        mensagemContainer.classList.add('hide');
    }, 3000);

    // zerando jogadas
    jogador1 = 0;
    jogador2 = 0;

    // remove x e o
    let boxesToRemove = document.querySelectorAll(".box div");
    for(let i=0; i < boxesToRemove.length; i++){
        boxesToRemove[i].parentNode.removeChild(boxesToRemove[i]);
    }
}

//  logica da jogada do cpu

function computadorJogador() {

    let cloneO = o.cloneNode(true);
    counter = 0;
    filled = 0;
// só preencher se estiver vazio o filho
    for(let i = 0; i < boxes.length; i++){
        let randomNumero = Math.floor(Math.random() * 5);

        if(boxes[i].childNodes[0] == undefined){
            if(randomNumero <= 1){
                boxes[i].appendChild(cloneO);
                counter++;
                break;
            }
        // checagem de quantas estão preenchidas
        } else {
            filled++;
    
    } 
    }

    if(counter == 0 && filled < 9)
    computadorJogador();

}