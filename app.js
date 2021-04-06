var btnTranslate = document.getElementById("btn-translate");
var inputTxt = document.querySelector("#input-textarea");
var outputTxt = document.querySelector("#output-area");

var url = "https://api.funtranslations.com/translate/minion.json?text=";

function generateURL(inputData){
	return url + inputData;
}

function errorHandler(error){
	console.log("error occoured",error);
	alert("please tray again later!");
}

btnTranslate.addEventListener("click",function clickHandler(){
	fetch(generateURL(inputTxt.value))
	.then(response => response.json())
	.then(json => outputTxt.innerText= json.contents.translated)
	.catch(errorHandler)
});
