const cardValues = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

function asignValues(suit) {
    return cardValues.map((value, index) => {
        let count = index + 2;
        const faceCards = ["J", "Q", "K"];

        if (faceCards.includes(value)) count = 10;
        if (value === "A") count = 11;

        return { suit, value, count };
    })
}

let deck = new Array(...asignValues("Hearts"), ...asignValues("Diamonds"), ...asignValues("Spades"), ...asignValues("Clubs"));

function shuffle(deck) {
    let currentIndex = deck.length, tempValue, randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        tempValue = deck[currentIndex];
        deck[currentIndex] = deck[randomIndex];
        deck[randomIndex] = tempValue;
    }

    return deck;
}

function displayCards() {   
    const cardMarkupContainer = document.createElement("div");
    cardMarkupContainer.innerHTML = deck.map((card) =>  `
        <div class="card">
            <h2>${card.value} ${card.suit}</h2>
        </div>
    `);
    document.body.appendChild(cardMarkupContainer);
}


deck = shuffle(deck);
displayCards();
