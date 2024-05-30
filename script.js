function clearScreen() {
    document.getElementById('result').value = '';
}

function deleteLast() {
    let result = document.getElementById('result').value;
    document.getElementById('result').value = result.slice(0, -1);
}

function appendToResult(value) {
    document.getElementById('result').value += value;
}

function calculateResult() {
    try {
        let result = eval(document.getElementById('result').value);
        document.getElementById('result').value = result;
    } catch (e) {
        alert('Ошибка в выражении');
    }
}

function calculateTrigFunction(func) {
    let value = parseFloat(document.getElementById('result').value);
    let result;
    switch (func) {
        case 'sin':
            result = Math.sin(value);
            break;
        case 'cos':
            result = Math.cos(value);
            break;
        case 'tan':
            result = Math.tan(value);
            break;
        case 'cot':
            if (value === 0) {
                alert('Ошибка: котангенс не определен при значении 0');
                return;
            }
            result = 1 / Math.tan(value);
            break;
        default:
            alert('Неизвестная функция: ' + func);
            return;
    }
    document.getElementById('result').value = result;
}


