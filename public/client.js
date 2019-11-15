var emailInput = document.querySelector("#inputEmail");
var formCadastro = document.querySelector("#formularioCadastro");
var menuCadastro = document.querySelector("#menuCadastro");
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
var color = getRandomColor();
emailInput.style.boxShadow = "0px 3px 0px #"+color;
formCadastro.appendChild(emailInput);
setInterval(trocarColor, 250)
function trocarColor() {
	var color = getRandomColorDark();
	menuCadastro.style.border = "4px solid #"+color;
	var colorId = getRandomColor();
    emailInput.style.boxShadow =  "0px 3px 0px #"+colorId;
}
// setInterval(() => {
// 	var color = getRandomColorDark();
// 	menuCadastro.style.border = "4px solid #"+color;
//     var colorId = getRandomColor();
//     emailInput.style.boxShadow =  "0px 3px 0px #"+colorId;
// }, 950);