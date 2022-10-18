let card1 = 10;
let card2 = 11;
let sum = 0;
let cards = [card1,card2];
let hasBlackJack = false;
let isAlive = true;
let message = " ";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

sum = card1 + card2 ;

function startgame() {
 rendergame();
}

function rendergame() {
    cardsEl.textContent = "CARDS : " ;
    sumEl.textContent = "SUMS : " + sum;
    
    for (let i =0 ; i < cards.length;i++){
        cardsEl.textContent += cards[i] + " ";
    }
    if(sum <= 20) {
        message = "Do you want to draw a new card? ";
    } if (sum === 21 ) {
        message = "You've got Blackjack!!!";
        hasBlackJack = true ;     
    } else {
        message = "No Blackjack ! oops";
        isAlive = false;
    }
    messageEl.textContent = message;
}

function newgame(){
    let card3 = 2 ;
    sum += card3 ;
    cards.push(card3);
    rendergame();
}