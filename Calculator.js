// Fetch the data from display,it is id for input in html
const display= document.getElementById("display");

function appendToDisplay(input){
display.value  += input;
console.log(display.value);
}

// Empty or clear the values in input field
function ClearDisplay(){
display.value ="";
}

// Using eval method to calculate 
function Calculate(){
    display.value = eval(display.value);
}

// Delete last number in input field
function DelLast() {
    display.value = display.value.slice(0, -1);
}

// Negate the number in input field
function Negate() {
    if (display.value.charAt(0) === '-') {
        display.value = display.value.slice(1);
    } else {
        display.value = '-' + display.value;
    }
}

// Square the number in input field
function Square(){

    display.value = display.value * display.value;
    // display.value  += Math.pow(display.value,2);
    console.log(display.value);
    
    }

// Display the 1/x in the input field
function OneBy(){
    display.value=1/display.value;
}

//Square root of the number in input field 
function Sqrt(){
    display.value=Math.sqrt(display.value);;
}

// 🎯Created By M.MANIKANDAN 🎯