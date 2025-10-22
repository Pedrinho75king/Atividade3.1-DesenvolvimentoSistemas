const input = document.getElementById("searchInput");

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    alert("🎄 Você pesquisou: " + input.value + " — Feliz Natal com o Google!");
  }
});
