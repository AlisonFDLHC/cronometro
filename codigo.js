const contadorS = document.getElementById("contadorS");
const contadorM = document.getElementById("contadorM");
const contadorH = document.getElementById("contadorH");
const led = document.getElementById("led");
const botoes = document.querySelectorAll(".button");

let contagemS = 0
let contagemM = 0
let contagemH = 0
let isContando = false

botoes.forEach((botao) => {
    botao.addEventListener('click', () => contadorFunc(botao.id))
})

function contadorFunc(acao) {
    switch(acao) {
        case 'stop':
            isContando = false
            botoes[1].classList.remove('active')
            botoes[2].classList.add('active')
            botoes[2].classList.add('start')
            clearInterval(contando)
            led.classList.remove('counting')
        break;
        case 'reset':
            botoes[1].classList.remove('active')
            botoes[2].classList.add('active')
            botoes[2].classList.add('start')
            isContando = false
            led.classList.remove('counting')
            contagemS = 0
            contagemM = 0
            contagemH = 0
            clearInterval(contando)
        break;
        case 'start':
            if (!isContando) {
                botoes[2].classList.remove('active')
                botoes[1].classList.add('active')
                botoes[1].classList.add('reset')
                isContando = true
                led.classList.add('counting')
                contando = setInterval(function () {
                if (contagemS < 59) {
                    contagemS += 1
                } else {
                    contagemS = 0
                }
                if (contagemS == 59 && contagemM < 59) {
                    contagemM += 1
                    if (contagemM == 59) {
                        contagemH += 1
                    }
                } else if (contagemM == 59){
                    contagemM = 0
                }
                printNums()
            },1000)
            }
            
        break;
    }
    printNums()
}

function printNums() {
    contadorS.innerHTML = ((contagemS.toString().length) == 2) ? contagemS : '0' + contagemS;
    contadorM.innerHTML = ((contagemM.toString().length) == 2) ? contagemM : '0' + contagemM;
    contadorH.innerHTML = ((contagemH.toString().length) == 2) ? contagemH : '0' + contagemH;
}