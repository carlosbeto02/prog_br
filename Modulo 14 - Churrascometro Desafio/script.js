const adultos = document.querySelector("#adultos");
const criancas = document.querySelector("#criancas");
const duracao = document.querySelector("#duracao");
const allCampos = document.querySelectorAll(".campos");
//const allP = document.querySelectorAll(".resultado");
const btnCalcular = document.querySelector("#btnCalcular");

//criando meus <p>
const divConteiner = document.querySelector(".container");

const createPCarne = document.createElement("p");
const createPCerveja = document.createElement("p");
const createPRefri = document.createElement("p");

divConteiner.appendChild(createPCarne);
divConteiner.appendChild(createPCerveja);
divConteiner.appendChild(createPRefri);

const calcular = () => {
  //divConteiner.innerHTML = ""; apaga tudo da div <div></div>
  let cerveja = Math.ceil(6 * adultos.value * duracao.value);
  let refri = Math.ceil(criancas.value * 2 * duracao.value);
  let carne = Math.ceil(adultos.value * 0.7 + criancas.value * 0.3);

  /*   allP[0].innerHTML = carne;
  allP[1].innerHTML = cerveja;
  allP[2].innerHTML = refri; */

  createPCarne.textContent = `Quantidade de carne: ${carne} kg`;
  createPCerveja.textContent = `Quantidade de cerveja: ${cerveja} latas`;
  createPRefri.textContent = `Quantidade de refri: ${refri} L`;
};

const habilitar = () => {
  if (
    adultos.value.trim().length > 0 &&
    criancas.value.trim().length > 0 &&
    duracao.value.trim().length > 0
  ) {
    btnCalcular.disabled = false;
  } else {
    btnCalcular.disabled = true;
  }
};

allCampos.forEach((campos) => {
  campos.addEventListener("input", habilitar);
});

btnCalcular.addEventListener("click", calcular);
