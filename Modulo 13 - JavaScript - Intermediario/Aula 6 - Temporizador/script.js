const h1Title = document.querySelector("#hTitle");
const inpMudar = document.querySelector("#inpMudar");
const inpParar = document.querySelector("#inpParar");

/* const mudarCor = () => {
  h1Title.style.color = "blue";
  console.log("teste");
}; */

let numero = 0;
let intervalo = 0;

const contarNu = () => {
  h1Title.innerHTML += " " + numero;
  numero++;
};

inpMudar.addEventListener("click", () => {
  //setTimeout(mudarCor, 1000);

  intervalo = setInterval(contarNu, 1000);
});

inpParar.addEventListener("click", () => {
  clearInterval(intervalo);
});
