
// get Elemnt into variable
var inputElement = document.getElementById("input");
var buttonElement = document.getElementById("btn");
var msgElement =document.getElementById("Msg");

// Events add click event to button
buttonElement.onclick = function() {
    // get value from input
    var inputValue = inputElement.value;
    console.log(inputValue);

    //put input value into p
    msgElement.innerHTML = inputValue;

    // empty input Value
    inputElement.value = "";

}