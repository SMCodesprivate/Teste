// alert("Teste");

var corpo = document.querySelector("#corpoDashboard");

function createLoading(daddy) {

  var load = document.createElement("div");
  
  load.style.backgroundColor = "#444444";
  daddy.appendChild(load);
  
}

corpo.onload = function() {
  
  createLoading(corpo);
  
}

