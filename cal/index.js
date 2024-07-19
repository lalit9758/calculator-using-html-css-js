function add(value, resultField) {
    resultField.value += value;
}

function calculate(resultField) {
    try {
        resultField.value = eval(resultField.value);
    } catch (error) {
        resultField.value = 'Error';
    }
}

function clearAll(resultField) {
    resultField.value = '';
}
