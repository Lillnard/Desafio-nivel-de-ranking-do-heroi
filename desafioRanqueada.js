let nomeDoHeroi = "Lillnard - O caça ratos"
let vitorias = 296
let derrotas = 192
let saldo = "vitorias - derrotas"

function subtrair(vitorias, derrotas) {
    return vitorias - derrotas;
  }
  
  let resultado = subtrair(296, 192); 

  if (resultado <= 10) {
    console.log("O Herói chamado " + nomeDoHeroi + " está no RANKING FERRO")
    } else if (resultado >= 11 && resultado <= 20) {
        console.log("O Herói chamado " + nomeDoHeroi + " está no RANKING BRONZE")
    } else if (resultado >= 21 && resultado <= 50) {
        console.log("O Herói chamado " + nomeDoHeroi + " está no RANKING PRATA")
    } else if (resultado >= 51 && resultado <= 80) {
        console.log("O Herói chamado " + nomeDoHeroi + " está no RANKING OURO")
    } else if (resultado >= 81 && resultado <= 90) {
        console.log("O Herói chamado " + nomeDoHeroi + " está no RANKING DIAMANTE")
    } else if (resultado >= 91 && resultado <= 100) {
        console.log("O Herói chamado " + nomeDoHeroi + " está no RANKING LENDÁRIO")
    } else {
        console.log("Ranking máximo alcançado... Parabéns!!! O Herói chamado " + nomeDoHeroi + " , possui um saldo de" + saldo " e está no RANKING IMORTAL")
    }