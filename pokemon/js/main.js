const baseURL = "https://pokeapi.co/api/v2/pokemon"

function getPokemon(url){

axios.get(`${url}/?limit=1000`)
  .then(res =>{
    
    console.log(res)
  for(let i = 0; i < res.data.results.length; i++){
      poke = res.data.results[i]
      console.log(`name: ${poke.name}, url: ${poke.url}`);
    }
  })
  .catch((err) => console.log(err))
}

// getPokemon(baseURL)

  // Once you have names and URLs of all the pokemon, pick three at random and make requests to their URLs. Once those requests are complete, console.log the data for each pokemon.

  const randP = []
    for (let i = 0; i < 3; i++){
      let randPoke = Math.floor(Math.random() * 20)
      randP.push(randPoke)
    }
    console.log(randP);

  function get3randPokemon(){
      for(num of randP){
        axios.get(`https://pokeapi.co/api/v2/pokemon/${num}/?limit=1000`)
        .then(res =>{
          console.log(res.data)
        })
        .catch((err) => console.log(err))
      }
    }
    
    // get3randPokemon()



//     Start with your code from 2, but instead of logging the data on each random pokemon, store the name of the pokemon in a variable and then make another request, this time to that pokemon’s species URL (you should see a key of species in the data). Once that request comes back, look in the flavor_text_entries key of the response data for a description of the species written in English. If you find one, console.log the name of the pokemon along with the description you found.

// Example: “ducklett: They are better at swimming than flying, and they happily eat their favorite food, peat moss, as they dive underwater.”



// function get3randPokemonInfo(){
  
//   for(num of randP){
//     axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
//     .then(res =>{
  
//       let speciesUrl = res.data.species.url
//       console.log(res.data)
//       return axios.get(speciesUrl)
//     })
//     .then(res => {
    
//       let flavor_text_entries = res.data.flavor_text_entries[1]
     
//       if(flavor_text_entries){
//         console.log(`${res.data.name}: ${flavor_text_entries.flavor_text}`);
//       }

//     })
//     .catch((err) => console.log(err))
//   }

// }

// get3randPokemonInfo()



$('#get-new-poke').on('click',(e) => {

  
  e.preventDefault()
  let species;
  let src;
  for(num of randP){
    axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
    .then(res =>{
  
      let speciesUrl = res.data.species.url
       species = res.data.sprites.front_default
      //  console.log(species);
      console.log(res.data)
      return axios.get(speciesUrl)
    })
    .then((res) => {
      console.log(res.data)
    
      let flavor_text_entries = res.data.flavor_text_entries[1]
      let name = res.data.name 
     
      let imgSrc = axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)

      .then(res => {
       src = res.data.sprites.front_default
       console.log(src, res.data);
      //  return  res.data.sprites.front_default
       if(flavor_text_entries){

        let card = $(`<div class="poke-card">
        <h1 class="poke-name">${name}</h1>
        <img src=${res.data.sprites.front_default} />
        
        <p class="poke-fl-text">${flavor_text_entries.flavor_text}</p>
  
      </div>`)
        $('#card-container').append(card)
        // console.log(`${res.data.name}: ${flavor_text_entries.flavor_text}`, res.data);
      }

      })
      // .catch(err => console.log(err))
    })
    .catch((err) => console.log(err))
  }

})