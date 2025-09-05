function analisarAluno() {
  const resultado = document.getElementById("resultado");

  const totalAulas = parseInt(prompt("Informe o número de aulas do semestre:"));
  const faltas = parseInt(prompt("Informe o número de faltas do aluno:"));
  const nota1 = parseFloat(prompt("Informe a primeira nota (P1):"));
  const nota2 = parseFloat(prompt("Informe a segunda nota (P2):"));

  if (isNaN(totalAulas) || isNaN(faltas) || isNaN(nota1) || isNaN(nota2)) {
    resultado.textContent = "Erro: Todos os campos devem ser preenchidos corretamente.";
    return;
  }

  const percentualFrequencia = ((totalAulas - faltas) / totalAulas) * 100;

  let situacaoFinal = '';
  let notaRecuperacao = null;
  const mediaInicial = (nota1 + nota2) / 2;
  let mediaFinal = mediaInicial;

  if (percentualFrequencia < 75) {
    situacaoFinal = "Reprovado por falta.";
  } else {
    if (mediaInicial >= 7) {
      situacaoFinal = "Aprovado.";
    } else if (mediaInicial >= 5) {
      notaRecuperacao = parseFloat(prompt("Aluno em recuperação. Informe a nota da recuperação:"));

      if (isNaN(notaRecuperacao)) {
        resultado.textContent = "Erro: A nota da recuperação deve ser válida.";
        return;
      }

      mediaFinal = (mediaInicial + notaRecuperacao) / 2;

      if (mediaFinal >= 5) {
        situacaoFinal = "Aprovado após recuperação.";
      } else {
        situacaoFinal = "Reprovado após recuperação.";
      }
    } else {
      situacaoFinal = "Reprovado por nota.";
    }
  }

  let mensagem = `Número de aulas do semestre: ${totalAulas}\n`;
  mensagem += `Número de faltas do aluno: ${faltas}\n`;
  mensagem += `Percentual de presença do aluno: ${percentualFrequencia.toFixed(2)}%\n\n`;

  mensagem += `Primeira nota (P1): ${nota1}\n`;
  mensagem += `Segunda nota (P2): ${nota2}\n`;
  mensagem += `Nota complementar (recuperação): ${notaRecuperacao !== null ? notaRecuperacao : "N/A"}\n`;
  mensagem += `Média final do aluno: ${mediaFinal.toFixed(2)}\n`;

  mensagem += `\nSituação final do aluno: ${situacaoFinal}`;

  resultado.textContent = mensagem;
}
