let game = {
    "min": 1,
    "max": 10
};

let result = false; // switch between classes for gameOver function

document.addEventListener('DOMContentLoaded', () => {
    game.output = document.querySelector('.output');
    game.message = document.querySelector('.message');
    game.guessInput = document.querySelector('input');
    game.button = document.querySelector('button');
    game.button.addEventListener('click', guessValue);
    init();
});

function guessValue() {
    if (game.button.classList.contains('restart-win') || game.button.classList.contains('restart-loose')) {
        init();
        game.button.innerHTML = 'Guess';
        game.guessInput.style.display = 'block';
        if (result) {
            game.button.classList.remove('restart-win');
            return;
        } else {
            game.button.classList.remove('restart-loose');
            return;
        }
    } else {
        game.guesses++;
        let userGuess = game.guessInput.value;
        userGuess = parseInt(userGuess);
        let checkHolder = userGuess > game.number ? {
            "message": 'Try Lower!',
            "color": 'purple'
        } : {
            "message": 'Try Higher!',
            "color": 'skyblue'
        };
        if (isNaN(userGuess)) {
            message('Only enter digits', 'red');
        } else if (userGuess === game.number) {
            result = true;
            message('Very good, you guessed the number!', 'lightgreen');
            gameOver();
        } else if (game.guesses === 5) {
            message('You loose!', 'red');
            gameOver();
        } else {
            message('Wrong! ' + checkHolder.message, checkHolder.color);
        }
        game.guessInput.value = '';
    }

}

function gameOver() {
    game.button.innerHTML = 'Restart Game';
    game.guessInput.style.display = 'none';
    if (result) {
        game.button.classList.add('restart-win');
    } else {
        game.button.classList.add('restart-loose');
    }

}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function init() {
    game.guesses = 0;
    game.number = randomNumber(game.min, game.max);
    let tempMessage = 'Game initialized! Guess the number from ' + game.min + " to " + game.max + "! You have got " + 5 + " attempts!";
    message(tempMessage, 'violet');

}

function message(mes, col) {
    game.message.innerHTML = mes;
    game.message.style.color = col || 'black';
}

























