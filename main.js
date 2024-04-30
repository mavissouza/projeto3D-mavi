const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for (let i=0; i < botoes.length; i++){
    botoes[i].onclick = function (){
        for (let j = 0; j < botoes.length; j++){
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }
        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}
const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("24-12-28T23:59:59");
const tempoObjetiv2 = new Date("24-07-05T23:59:59");
const tempoObjetivo3 = new Date("24-08-01T23:59:59");
const tempoObjetivo4 = new Date("24-12-01T23:59:59");

const tempos = [
    tempoObjetivo1, tempoObjetiv2, tempoObjetivo3, tempoObjetivo4
]

for (let i=0; i< contadores.length; i++){
    contadores[i].textContent = calculaTempo(tempos[i]);
}
contadores[0].textContent = calculaTempo(tempoObjetivo1);

function calculaTempo(tempoObjetivo1){
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo1 - tempoAtual;
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);
}