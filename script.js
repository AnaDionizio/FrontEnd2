function analisarAluno() {
  // Coleta os dados
  var totalAulas = parseInt(prompt("Informe o número de aulas do semestre:"));
  var faltas = parseInt(prompt("Informe o número de faltas do aluno:"));
  var nota1 = parseFloat(prompt("Informe a primeira nota (P1):"));
  var nota2 = parseFloat(prompt("Informe a segunda nota (P2):"));

  // Validação de entrada
  if ([totalAulas, faltas, nota1, nota2].some(isNaN)) {
    alert("Erro: Todos os campos devem ser preenchidos corretamente.");
    return;
  }

  // Cálculos iniciais
  var percentualFrequencia = ((totalAulas - faltas) / totalAulas) * 100;
  var mediaInicial = (nota1 + nota2) / 2;
  var situacaoFinal = '';
  var mediaFinal = mediaInicial;

  // Exibe no console os dados recebidos
  console.log("Dados Recebidos: ", { totalAulas, faltas, nota1, nota2 });

  // Verifica a situação do aluno
  if (percentualFrequencia < 75) {
    situacaoFinal = "Reprovado por falta.";
  } else if (mediaInicial >= 7) {
    situacaoFinal = "Aprovado.";
  } else if (mediaInicial >= 5) {
    var resposta = prompt("Aluno em recuperação. Informe a nota da recuperação:");
    var notaRecuperacao = parseFloat(resposta);
    
    if (isNaN(notaRecuperacao)) {
      alert("Erro: A nota da recuperação deve ser válida.");
      return;
    }

    mediaFinal = (mediaInicial + notaRecuperacao) / 2;
    situacaoFinal = mediaFinal >= 5 ? "Aprovado após recuperação." : "Reprovado após recuperação.";
  } else {
    situacaoFinal = "Reprovado por nota.";
  }

  // Exibe o resultado no alert
  alert(`
    Número de aulas do semestre: ${totalAulas}
    Número de faltas do aluno: ${faltas}
    Percentual de presença do aluno: ${percentualFrequencia.toFixed(2)}%

    Primeira nota (P1): ${nota1}
    Segunda nota (P2): ${nota2}
    Nota complementar (recuperação): ${mediaInicial >= 5 ? "N/A" : mediaFinal.toFixed(2)}
    Média final do aluno: ${mediaFinal.toFixed(2)}

    Situação final do aluno: ${situacaoFinal}
  `);

  // Exibe o resultado também no console para depuração
  console.log(`
    Número de aulas do semestre: ${totalAulas}
    Número de faltas do aluno: ${faltas}
    Percentual de presença do aluno: ${percentualFrequencia.toFixed(2)}%

    Primeira nota (P1): ${nota1}
    Segunda nota (P2): ${nota2}
    Nota complementar (recuperação): ${mediaInicial >= 5 ? "N/A" : mediaFinal.toFixed(2)}
    Média final do aluno: ${mediaFinal.toFixed(2)}

    Situação final do aluno: ${situacaoFinal}
  `);
}



