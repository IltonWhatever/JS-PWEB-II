// Entrada dos dados
let currentInput = document.querySelector('.currentInput');
// Dados da tela
let answerScreen = document.querySelector('.answerScreen');
// 
let buttons = document.querySelectorAll('button');
let erasebtn = document.querySelector('#erase');
let clearbtn = document.querySelector('#clear');
let evaluate = document.querySelector('#evaluate');

// Vetor onde irar ser armazenado os dados presentes na tela
let realTimeScreenValue = [];

// Função Limpar
clearbtn.addEventListener('click', () =>{
    realTimeScreenValue = [''];
    answerScreen.innerHTML = 0;
    currentInput.className = 'currentInput';
    answerScreen.className = 'answerScreen';
    answerScreen.style.color = ' rgba(150, 150 , 150, 0.87)';
});

//  Função Responsavel por "Ouvir o pressionar de botões", além disso ela 
// identifica qual botão foi pressionado

buttons.forEach((btn) => {

    btn.addEventListener('click', () =>{

        // Verificando se o usuario digitou virgula mais de uma vez para cada input
        if (!btn.id.match('erase')) {
            if (operador(btn.value)){
            }else{
                // Responsavel por exibir na tela o valor do botão pressionado
                realTimeScreenValue.push(btn.value)
                currentInput.innerHTML = realTimeScreenValue.join('');
            }

            if (btn.classList.contains('num_btn')){
                answerScreen.innerHTML = eval(realTimeScreenValue.join(''));
            }
        }

        if (btn.id.match('erase')){            
            realTimeScreenValue.pop();
            currentInput.innerHTML = realTimeScreenValue.join('');
            answerScreen.innerHTML = eval(realTimeScreenValue.join(''));
        }

        if (btn.id.match('evaluate')){
            currentInput.className = 'answerScreen';
            answerScreen.className = 'currentInput';
            answerScreen.style.color = 'white';
        }

        if (typeof eval(realTimeScreenValue.join('')) == 'undefined'){
            answerScreen.innerHTML = 0;
        }

    });
});

function operador(valorBotao){
    if(valorBotao == '.' && realTimeScreenValue.includes('.',[,])){
        return true;
    }else if(valorBotao == '*' && realTimeScreenValue.includes('*',[,])){
        return true;
    }else if(valorBotao == '+' && realTimeScreenValue.includes('+',[,])){
        return true;
    }else if(valorBotao == '-' && realTimeScreenValue.includes('-',[,])){
        return true;
    }else if(valorBotao == '/' && realTimeScreenValue.includes('/',[,])){
        return true;
    }else if(valorBotao == '%' && realTimeScreenValue.includes('%',[,])){
        return true;
    }
};