var btnTranslate = document.getElementById("btn-translate");
var inputTxt = document.querySelector("#input-textarea");
var outputDiv = document.querySelector("#output-area");

var serverURL = "https://api.funtranslations.com/translate/minion.json"


function getTranslationURL(input) {
    return serverURL + "?" + "text=" + input
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server! try again after some time")
}

btnTranslate.addEventListener("click",function clickHandler(){
    var inputText = inputTxt.value; // taking input
	// console.log(inputText)
	
    // calling server for processing
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText; // output
        })
        .catch(errorHandler)
});


// var btnTranslate = document.querySelector("#btn-translate");
// var txtInput = document.querySelector("#input-textarea");
// var outputDiv = document.querySelector("#output-area");

// // var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

// var serverURL = "https://api.funtranslations.com/translate/minion.json"


// function getTranslationURL(input) {
//     return serverURL + "?" + "text=" + input
// }

// function errorHandler(error) {
//     console.log("error occured", error);
//     alert("something wrong with server! try again after some time")
// }


// function clickHandler() {
//     var inputText = txtInput.value; // taking input
// 	// console.log(inputText)
	
//     // calling server for processing
//     fetch(getTranslationURL(inputText))
//         .then(response => response.json())
//         .then(json => {
//             var translatedText = json.contents.translated;
//             outputDiv.innerText = translatedText; // output
//         })
//         .catch(errorHandler)
// };

// btnTranslate.addEventListener("click", clickHandler)