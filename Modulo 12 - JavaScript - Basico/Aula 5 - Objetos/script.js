// outra maneira de criar

/* var aluno = new Object();

aluno.nome = "Beto";
aluno.notas = [10, 5];
 */

/* function calcMedia() {
  return (this.notas[0] + this.notas[1]) / 2;
}

var aluno = {
  nome: "Beto",
  notas: [10, 6],

  media: calcMedia,
};

var newProp = "Sobrenome";

aluno[newProp] = "Gomes";

console.log(aluno.media());
 */

// Criando objeto mais moderno
/* function criarAluno(nome, n1, n2) {
  return {
    nome: nome,
    nota1: n1,
    nota2: n2,
    media: function () {
      return (this.nota1 + this.nota2) / 2;
    },
  };
}

var turma = [
  criarAluno("beto", 9, 7),
  criarAluno("Joao", 10, 5),
  criarAluno("Pedro", 2, 6),
];

// percorre o array
turma.forEach(function (elemento) {
  console.log(elemento);
  console.log(elemento.media());
}); */

// Instanciando um Obejto
function aluno(nome, n1, n2) {
  this.nome = nome;
  this.nota1 = n1;
  this.nota2 = n2;

  this.nedia = function () {
    return (this.nota1 + this.nota2) / 2;
  };
}

var a = new aluno[("Beto", 2, 6)]();
