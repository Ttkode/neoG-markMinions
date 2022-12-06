var translateButton = document.querySelector("#language-button");
translateButton.addEventListener("click", buttonClickHandler)
var translateInput = document.querySelector("#minions-input");
var translateOutput = document.querySelector("#minions-output");

var url = "https://api.funtranslations.com/translate/minion.json"


function buttonClickHandler(event) {
    console.log("Button clicked");
    var input = translateInput.value;
    var minURL = url + "?text=" + input;
    console.log(minURL);
    fetch(minURL)
        .then(response => response.json())
        .then(json => {
            translateOutput.innerText = json.contents.translated;
        })

        .catch(() => alert("some error occured"))
}


