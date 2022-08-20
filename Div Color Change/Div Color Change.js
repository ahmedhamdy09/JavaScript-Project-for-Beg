var buttonEle = document.querySelector(".btn");
var divEl = document.querySelector(".mydiv");

var color = ["red","green","blue"];
var i =0;

buttonEle.onclick = function(){
    //logic

    divEl.style.backgroundColor = color[i];
    i++; //3


    if(i == 3){
        return i=0;
    }
}

