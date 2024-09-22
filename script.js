const display = document.getElementById('display');
const operators = document.getElementsByClassName('operation_button');
const normal = document.getElementsByClassName('normal_button');

function showOnDisplay(input) {
    display.value += input;
    
}

function clearDisplay() {
    display.value = '';
}

function calculate(){

}