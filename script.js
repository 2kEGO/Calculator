const display = document.getElementById('display');
const normal = document.getElementsByClassName('normal_button');
let current =[];
let nums1 = [];
let nums2 = [];
let operator = '';


function showOnDisplay(input) {
    display.value += input;
    current = display.value;
    const operatorIndex = current.search(/[+\-*/]/);
    const nums1 = parseFloat(current.slice(0, operatorIndex));         
    const operator = current[operatorIndex];              
    const nums2 = parseFloat(current.slice(operatorIndex + 1));
    console.log(nums1, operator, nums2);
}

function clearDisplay() {
    display.value = '';
}

function calculate(){
    let result;
    switch(operator) {
        case '+':
            result = nums1 + nums2;
            break;
        case '-':
            result = nums1 - nums2;
            break;
        case 'x':
            result = nums1 * nums2;
            break;
        case '/':
            result = nums1 / nums2;
            break;
        default:
            alert('Invalid operator');
    }
    display.value = result;
}