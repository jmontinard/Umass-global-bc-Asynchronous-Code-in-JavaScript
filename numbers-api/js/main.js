// async function getUsers(){
//  const res = await axios.get('https://hack-or-snooze-v3.herokuapp.com/Users')
// console.log(res);
// }



// async function signUp(name,username,password){
//     const res = await axios.post('https://hack-or-snooze-v3.herokuapp.com/signup', { user: {
//      name, username, password }})
//    console.log(res);
//    }
   


// let planet;

// $.getJSON("https://swapi.dev/api/planets/1/", res =>{
//   planet = res;
//   console.log(planet);

//   $.getJSON(planet.residents[0], res =>{
//     resident = res;
//     console.log(resident);
  
//     $.getJSON(resident.films[0], res =>{
//       films = res;
//       console.log(films);
      
//     })
//   })
  
// })




let url = 'https://swapi.dev/api/planets/1/'
// let ourFirstPromise = axios.get(url)
// // console.log(ourFirstPromise);
// ourFirstPromise.then((res)=> console.log(res.data))
// ourFirstPromise.catch((err)=> console.log( 'rejected', err))

// console.log('im a the last line');



// axios.get(url)
// .then(res=> {
//   console.log(res);
//   axios.get(res.data.residents[0])
//   .then((res)=>{
//     console.log(res);
//   })
// })
// .catch((err)=> console.log( 'rejected', err))




// axios.get(url)
// .then(res=> {
//   console.log('1st prom resolved');
//   console.log(res.data);
//   return axios.get(res.data.residents[0])
// })
// .then(res=>{
//   console.log('2nd prom resolved');

//   console.log(res.data);
//   return axios.get(res.data.films[0])

// })
// .then(res=>{
//   console.log('3rd prom resolved');

//   console.log(res.data);
//   // return axios.get(res.data.films[0])

// })
// .catch((err)=> console.log( 'rejected', err))

// let baseURL = "https://pokeapi.co/api/v2/pokemon";

// $.ajax(`${baseURL}/1/`, {
//   success: p1 => {
//     console.log(`The first pokemon is ${p1.name}`);
//     $.ajax(`${baseURL}/2/`, {
//       success: p2 => {
//         console.log(`The second pokemon is ${p2.name}`);
//         $.ajax(`${baseURL}/3/`, {
//           success: p3 => {
//             console.log(`The third pokemon is ${p3.name}`);
//           },
//           error: err => console.log(err)
//         });
//       },
//       error: err => console.log(err)
//     });
//   },
//   error: err => console.log(err)
// });


// function wait3sex () {
// return new Promise((resolve, reject) => {
//   setTimeout(resolve, 3000)
// })
// }


// wait3sex()
// .then(() => console.log('wait 3 sec'))
// .catch(err => console.log('error ',err))

// // const h1 = $('h1')
// const h1 = document.querySelector('h1')
// function changeColor(el, color) {
//   return new Promise((resolve, reject) => {
//     setTimeout(()=>{
//       el.style.color = color
//       resolve()
//     },1000) 
//   })
// }

// changeColor(h1,'teal')
//  .then(()=>{
//   changeColor(h1, 'red')
//  })
// console.log(h1)


function get(url){
  const request = new XMLHttpRequest();
  return new Promise((resolve,reject)=>{
    request.onload = function(){
      if(request.readyState !== 4) return;

      // check statsu code

      if(request.status >=200 && request.status < 300){
        resolve({
          data: JSON.parse(request.response),
          status: request.status,
          request: request,
          // headers: request.getAllResponseHeaders()
        })
      }else{
        reject({
          msg: 'Server Error',
          status: request.status,
          request: request
        });
      }
    }
    request.onerror = function handleError(){
      // console.log("Network Error");
      request = null
      reject('Network error')
    }

    request.open('GET', url)
    request.send()
  })
}


// get('https://swapi.dev/api/planets/1/')
// .then(res =>{
//   console.log(res);
// })
// .then(err =>{
//   console.log(err );
// })

// $.get('http://numbersapi.com/12?json', function(data) {
//     // $('#number').text(data);
//     // let newData = JSON.parse(data)
//     console.log(data);
// });



// let fourPokemonPromises = [];

// for (let i = 1; i < 5; i++) {
//   fourPokemonPromises.push(
//     axios.get(`https://pokeapi.co/api/v2/pokemon/${i}/`)
//   );
// }

// Promise.all(fourPokemonPromises)
//   .then(pokemonArr => (
//     //  console.log(pokemonArr)
//     pokemonArr.forEach(p => console.log(p.data.name))
//     ))
//   .catch(err => console.log(err));


  let fourPokemonRace = [];

for (let i = 1; i < 5; i++) {
  fourPokemonRace.push(
    axios.get(`https://pokeapi.co/api/v2/pokemon/${i}/`)
  );
}

Promise.race(fourPokemonRace)
  .then(pokemon => console.log(`${pokemon.data.name} won!`))
  .catch(err => console.log(err));


  // const numsArr =[12,3,18]
 

  //   for(num of numsArr){
  //     $.get(`http://numbersapi.com/${num}?json`, function(data) {

  //           $('body').append(`<p>${data.text}</p>`)
  //           console.log(data);
  //       });

  //   }

  function getfavNumfact(){
    $.get('http://numbersapi.com/12?json', function(data) {
      $('#fav-list').append(`<li>${data.text}</li>`)
      console.log(data);
  });

  }
  getfavNumfact()



    let numOfFactsToGet = 4
    function getFacts(num){
      for(let i = 0; i <= numOfFactsToGet; i++){
        $.get(`http://numbersapi.com/${i}?json`, function(data) {
          $('#rand-list').append(`<li>${data.text}</li>`)
          });
  
      }
    }

    getFacts(numOfFactsToGet)



    function createNewFact(fact){
      $('#fourFav-list').append(`<li>${fact}</li>`)
    }
    

    function getfourFavNumFacts(){

      axios.get('http://numbersapi.com/12/?json')
      .then(res =>{
        
        
        fact = res.data.text;
        createNewFact(fact)
        return axios.get('http://numbersapi.com/12/?json')
      })
      .then(res =>{
        
        fact = res.data.text;
        createNewFact(fact)
        return axios.get('http://numbersapi.com/12/?json')
      })
      .then(res =>{
        fact = res.data.text;
        createNewFact(fact)
        
        return axios.get('http://numbersapi.com/12/?json')
      })
      .then(res =>{
        
        fact = res.data.text;
        createNewFact(fact)
        
      })
      .catch(err=> console.log(err))
    }

    getfourFavNumFacts()