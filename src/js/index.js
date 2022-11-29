const campoFormulario = document.querySelectorAll(".area");
const botao = document.getElementById("botao");

botao.addEventListener("click", function () {
  campoFormulario.forEach(function (area) {
    if (area.value === ""){
      area.nextElementSibling.classList.add("ativo");
      area.classList.add("nao-preenchido");
    } else if(area.value != ""){
      area.nextElementSibling.classList.remove("ativo")
      area.classList.add("preenchido")
      area.classList.remove("nao-preenchido")
    }
  });
});




