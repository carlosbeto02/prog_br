const nomes = ["Beto", "Pedro", "Joao", "Maria", "Eduardo"];

const sorteio = () => {
  const numeroDePessoas = nomes.length;
  const numSortiado = Math.floor(Math.random() * numeroDePessoas);
  return numSortiado;
};

const btnSorteio = document.querySelector("#btnSorteio");
const hSorteio = document.querySelector("#hSorteio");

btnSorteio.addEventListener("click", () => {
  x = sorteio();
  console.log("X= %d", x);
  hSorteio.innerHTML = "o vencedor foi: " + nomes[x];
});
