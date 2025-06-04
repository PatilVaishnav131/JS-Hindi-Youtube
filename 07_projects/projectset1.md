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