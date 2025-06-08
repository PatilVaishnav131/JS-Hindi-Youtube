# Projects related to DOM

## project  link 
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# solution code

## project code 1 :- Background Color Changer 

```javascript
//we learnt about the event listener
const body = document.querySelector('body');
const buttons = document.querySelectorAll('.button');
buttons.forEach( function(button){
  console.log(button)
  button.addEventListener('click',function(e){
    console.log(e)
    console.log(e.target)
    if(e.target.id == "grey"){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id == "white"){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id == "yellow"){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id == "blue"){
      body.style.backgroundColor = e.target.id
    }
  })

})
```

## project code 2 :- BMI calculator
```javascript
//we learnt about the timing like when we have to store the element 
//also about the preventDefault()
const form = document.querySelector('form');
//if we try to get the value of height now we will get an empty value
//const height = document.querySelector("#height")
form.addEventListener('submit', function (e) {
  e.preventDefault();
  //now since we get the values of the height and the weight in string
  const height = parseInt(document.querySelector('#height').value);
  //console.log(height)
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  //check for the null values
  if (height <= 0 || height == '' || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  }else if (weight <= 0 || weight == '' || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  }
  else{
    //calculate the bmi
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //store the result
    results.innerHTML = `<span>The BMI is ${bmi} <br></span>`
    if(bmi<18.6){
      newNode = document.createTextNode("Sorry you are Under Weight !")
      document.querySelector("#results").appendChild(newNode)
    }

    else if(bmi>=18.6 && bmi<=24.9){
      newNode = document.createTextNode("Congrats your weight is Normal !")
      document.querySelector("#results").appendChild(newNode)
    }
    else{
      newNode = document.createTextNode("Sorry You are Overweight !")
      document.querySelector("#results").appendChild(newNode)
    }
  }

});

```

## project code 3 :- local time clock 
```javascript
const clock = document.getElementById('clock')

//to repeatedly call a function we use 
setInterval(function(){
  let date = new Date()
  clock.innerHTML = date.toLocaleTimeString()
} ,1000) //the time here is in milliseconds
```

## Project code 4 - Guess the number
```javascript
let randomNumber = parseInt(Math.random() * 100 + 1); //to generate a random number from 1 to 100
console.log(randomNumber);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    let guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('Please enter a number greater than 1');
  } else if (guess > 100) {
    alert('Please enter a number smaller than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${guess}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}
function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage('Your guess is right !');
    endGame();
  } else if (guess < randomNumber) {
    displayMessage('Your guess is TOO LOW..!');
  } else if (guess > randomNumber) {
    displayMessage('Your guess is too high..!');
  }
}
function displayGuess(guess) {
  //first clean the inner html of userinput
  userInput.value = '';
  guessSlot.innerHTML += `<p>${guess} ,</p>`;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}
function displayMessage(message) {
  lowOrHi.innerHTML = `${message}`;
}
function endGame() {
  userInput.innerHTML = '';
  userInput.setAttribute('disabled', ''); //to disable the input
  //Creating a button to start a new game
  p.classList.add('button');
  p.innerHTML = `<h2 id='newGame'> Start New Game </h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();

  // guessSlot.innerHTML = ''
  // remaining.innerHTML = "10"
}
function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}

```


## Project code 5 - Windows key key code and code 
```javascript
const insert = document.getElementById('insert');
window.addEventListener('keydown', (e) => {
  document.querySelector('#insert').innerHTML = `
    <table>
      <tr>
        <th>Key
        <th>Key code 
        <th>Code
      </tr>
      <tr>
        <th>${e.key === ' ' ? 'space' : e.key}
        <th>${e.keyCode}
        <th>${e.code}
      </tr>
    </table>
  `;
});
```

## Project  code 6 - random BG changer
```javascript
//to generate a random color we need to generate random numbers from 0 to 16
const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let hexCode = '#';
  for (let i = 0; i < 6; i++) {
    hexCode += hex[Math.floor(Math.random() * 16)];
  }
  return hexCode;
};
console.log(randomColor());
//document.body.style.backgroundColor = `${randomColor()}`;

const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
let intervalId;

changeBG = function () {
  document.body.style.backgroundColor = `${randomColor()}`;
};
start.addEventListener('click', function (e) {
  if (!intervalId) {
    //this will only write the values when the value is null !
    intervalId = setInterval(changeBG, 1000); //if we not place the check condition it wil overwrite the set Interval and cannont be clearead
  }
});
stop.addEventListener('click', function (e) {
  clearInterval(intervalId);
  intervalId = null;
});
```

## Project code 7 - The TypeWriter Effect
```javascript
function delay(ms){
    return new Promise( function(resolve, reject){
        setTimeout(resolve , ms);
    })
}

async function typeWritterEffect(message , elementId , speed){
    const element = document.getElementById(elementId)
    element.textContent = ""

    for(let i=0 ; i< message.length ; i++){
        element.textContent += message[i]
        await delay(speed)
    }
}


const sentence = "Hi i am a newbie learning JavaScript !";
typeWritterEffect(sentence,"typewriter" ,100)
```


