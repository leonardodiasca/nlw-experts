const perguntas = [
    {
      pergunta: "O que significa a sigla DOM em JavaScript?",
      respostas: [
        "Documento Orientado para Múltiplas linguagens",
        "Documento de Objeto Móvel",
        "Modelo de Objeto de Documento",
      ],
      correta: 2
    },
    {
      pergunta: "Qual palavra-chave é usada para declarar variáveis em JavaScript?",
      respostas: [
        "var",
        "let",
        "const",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a função do método 'addEventListener' em JavaScript?",
      respostas: [
        "Adicionar um elemento ao documento",
        "Adicionar um evento a um elemento",
        "Adicionar um estilo a um elemento",
      ],
      correta: 1
    },
    {
      pergunta: "Como você escreve um comentário de uma linha em JavaScript?",
      respostas: [
        "// Este é um comentário",
        "# Este é um comentário",
        "/* Este é um comentário */",
      ],
      correta: 0
    },
    {
      pergunta: "O que é 'NaN' em JavaScript?",
      respostas: [
        "Número natural",
        "Nada a Notar",
        "Não é um número",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o operador de atribuição em JavaScript?",
      respostas: [
        "==",
        "=",
        "+=",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o método usado para converter uma string em um número inteiro em JavaScript?",
      respostas: [
        "parseInt()",
        "stringToInt()",
        "toInteger()",
      ],
      correta: 0
    },
    {
      pergunta: "O que é o conceito de 'escopo' em JavaScript?",
      respostas: [
        "A área do código onde uma variável pode ser acessada",
        "O tamanho físico do código",
        "O número de linhas em um arquivo",
      ],
      correta: 0
    },
    {
      pergunta: "O que faz o operador '===' em JavaScript?",
      respostas: [
        "Compara valores, sem verificar o tipo",
        "Atribui um valor a uma variável",
        "Compara valores e verifica o tipo",
      ],
      correta: 2
    },
    {
      pergunta: "Qual função é usada para exibir algo no console em JavaScript?",
      respostas: [
        "console.log()",
        "print()",
        "display()",
      ],
      correta: 0
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    //loop de repetição
    for(const item of perguntas) {
      const quizItem = template.content.cloneNode(true)
      quizItem.querySelector('h3').textContent = item.pergunta
    
  
      for(let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-'+ perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        dt.querySelector('input').onchange = (event) => {
          const estaCorreta = event.target.value == item.correta // true
  
          corretas.delete(item)
          if(estaCorreta) {
            corretas.add(item)
          }
          
          mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        
        }
  
        quizItem.querySelector('dl').appendChild(dt)
      }
  
        quizItem.querySelector('dl dt').remove()
  
  
      // coloca a pergunta  na tela
      quiz.appendChild(quizItem)
    }