// Palavras fundados
export const palavrasEscolaFundador = {
    probablyWords: [
        "quem", "fundou", "a", "escola",
        "sabe", "me", "dizer", "criou",
        "foi", "o", "criador", "da", "instituição", "educacional"
    ],
    matched: 0,
    answer: "QUem fundou a escola foi XYZXAS"
}

// Cursos técnicos
export const palavrasCursosTecnicos = {
    probablyWords: [
        "qual", "curso", "técnico", "a", "escola",
        "oferece", "sabe", "me", "dizer", "são",
        "os", "da", "instituição", "disponível",
        "na", "área", "técnica", "quais", "cursos", "técnicos"
    ],
    matched: 0,//declara cada matched tensionado
    answer: "Oferecemos os cursos técnicos XYZXAADJASD"
}

// Matricular e rematricular
export const palavrasMatricula = {
    probablyWords: [
        "quem", "quer", "saber", "matricular", "um", "filho",
        "ou", "rematricular", "uma", "filha", "sabe", "me",
        "dizer", "como", "fazer", "a", "matrícula", "rematrícula",
        "de", "seu", "filho", "sua", "filha", "quais", "são",
        "os", "documentos", "necessários", "para", "a", "matrícula",
        "rematrícula", "na", "escola"
    ],
    matched: 0,
    answer: "Para matricular Deve ser feito XYZ, e para matricular ABC"
}

const papoFurado=[
     "nao", "sla", "por que?"
]
// QUALQUER OUTRA PERGUNTA
// Ex: falar que não sabe e para ligar para a instituição

function showAnswer(index) {
    switch (index) {// retorna as respostas possiveis para cada array
        case 0:
            return palavrasEscolaFundador.answer
            
        case 1:
            return palavrasCursosTecnicos.answer

        case 2: 
            return palavrasMatricula.answer
    
        default:
            "nao sei falar"
        
    }
    // Retorne uma string como resposta

    if(pergunta.includes(papoFurado)//ele faz um if que se caso ele encontre palavras do papo furado ele retorna nao sei
    
    )
    
    {
        return'eu nao sei'

    }
    // Exemplo: "Minha resposta"
    return "Resposta de exemplo do arquivo"
}

export function mostProbablyQuestion() {
    // Veja quem teve mais matches dos bancos
    let matches = [
    palavrasCursosTecnicos.matched,
    palavrasEscolaFundador.matched,
    palavrasMatricula.matched,
    ]//esse tensiona as arrays e defini para ser o maior
   
    console.log(matches)// cada log printa o tanto tensionado de cada parte
    console.log(Math.max(...matches))
    console.log(matches.indexOf(Math.max(...matches)))
    // Chame a showAnswer com o parâmetro

}

