import { mostProbablyQuestion, palavrasCursosTecnicos, palavrasEscolaFundador, palavrasMatricula, } from "./prova-mensal-arquivo-auxiliar.js";

let pergunta = "fundador qual"
pergunta.toLowerCase()
pergunta.split('')
pergunta.replace("?", "")

// ele tira o ?, ele deixa em caixa baixa, o split separa cada palavra para serem usadas
const bancos = {
    palavrasCursosTecnicos,
    palavrasEscolaFundador,
    palavrasMatricula//defini cada parte qye poderá ser escolhida
}

for (let i = 0; i < pergunta.length; i++) {// faz o loop dos elementos da pergunta.
    for (let j = 0; j < bancos.length; j++) {
        if(bancos[j].mostProbablywords.indexof(pergunta[i]) !== -1){
            bancos[j].matched++
        }
    }
}

mostProbablyQuestion()