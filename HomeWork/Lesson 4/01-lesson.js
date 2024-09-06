const message = document.getElementById('message');
const buttonsContainer = document.querySelector('.buttons');
const score = document.getElementById('score');
const buttonReset = document.querySelector('[data-action="Reset"]');

const choices = ['Камінь', 'Ножниці', 'Папір'];

let userScore = 0;
let computerScore = 0;
let roundCount = 0;

const randomValue = arr => {
    return arr[Math.floor(Math.random() * arr.length)];
}

const handleButtonsContainer = (event) => {
    let result = '';

    if (event.target.nodeName !== "BUTTON") {
        return;
    }

    const computerChoice = randomValue(choices);
    const userChoice = event.target.dataset.action;

    if (userChoice === computerChoice) {
        result = 'Нічия!';
    }

    else if ((userChoice === 'Камінь' && computerChoice === 'Ножниці')
        || (userChoice === 'Ножниці' && computerChoice === 'Папір')
        || (userChoice === 'Папір' && computerChoice === 'Камінь')
    ) {
        result = 'Вітаємо, Ви виграли!'
        userScore += 1;
    } else {
        result = 'На жаль, Ви програли!';
        computerScore += 1;
    }

    roundCount += 1;
    
    message.innerText = `Ваш вибір: ${userChoice}\n Bибір комп'ютера: ${computerChoice}\n Результат: ${result}`;
    score.innerText = `Рахунок\n Ви: ${userScore}\n Комп'ютер: ${computerScore}\n Загальна кількість ранудів: ${roundCount}`;
    return;
}

const handleButtonReset = (e) => {
    message.innerText = 'Зробіть свій вибір';
    score.innerText = 'Рахунок';
    userScore = 0;
    computerScore = 0;
    roundCount = 0;
    return;
}

buttonsContainer.addEventListener('click', handleButtonsContainer);
buttonReset.addEventListener('click', handleButtonReset);
