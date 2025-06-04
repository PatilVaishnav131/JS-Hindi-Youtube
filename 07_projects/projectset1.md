# Projects related to DOM

## project  link 
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# solution code

## project code 1 

```javascript

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

## project code 2
```javascript
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