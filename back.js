// const fetch = require('node-fetch');

// const url = 'https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem';

// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': '624a8a7e7dmshba6e114f2caa17fp143498jsn30ad81856f4a',
//     'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
//   }
// }; 

// fetch(url, options)
// 	.then(res => res.json())
// 	.then(json => console.log(json))
// 	.catch(err => console.error('error:' + err));

const x = document.getElementById("sad");
console.log(x);
x.onclick=()=>{
    document.getElementById("recc").innerHTML="HELLO";
}


