// alert("Teste");

var corpo = document.querySelector("#corpoDashboard");
var loads = document.querySelector("#load");

function createLoading(daddy) {

  var load = document.createElement("div");
  load.style.position = "fixed";
  load.style.width = "100%";
  load.style.height = "100%";
  load.style.backgroundColor = "#444444";
  load.style.float = "left";
  loads.appendChild(load);
  setTimeout(() => {
    
    loads.removeChild(load);
    
  }, 10000)
}

corpo.onload = function() {
  
  createLoading(corpo);
  
}

