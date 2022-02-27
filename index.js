const showJoke = document.getElementById('joke');
const btn = document.getElementById('jokebtn');

btn.addEventListener('click', () => {
  generateJoke();
});

generateJoke();

// USING ASYNC/AWAIT
async function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json'
    }
  };

  const res = await fetch('https://icanhazdadjoke.com', config);

  const data = await res.json();
  console.log(data);
  showJoke.innerHTML = data.joke;
}

// USING .THEN()

// function generateJoke() {

//     const config = {
//         headers: {
//             "Accept":"application/json",
//         },
//     }

//     fetch("https://icanhazdadjoke.com",config)
//     .then((res) => res.json())
//     .then((data)=> {
//         showJoke.innerHTML = data.joke
//     })
// }
