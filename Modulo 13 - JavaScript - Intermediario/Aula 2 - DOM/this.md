<input class="campo" type="text">
<input class="campo" type="text">
<input class="campo" type="text">

<!-- Você pode criar uma função genérica: -->
function mudarCor() {
  if (this.value.trim().length > 0) {
    this.style.backgroundColor = "lightgreen";
  } else {
    this.style.backgroundColor = "white";
  }
}

<!-- E aplicar em todos: -->
const campos = document.querySelectorAll(".campo");

campos.forEach((campo) => {
  campo.addEventListener("input", mudarCor);
});