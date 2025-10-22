const input = document.getElementById("searchInput");

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    alert("Simulação de busca por: " + input.value);
  }
});
