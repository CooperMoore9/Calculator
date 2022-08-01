let num1 = '';
let num2 = '';
let sign = '';
let evaluate = '';

function add(num1, num2){
    return parseFloat(num1) + parseFloat(num2);
};

function subtract(num1, num2){
    return parseFloat(num1) - parseFloat(num2);
};

function multiply(num1, num2){
    return parseFloat(num1) * parseFloat(num2);
};

function divide(num1, num2){
    if(num2 == 0){
        alert(`Can't divide by 0`)
        return evaluate = '';
    }else{
        return parseFloat(num1) / parseFloat(num2);
    }
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

function youStupid(){
    if(num1 === ''){
        num1 = 0;
    }
    if(num2 === ''){
        num2 = '';
    }
    if(sign === ''){
        sign = '+';
    }
}

const buttonListener = document.querySelectorAll('button');
    buttonListener.forEach((button) => {
        button.addEventListener('click', () => {

            if(evaluate !== ''){
                num1 = evaluate;
                num2 = '';
                sign = '';
                evaluate = '';
            }


            if(button.id === 'clear'){
                num1 = '';
                num2 = '';
                sign = '';
                evaluate = '';
            }else if(!isNaN(parseInt(button.id)) && sign === ''){
                num1 += button.textContent;
            }else if(!isNaN(parseInt(button.id)) && sign !== '' && evaluate === ''){
                num2 += button.textContent;
            }else if(button.id === '.' && sign === ''){
                num1 += '.';
            }else if(button.id === '.' && sign !== ''){
               num2 += '.';
            }else if(button.id === '/'){
                youStupid()
                sign = button.id;
            }else if(button.id === '*'){
                youStupid()
                sign = button.id;
            }else if(button.id === '-'){
                youStupid()
                sign = button.id;
            }else if(button.id === '+'){
                youStupid()
                sign = button.id;
            }else if(button.id === 'plusOrMinus' && sign === ''){
                if(Math.sign(num1) == 1){
                    num1 = `-` + num1;
                }else{
                    num1 = num1.toString().slice(1);
                }
            }else if(button.id === 'plusOrMinus' && sign !== '' && evaluate === ''){
                if(Math.sign(num2) == 1){
                    num2 = `-` + num2;
                }else{
                    num2 = num2.toString().slice(1);
                }
            }else if(button.id === '='){
                if(num1 === ''){
                    num1 = 0;
                }
                if(num2 === ''){
                    num2 = num1;
                }
                if(sign === ''){
                    sign = '+';
                }

                operate(sign, num1, num2);
            }

            if(num1 === '' && num2 === '' && sign === '' && evaluate ===''){
                document.getElementById('displayBottom').textContent = '0';
                document.getElementById('displayTop').textContent = '';
            }else if(evaluate === ''){
                document.getElementById('displayBottom').textContent = `${num1}` + ` ${sign}` + ` ${num2}`;
            }else if(evaluate !== ''){
                document.getElementById('displayTop').textContent = `${num1}` + ` ${sign}` + ` ${num2} =`;
                document.getElementById('displayBottom').textContent = `${Math.round(evaluate * 10000) / 10000 }`;
            }
        })
    })
