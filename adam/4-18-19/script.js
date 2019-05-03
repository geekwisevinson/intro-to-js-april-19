const playerList = document.getElementById("playerList");
const playerInput = document.getElementById("playerInput");
const total = document.getElementById("total");

const players = [];

function addPlayer() {
    const player = { 
        name: playerInput.value,
        score: 0
    };

    players.push(player);

    renderPlayers();
}

function incrementScore(index) {
    players[index].score++;

    renderPlayers();
    renderTotal();
}

function decrementScore(index) {
    if (players[index].score === 0) return;

    players[index].score--;

    renderPlayers();
    renderTotal();
}

function renderTotal() {
    const totalScore = players.reduce(function(acc, player) {
        return acc + player.score;
    }, 0);

    total.innerHTML = `Total: ${totalScore}`;
}

function renderPlayers() {
    playerList.innerHTML = "";

    players.forEach(function(player, index) {
        const li = document.createElement("li");

        li.innerHTML = `
            <p>${player.name} : ${player.score}</p>
            <div className="score-buttons-container">
                <button onClick="incrementScore(${index})">+</button>
                <button onClick="decrementScore(${index})">-</button>
            </div>
        `;

        playerList.appendChild(li);
    });
}
