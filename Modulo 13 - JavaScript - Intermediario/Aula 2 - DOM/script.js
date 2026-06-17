const clicar = () => {
  console.log("Botao clicado");
};

const clicar2 = document.getElementById("titulo");

let validaCor = "black";
clicar2.addEventListener("click", () => {
  if (validaCor === "black") {
    validaCor = clicar2.style.color = "red";
    validaCor = "red";
  } else {
    validaCor = clicar2.style.color = "black";
    validaCor = "black";
  }
  console.log(validaCor);
  console.log("Funcão criada dentro do JS");
});

/* ---------------------------------------------------- */
const mudarBtn = document.getElementById("ipMudaBtn");
const sH1 = document.getElementById("segundoh1");
mudarBtn.addEventListener("input", () => {
  sH1.innerText = mudarBtn.value;
});

/* ---------------------------------------------------- */
/* exemplo com query selector */
/* jeito mais organizado de escrever  */

/* const campo = document.querySelector("#campo");
const botao = document.querySelector("#btnBotao");
campo.addEventListener("input", () => {
  if ((botao.value = true)) {
    botao.style.backgroundColor = "blue";
  }
  //botao.style.backgroundColor = "red";
}); */

const campo = document.querySelector("#campo");
const botao = document.querySelector("#btnBotao");

const habilitar = () => {
  if (campo.value.trim().length > 0) {
    botao.style.backgroundColor = "blue";
  } else {
    botao.style.backgroundColor = "red";
  }
};

campo.addEventListener("input", habilitar);

/* const campo = document.querySelector("#campo");
const botao = document.querySelector("#btnBotao");

const habilitar = (n1, n2) => {
  if (n1.value.trim().length > 0) {
    n2.style.backgroundColor = "blue";
  } else {
    n2.style.backgroundColor = "red";
  }
};

campo.addEventListener("input", () => {
  habilitar(campo, botao);
}); */
