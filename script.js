let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function multiply() {
    try {
        display.value += '*'; 
    } catch (error) {
        display.value = 'Error';
    }
}

function subtract() {
    try {
        display.value += '-'; 
    } catch (error) {
        display.value = 'Error';
    }
}

function divide() {
    try {
        display.value += '/'; 
    } catch (error) {
        display.value = 'Error';
    }
}

