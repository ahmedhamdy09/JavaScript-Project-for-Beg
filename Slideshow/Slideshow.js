let myImage = document.getElementById("slideshow");
let images = ["./1.jpg","./2.png","./3.jpg","./4.jpg"];
let i =0;

function slideshow(){
    myImage.setAttribute('src', images[i]); // images[2]
    //i++;
    if(i == images.length - 1){
        i=0;
    }else{
        i++;
    }

    setTimeout(function() {
        slideshow();
    }, 2000);
}
slideshow();