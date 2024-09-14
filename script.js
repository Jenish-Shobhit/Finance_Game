
function startGame() {
    window.location.href = './game.html';
}

function createCoins() {
    const numCoins = 20;
    const container = document.querySelector('.container');

    for (let i = 0; i < numCoins; i++) {
        const coin = document.createElement('div');
        coin.classList.add('coin');
        coin.style.left = `${Math.random() * 100}%`;
        coin.style.top = `${Math.random() * 100}%`;
        coin.style.animationDelay = `${Math.random() * 3}s`;
        container.appendChild(coin);
    }
}

document.addEventListener('DOMContentLoaded', createCoins);
