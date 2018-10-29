var square = document.querySelectorAll(".square");
var noOfSquare = 6;
var colors = generateColors(noOfSquare);
var pickedColor = pickColor();
var rstbtn = document.getElementById("reset");
var rgb = document.getElementById("rgb");
var h1 = document.querySelector("h1");
var messageDisplay = document.querySelector("#message");
var easyBtn = document.getElementById("easyBtn");
var hardBtn = document.getElementById("hardBtn");
var won = 0;

rgb.textContent = pickedColor;
assignColors(colors);

easyBtn.addEventListener("click", function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    noOfSquare = 3;
    colors = generateColors(noOfSquare);
    pickedColor = pickColor();
    rgb.textContent = pickedColor;
    h1.style.backgroundColor = "#1BA39C";
    for(var i=0; i < square.length;  i++){
        if(colors[i]){
            square[i].style.backgroundColor = colors[i];
        }
        else{
            square[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    noOfSquare = 6;
    colors = generateColors(noOfSquare);
    pickedColor = pickColor();
    rgb.textContent = pickedColor;
    h1.style.backgroundColor = "#1BA39C";
    for(var i=0; i < square.length;  i++){
        if(colors[i]){
            square[i].style.backgroundColor = colors[i];
            square[i].style.display = "block";
        }
    }
});

rstbtn.addEventListener("click", function(){
    colors = generateColors(noOfSquare);
    pickedColor = pickColor();
    rgb.textContent = pickedColor;
    assignColors(colors); 
    h1.style.backgroundColor = "#1BA39C";
    messageDisplay.textContent = "";
    rstbtn.textContent = "New colors"
});

for (let i = 0; i < square.length; i++) {
    square[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;
        
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct!";
            changeColor(clickedColor);
            h1.style.backgroundColor = clickedColor;
            rstbtn.textContent = "Play Again?";
            won = 1;
        } else{
            this.style.backgroundColor="#34495E";
            messageDisplay.textContent = "Try Again!";
            won = 0;
        }

    });
}

function changeColor(color) {
    for(i = 0;i < square.length ; i++){
        square[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateColors(num) {
     var c = [];

    for(var i = 0; i < num; i++){
        c.push(randomColors());
    }

     return c;
} 

function randomColors(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb("+ r + ", " + g +", " + b +")";
}

function assignColors(colors) {
    for (let i = 0; i < square.length; i++) {
        // assign colors to each square
        square[i].style.backgroundColor = colors[i];
    }
}