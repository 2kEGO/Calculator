const display = document.getElementById('display');
const operators = document.getElementsByClassName('operation_button');
const normal = document.getElementsByClassName('normal_button');
let current =[];


function showOnDisplay(input) {
     display.value += input;
     current = display.value;
     console.log(current);

}

function clearDisplay() {
    display.value = '';
}

function calculate(){
    console.log(current);
}

function operator (input){
    current += operator;
    display.value = '';
    display.value += input; 
    
}