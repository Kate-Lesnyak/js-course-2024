const button = document.getElementById('button');
const score = document.getElementById('score');
const statistic = document.getElementById('statistic');
const reset = document.getElementById('reset');

const operations = ['+', '-', '*', '/'];
let correctAnswer = 0;
let unCorrectAnswer = 0;
let attempts = 0;
const maxAttempts = 5;

const randomNumber = number => Math.floor(Math.random() * number) + 1;

const randomValue = arr => arr[Math.floor(Math.random() * arr.length)];

function getValue(message) {
    while (true) {
        let value = prompt(message);
        // let isValid = !isNaN(value) && value !== "" && value !== null;
        let isValid = !isNaN(value) && value !== "";
        if (isValid) return Number(value);
    }
}

const handleButtonClick = () => {
    const operation = randomValue(operations);
    const numberFirst = randomNumber(10);
    const numberSecond = randomNumber(10);

    let result;

    switch (operation) {
        case '+':
            result = numberFirst + numberSecond;
            break;
        case '-':
            result = numberFirst - numberSecond;
            break;
        case '*':
            result = numberFirst * numberSecond;
            break;
        case '/':
            result = numberSecond !== 0 ? (numberFirst / numberSecond).toFixed(2) : 'Ділити на нуль не можна';
            break;
    }

    const userAnswer = getValue(`Надайте відповідь на вираз: ${numberFirst} ${operation} ${numberSecond}`)

    if (!userAnswer) {
        alert('Ви вийшли з гри');
        return;
    }

    if (userAnswer === result) {
        correctAnswer += 1;
    } else {
        unCorrectAnswer += 1;
    }

    attempts += 1;

    statistic.innerText = `Правильні відповіді: ${correctAnswer}\n Неправильні відповіді: ${unCorrectAnswer}\n Залишилось спроб: ${maxAttempts - attempts}`;

    if (attempts === maxAttempts) {
        alert('Кількість спроб вичерпано');
        button.disabled = true;
    }
}

const handleButtonResetClick = () => {
    button.disabled = false;
    score.innerText = 'Підсумковий результат';
    statistic.innerHTML = '';
    correctAnswer = 0;
    unCorrectAnswer = 0;
    attempts = 0;
}

button.addEventListener('click', handleButtonClick);
reset.addEventListener('click', handleButtonResetClick);