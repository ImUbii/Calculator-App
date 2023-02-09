let currentNum;
let savedNum;
let operator = "";
let lastButton = "";
let clearScreen = false;

function input(num){
    
    if(document.getElementById("screen").innerHTML.includes(".",0) && num == ".") return;
   
    if(lastButton == "equals"){
        reset();
    }

    if(clearScreen == true){
        clearScreen = false;
        document.getElementById("screen").innerHTML = "";
    }

    document.getElementById("screen").innerHTML += num;
    currentNum = document.getElementById("screen").innerHTML;
}

function inputOp(currentOperator){

    if(currentNum == null || currentNum == ".") return;
    else if (lastButton == "equals" || operator == ""){
        clearScreen = true;
        savedNum = document.getElementById("screen").innerHTML;
        document.getElementById("screen").innerHTML += currentOperator;
        operator = currentOperator;
    }

    lastButton = "op";
}

function backspace(){

    if(lastButton = "op") operator = "";

    document.getElementById("screen").innerHTML = document.getElementById("screen").innerHTML.substring(0, document.getElementById("screen").innerHTML.length -1);
    currentNum = document.getElementById("screen").innerHTML
    savedNum = currentNum;
}

function clearCurrent(){

    if(lastButton = "op") operator = "";

    currentNum = 0;
    document.getElementById("screen").innerHTML = "";
}

function reset(){

    currentNum = 0;
    savedNum = 0;
    operator = "";
    lastButton = "";
    document.getElementById("screen").innerHTML = "";
}

function negate(){

    document.getElementById("screen").innerHTML = Number(document.getElementById("screen").innerHTML) * -1;
    currentNum = document.getElementById("screen").innerHTML;
}

function equals(){

    switch(operator){
        case "/":
            document.getElementById("screen").innerHTML = Number(savedNum) / Number(currentNum);
            savedNum = document.getElementById("screen").innerHTML;
            break;
        case "*":
            document.getElementById("screen").innerHTML = Number(savedNum) * Number(currentNum);
            savedNum = document.getElementById("screen").innerHTML;
            break;
        case "-":
            document.getElementById("screen").innerHTML = Number(savedNum) - Number(currentNum);
            savedNum = document.getElementById("screen").innerHTML;
            break;
        case "+":
            document.getElementById("screen").innerHTML = Number(savedNum) + Number(currentNum);
            savedNum = document.getElementById("screen").innerHTML;
            break;
    }

    lastButton = "equals"
}