const getValue = (message) => {
    while (true) {
        const value = prompt(message);
        const isValid = !isNaN(value) && value !== "" && value !== null;
        if (isValid) return Number(value);
    }
}

const weight = getValue('Введіть вагу у кг');
const height = (getValue('Введіть зріст у см')) / 100;

const getIndex = (weight, height) => {
    const index = Number((weight / (height ** 2)).toFixed(1));
    return index;
}

const getResult = () => {
    const value = getIndex(weight, height);

    let message = '';
    if (value < 18.5) {
        message = `Недостатня вага`;
    } else if (value >= 18.5 && value <= 24.9) {
        message = `Нормальна вага`;
    }
    else if (value > 24.9 && value <= 29.9) {
        message = `Надмірна вага`
    }
    else {
        message = `Ожиріння`
    }
    alert(`Ваш індекс маси тіла: ${value}.\nКатегорія: ${message}`);
    return;
}

getResult();

