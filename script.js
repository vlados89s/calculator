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

function calculateFunction(func) {
    try {
        let result = parseFloat(document.getElementById('result').value);
        if (isNaN(result)) {
            alert('Пожалуйста, введите число перед использованием функции.');
            return;
        }

        switch (func) {
            case 'sin':
                result = Math.sin(result);
                break;
            case 'cos':
                result = Math.cos(result);
                break;
            case 'tan':
                result = Math.tan(result);
                break;
            case 'cot':
                result = 1 / Math.tan(result);
                break;
            default:
                alert('Неизвестная функция');
                return;
        }

        document.getElementById('result').value = result;
    } catch (e) {
        alert('Ошибка при вычислении функции');
    }
}

