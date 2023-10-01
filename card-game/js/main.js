// async function getUsers(){
//  const res = await axios.get('https://hack-or-snooze-v3.herokuapp.com/Users')
// console.log(res);
// }



// async function signUp(name,username,password){
//     const res = await axios.post('https://hack-or-snooze-v3.herokuapp.com/signup', { user: {
//      name, username, password }})
//    console.log(res);
//    }
   
function logCardInfo(){

  let new_deck_url = "https://deckofcardsapi.com/api/deck/new/"
  
  
  axios.get(new_deck_url)
    .then(res => {
      console.log(res)
      return axios.get(`https://deckofcardsapi.com/api/deck/${res.data.deck_id}/draw/?count=1`)
    })
    .then(res => {
      console.log(res)
      const value =res.data.cards[0].value
      const suit =res.data.cards[0].suit
      console.log(`${value} OF ${suit}`)
    })
    .catch(err => console.log(err))
}


// Make a request to the deck of cards API to request a single card from a newly shuffled deck. Once you have the card, make a request to the same API to get one more card from the same deck.

// Once you have both cards, console.log the values and suits of both cards.


   
function logNewlyShuffledCardInfo(){

  let new_deck_url = "https://deckofcardsapi.com/api/deck/new/"
  
  
  axios.get(new_deck_url)
    .then(res => {
    
      return axios.get(`https://deckofcardsapi.com/api/deck/${res.data.deck_id}/shuffle/?remaining=true`)
    })
    .then(res => {
     
      return axios.get(`https://deckofcardsapi.com/api/deck/${res.data.deck_id}/draw/?count=1`)
    })
    .then(res => {

      const value =res.data.cards[0].value
      const suit =res.data.cards[0].suit
      console.log(`${value} OF ${suit}`)
    })
    .catch(err => console.log(err))
}
// https://deckofcardsapi.com/api/deck/<<deck_id>>/shuffle/
// https://deckofcardsapi.com/api/deck/<<deck_id>>/shuffle/?remaining=true
logNewlyShuffledCardInfo()
logNewlyShuffledCardInfo()
// Build an HTML page that lets you draw cards from a deck. When the page loads, go to the Deck of Cards API to create a new deck, and show a button on the page that will let you draw a card. Every time you click the button, display a new card, until there are no cards left in the deck.



$('#get-new-card').on('click', (e) =>{
  e.preventDefault()
  
  console.log('click on new card');
  let new_deck_url = "https://deckofcardsapi.com/api/deck/new/"
  
  
  axios.get(new_deck_url)
    .then(res => {
    
      return axios.get(`https://deckofcardsapi.com/api/deck/${res.data.deck_id}/shuffle/?remaining=true`)
    })
    .then(res => {
     
      return axios.get(`https://deckofcardsapi.com/api/deck/${res.data.deck_id}/draw/?count=1`)
    })
    .then(res => {
      console.log(res);
      var rNum = (Math.random()*4)-2;  
      const value =res.data.cards[0].value
      const suit =res.data.cards[0].suit
      let card = $('<img />').attr('src', res.data.cards[0].image )
      card.addClass('card')
      card.css({   
        '-webkit-transform': 'rotate('+rNum+'6deg)',
        '-moz-transform': 'rotate('+rNum+'2deg)'  
      })
      $('.card-container').append(card)
      console.log(`${value} OF ${suit}`, card)
    })
    .catch(err => console.log(err))

  
})