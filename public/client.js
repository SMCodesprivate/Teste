
function load() {
  var teste = localStorage.getItem("logado");
  var infos = localStorage.getItem("user_infos");
  console.log(teste);
  if(teste) {
    window.location.href = "/dashboard";
  }
}
load();


var emailInput = document.querySelector("#inputEmail");
var formCadastro = document.querySelector("#formularioCadastro");
var bottonInput = document.querySelector("#inputBotton");
var menuCadastro = document.querySelector("#menuCadastro");
var corpoIndex = document.querySelector("#corpo");


function getRandomColor() {
	var letters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWYZ";
	var color = "";
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}
function getRandomColorDark() {
	var colors = ["a", "33335F", "933445", '555559'];
	color = colors[Math.floor(Math.random() * 3)];
	return color;
}
corpoIndex.onload = function() {
  menuCadastro.style.transition = "1.5s all linear";
  emailInput.style.transition = "1.5s all ease"; 
}
var color = getRandomColor();
emailInput.style.boxShadow = "0px 3px 0px #"+color;
formCadastro.appendChild(emailInput);
setInterval(trocarColor, 350)
function trocarColor() {
	var color = getRandomColorDark();
	menuCadastro.style.border = "4px solid #"+color;
	var colorId = getRandomColor();
  emailInput.style.boxShadow =  "0px 3px 0px #"+colorId;
}

function cadastrarUser(user_name) {
  localStorage.setItem("logado", true);
  localStorage.setItem("user_infos", user_name);
}

emailInput.addEventListener("keydown", function (e) {
  cadastrarUser(emailInput.value);
  if(e.key == "Enter") {
    load()
  }
})

bottonInput.onclick = function() {
  cadastrarUser(emailInput.value);
  load()
};



