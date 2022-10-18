let sum = 0;
let cards = [];
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

//functio to get randomnumber for the cards
function getrandom() {
 let randomdata = 0;
 randomdata = Math.floor(Math.random() * 13 ) + 1;
 if (randomdata === 1) {
        return 11;
    }else if (randomdata > 10 ){
        return 10;
    }else {
        return randomdata;
}
}

//function to initilize cards and start game
function startgame() {
    let card1 = getrandom();
    let card2 = getrandom();
    cards = [card1,card2];  
    sum = card1 + card2 ;
    isAlive = true;
    rendergame();
}

//main function to rendergame and check card count for blakcjack
function rendergame() {
    cardsEl.textContent = "CARDS : " ;
     
    for (let i =0 ; i < cards.length;i++){
        cardsEl.textContent += cards[i] + " ";
    }

    sumEl.textContent = "SUMS : " + sum;

    if (sum <= 20) {
        message = "Do you want to draw a new card? ";
    } else if (sum === 21 ) {
        message = "Blackjack! Blackjack! Blackjack!";
        hasBlackJack = true ;     
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }

    messageEl.textContent = message;
}

//function to draw a new card 
function newgame(){
    let card3 = getrandom();
    sum += card3 ;
    cards.push(card3);
    rendergame();
}