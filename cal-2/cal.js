var displayValue = '';

function appendValue(value) {
    displayValue += value;
    document.display.result.value = displayValue;
}

function handleButton(action) {
    switch(action) {
        case 'clear':
            displayValue = '';
            break;
        case 'backspace':
            displayValue = displayValue.slice(0, -1);
            break;
        case 'calculate':
            try {
                displayValue = eval(displayValue.replace('^', '**')).toString();
            } catch (e) {
                displayValue = 'Error';
            }
            break;
        case 'pi':
            displayValue = '3.14159265359';
            break;
        case 'sqrt':
            displayValue = Math.sqrt(eval(displayValue)).toString();
            break;
        case 'log':
            displayValue = Math.log(eval(displayValue)).toString();
            break;
        case 'square':
            displayValue = Math.pow(eval(displayValue), 2).toString();
            break;
        case 'plusMinus':
            displayValue = (-parseFloat(displayValue)).toString();
            break;
        case 'sin':
            displayValue = Math.sin(eval(displayValue)).toString();
            break;
        case 'cos':
            displayValue = Math.cos(eval(displayValue)).toString();
            break;
        case 'tan':
            displayValue = Math.tan(eval(displayValue)).toString();
            break;
    }
    document.display.result.value = displayValue;
}
