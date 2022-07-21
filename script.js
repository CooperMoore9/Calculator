let num1 = '';
let num2 = '';
let sign = '';
let evaluate = '';

function add(num1, num2){
    return parseInt(num1) + parseInt(num2);
};

function subtract(num1, num2){
    return parseInt(num1) - parseInt(num2);
};

function multiply(num1, num2){
    return parseInt(num1) * parseInt(num2);
};

function divide(num1, num2){
    return parseInt(num1) / parseInt(num2);
};

function operate(sign, num1, num2){
    if(sign === '+'){
        evaluate = add(num1, num2);
    }else if(sign === '-'){
        evaluate = subtract(num1, num2);
    }else if(sign === '*'){
        evaluate =  multiply(num1, num2);
    }else if(sign === '/'){
        evaluate = divide(num1, num2);
    }
    
}

const buttonListener = document.querySelectorAll('button');
    buttonListener.forEach((button) => {
        button.addEventListener('click', () => {
            if(!isNaN(parseInt(button.id)) && sign === ''){
                num1 += button.textContent;
            }else if(!isNaN(parseInt(button.id)) && sign !== ''){
                num2 += button.textContent
            }else if(button.id === '.' && sign === ''){
                num1 += '.'
            }else if(button.id === '.' && sign !== ''){
               num2 += '.'
            }else if(button.id === '/'){
                sign = button.id;
            }else if(button.id === '*'){
                sign = button.id;
            }else if(button.id === '-'){
                sign = button.id;
            }else if(button.id === '+'){
                sign = button.id;
            }else if(button.id === '='){
                operate(sign, num1, num2);
            }else if(button.id === 'clear'){
                num1 = '';
                num2 = '';
                sign = '';
                evaluate = '';
                document.getElementById('displayBottom').textContent = `0`;
            }

            if(evaluate === ''){
                document.getElementById('displayBottom').textContent = `${num1}` + ` ${sign}` + ` ${num2}`;
            }else if(evaluate !== ''){
                document.getElementById('displayBottom').textContent = `${num1}` + ` ${sign}` + ` ${num2}` + ` = ${evaluate}`;
            }
        })
    })

