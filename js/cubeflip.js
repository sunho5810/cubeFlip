var cubeWrap = document.querySelector(".cube_wrap")

var cube = document.querySelector(".cube");
var cubeR = document.querySelector(".cube .right");
var cubeL = document.querySelector(".cube .left");
// var randNum=0;

cube.style.display = "none";
var rotatePower = 0;

var cubeArr = [];
var i = 0


var createCube = function (cubeCloned) {
    var cubeClonedRect = cubeCloned.getBoundingClientRect();
    var cubeClonedRectL = cubeClonedRect.left;
    // console.log(cubeClonedRect);

     cubeCloned = cube.cloneNode(true);
    cubeWrap.appendChild(cubeCloned);
    var rotatePower = 0;

    cubeCloned.style.display = "block";

    var cubeFliped = function(){
        var randSide = Math.floor((Math.random()) * 2);

        if(randSide == 0){
            rotatePower += 90;
        } else {
            rotatePower -= 90;
        }

        cubeCloned.style.transform = "rotateY(" + (rotatePower) + "deg)";
    }

    cubeCloned.addEventListener("mouseenter", cubeFliped);

  

    window.addEventListener("click", function(){
        rotatePower = 0;
        cubeCloned.removeEventListener("mouseenter", cubeFliped);
        cubeCloned.style.transition = "2s";
        cubeCloned.style.transform = "rotateY(0deg)";
        setTimeout(function(){
            cubeCloned.style.transform = "rotateX(-90deg)";
            cubeFlipedHandler = true;
       }, 2500);
        
    })
}

for (i = 0; i < 100; i++) {
    createCube(cube);
}