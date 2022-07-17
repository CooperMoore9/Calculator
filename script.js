let num1 = '';
let num2 = '';

function add(num1, num2){
    return num1 + num2;
};

function subtract(num1, num2){
    return num1 - num2;
};

function multiply(num1, num2){
    return num1 * num2;
};

function divide(num1, num2){
    return num1 / num2;
};

function operate(operator, num1, num2){

}

const buttonListener = document.querySelectorAll('button');
    buttonListener.forEach((button) => {
        button.addEventListener('click', () => {
            if(!isNaN(parseInt(button.id)) ){
                num1 += button.id;
                console.log(num1);
            }
        })
    })