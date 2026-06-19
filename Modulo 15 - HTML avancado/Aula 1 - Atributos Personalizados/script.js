let imagem = document.querySelector("#like");

imagem.addEventListener("click", () => {
  let pegarUltimaImagem = imagem.getAttribute("src");
  /* setAtribute posso criar um atributo tbm */
  imagem.setAttribute("src", "../assets/deslikeRed.png");
});

let lista = document.querySelector("#lista");
//let num = parseInt(lista.getAttribute("num"));
/* outro jeito de pegar um atributo q eu criei, colocar data-"atributo" */
let num = lista.dataset.num;

let conteudo = "";

for (let i = 0; i <= num; i++) {
  conteudo += "<li>" + i + "</li>";
}

lista.innerHTML = conteudo;
