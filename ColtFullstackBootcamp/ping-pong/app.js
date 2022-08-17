const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}

const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}

const reset = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playTo');


let winningScore = 3;
let isGameOver = false;

function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('winner');
            opponent.display.classList.add('loser');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}

function resetState() {
    p1.score = 0;
    p2.score = 0;
    p1.display.textContent = p1.score;
    p2.display.textContent = p2.score;
    isGameOver = false;
    p1.display.classList.remove('winner', 'loser');
    p2.display.classList.remove('winner', 'loser');
    p1.button.disabled = false;
    p2.button.disabled = false;
}


p1.button.addEventListener('click', function(e) {
    updateScores(p1, p2);
});


p2.button.addEventListener('click', function(e) {
    updateScores(p2, p1)
});

winningScoreSelect.addEventListener('change', function() {
    winningScore = parseInt(this.value);
    resetState();
})


reset.addEventListener('click', resetState);