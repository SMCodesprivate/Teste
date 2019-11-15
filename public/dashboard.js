// alert("Teste");

var corpo = document.querySelector("#corpoDashboard");
var loads = document.querySelector("#load");

function createLoading(daddy) {

  var load = document.createElement("div");
  var loading = document.createElement("lottie-player")
  loading.setAttribute("src", "https://assets2.lottiefiles.com/temp/lf20_tGD9tP.json");
  loading.setAttribute("background", "transparent");
  loading.setAttribute("speed", "0.7")
  load.appendChild(loading);
  load.style.position = "fixed";
  load.style.width = "100%";
  load.style.height = "100%";
  load.style.backgroundColor = "#FFFFFF";
  loads.appendChild(load);
  setTimeout(() => {
    
    loads.removeChild(load);
    
  }, 10000)
}

createLoading(corpo);


// <lottie-player
//  src="https://assets2.lottiefiles.com/temp/lf20_tGD9tP.json"
//  background="transparent"
//  speed="0.7"
//  style="width: 300px; height: 300px;"
//  loop
//  autoplay >
// </lottie-player>