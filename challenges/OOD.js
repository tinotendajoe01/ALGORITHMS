/**
 * Discuss object-oriented class design of a game of Black Jack.
 *  What classes and interfaces would you use? 
 * What would be the relation between them?

Give a high level explanation of different methods and their functionalities



 * In a game of Black Jack, we can have the following classes and interfaces:

Card: Represents a single card with a suit and a rank.
Deck: Represents a deck of cards and provides methods to shuffle and deal cards.
Hand: Represents a player's hand and provides methods to add cards, calculate the hand's value, and check if the hand is a bust or a blackjack.
Player: Represents a player with a hand and methods to perform actions like hit and stand.
Dealer: Inherits from the Player class and adds dealer-specific actions like following the dealer's rule (hit until 17 or higher).
BlackJackGame: Represents the game itself, managing the players, dealer, and the game flow.
The relationships between these classes are:

A Deck contains 52 Card objects.
A Hand contains a collection of Card objects.
A Player has a Hand instance.
Dealer is a subclass of Player.
BlackJackGame has a Dealer, a list of Player instances, and a Deck instance.
Here's a high-level explanation of different methods and their functionalities:

Card: Constructor to initialize a card with a suit and rank.
Deck: Constructor to create a standard deck of 52 cards, shuffle to shuffle the deck, and deal to deal a card from the top of the deck.
Hand: addCard to add a card to the hand, getValue to calculate the value of the hand, isBust to check if the hand is a bust, and isBlackJack to check if the hand is a blackjack.
Player: Constructor to initialize a player with a name and an empty hand, hit to draw a card from the deck and add it to the hand, and stand to end the player's turn.
Dealer: Inherits from Player and overrides the hit and stand methods to follow the dealer's rule (hit until 17 or higher).
BlackJackGame: Constructor to create a game with a dealer, players, and a deck, and methods to manage the game flow, like dealing initial cards, managing player turns, and determining the winner.
 

Card
The Card class represents a single playing card with a suit and a face value. 
It can have methods to get the suit and face value of the card.
*/

class Card {
  constructor(suit, faceValue) {
    this.suit = suit;
    this.faceValue = faceValue;
  }

  getSuit() {
    return this.suit;
  }

  getFaceValue() {
    return this.faceValue;
  }
}
/**
 * Deck
The Deck class represents a deck of cards.
 It can have methods to shuffle the deck,
  deal a card,
   and check if the deck is empty.


 */

class Deck {
  constructor() {
    this.cards = this.generateDeck();
  }

  generateDeck() {
    // Generate a deck of 52 cards
  }

  shuffle() {
    // Shuffle the deck
  }

  dealCard() {
    // Deal a card from the deck
  }

  isEmpty() {
    // Check if the deck is empty
  }
}

/**
 * Hand
The Hand class represents a hand of cards.
 It can have methods to add a card to the hand,
  get the cards in the hand, 
  and calculate the value of the hand.
 */
class Hand {
  constructor() {
    this.cards = [];
  }

  addCard(card) {
    // Add a card to the hand
  }

  getCards() {
    // Get the cards in the hand
  }

  getValue() {
    // Calculate the value of the hand
  }
}
/**
 * BlackjackHand
The BlackjackHand class extends the Hand class and is specific to the game of Blackjack.
 It can have methods to determine if the hand is a Blackjack or if the hand is busted.
 */
class BlackjackHand extends Hand {
  constructor() {
    super();
  }

  isBlackjack() {
    // Check if the hand is a Blackjack
  }

  isBusted() {
    // Check if the hand is busted (value over 21)
  }
}
/**
 * Player
The Player class represents a player in the game.
 It can have methods to create a new game, add a hand, and get the hands.
 */
class Player {
  constructor() {
    this.hands = [];
  }

  newGame() {
    // Create a new game
  }

  addHand(hand) {
    // Add a hand to the player
  }

  getHands() {
    // Get the hands of the player
  }
}
/**
 * Dealer
The Dealer class represents the dealer in the game.
 It can extend the Player class and have additional methods specific to the dealer,
  such as following the dealer's rule for hitting or standing.
 */
class Dealer extends Player {
  constructor() {
    super();
  }

  followRules() {
    // Follow the dealer's rule for hitting or standing
  }
}
/**
 * Game
The Game class represents the main game logic. 
It can have methods to deal initial cards,
 let the player make decisions, 
 let the dealer follow the rules, 
 and determine the winner of the game.
 */
class Game {
  constructor() {
    this.deck = new Deck();
    this.player = new Player();
    this.dealer = new Dealer();
  }

  dealInitialCards() {
    // Deal the initial cards
  }

  playerDecision() {
    // Let the player make decisions (hit or stand)
  }

  dealerPlay() {
    // Let the dealer follow the rules
  }

  determineWinner() {
    // Determine the winner of the game
  }
}
