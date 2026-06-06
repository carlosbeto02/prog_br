alunos = ["Carlos", "Ana", "Pedro", "Eduardo"];
var notasA = [1, 5, 10, 9];
var notasB = [1, 4, 9, 5];

media = function (n1, n2) {
  return (n1 + n2) / 2;
};

resultado = function (medias) {
  if (medias < 6) {
    return "REPROVADO";
  } else {
    return "APROVADO";
  }
};

/* console.log(resultado(2)); */

for (var i in alunos) {
  console.log(
    "Aluno: " +
      alunos[i] +
      " tirou " +
      notasA[i] +
      " na primeira prova e " +
      notasB[i] +
      " na segunda prova e teve media de: " +
      media(notasA[i], notasB[i]) +
      ": " +
      resultado(media(notasA[i], notasB[i])),
  );
}
