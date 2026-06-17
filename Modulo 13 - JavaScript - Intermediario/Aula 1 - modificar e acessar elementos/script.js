/* Pegou elemento com o ID */
let paragrafos = document.getElementById("p1");
console.log(paragrafos);

/* Todos os ementos com a classe = paragrafo */
let paragrafos2 = document.getElementsByClassName("paragrafo");
console.log(paragrafos2);

for (let p of paragrafos2) {
  console.log(paragrafos2);
}

/* Pega todos os ementos com a tag = h1 */
let todosOsTitulos = document.getElementsByTagName("h1");
console.log(todosOsTitulos);

/* Alterar ou adiciona um elemento ao HTML exemplo h1 */
let alterarEAdicionar = document.getElementById("p1");
alterarEAdicionar.innerHTML = "<h1>Conteudo novo</h1>";

/* Altera o emento html */
let alterar = document.getElementById("p2");
alterar.innerText = "Conteudo mais novo";

/* me mostra todos os elemtos dentro do HML mesmo elemento escondido */
alterar.textContent = "Conteudo mais novo ainda";

/* alterando o nomeda  classe q era vermelho vai voltar pro padrao */
let mudarClasse = document.getElementById("corVermelha");
mudarClasse.className = "";
/* criar ou altera o atributo do meu mudarClasse */
/* mudar */
mudarClasse.setAttribute("class", "Azul");
//posso criar atributos tbm colocando um atributo q n existe
mudarClasse.setAttribute("novoAtributo", "novo");

//posso alterar o stylo diretamente tbm
mudarClasse.style.backgroundColor = "purple";
