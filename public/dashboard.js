// alert("Teste");

var corpo = document.querySelector("#corpoDashboard");
var loads = document.querySelector("#load");
var loadinging = document.querySelector("#loadinggg");
function createLoading(daddy) {

  var load = document.createElement("div");
  load.style.position = "fixed";
  load.style.width = "100%";
  load.style.height = "100%";
  load.style.backgroundColor = "#FFFFFF";
  var teste = '<lottie-player id="loadinggg" src="https://assets2.lottiefiles.com/temp/lf20_tGD9tP.json" background="transparent" speed="0.7" style="width: 300px; height: 300px;margin-left: 50%;" loop autoplay></lottie-player>';
  console.log(teste);
  var htmlObject = document.createElement('div');
  htmlObject.innerHTML = teste;
  console.log(htmlObject);
  load.appendChild(htmlObject);
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