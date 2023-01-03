
// let button = document.querySelector('#button');

// button.addEventListener('click', ()=>{
//     let firstshoes = 125
//     let counter = 0
//     counter = counter + 1
//     var firstshoes1 = firstshoes * counter
//     document.getElementsbyId('zero').innerHTML = counter
//     document.getElementbyId('price').innerHTML = firstshoes1

    
//    // rest code here
// })

// let firstshoes = 125;
// let counter = 0;
// document.querySelector('#plusbutton').onClick = function(){
//     counter = counter + 1;
//     var firstshoes1 = firstshoes * counter;
//     document.getElementsbyId('zero').innerHTML = counter;
//     document.getElementbyId('price').innerHTML = firstshoes1;

// }

let adder = document.querySelector('plusbutton');
let zero = document.getElementById("zero");
let prices = document.getElementById('price');

var f = 125;
var count =  0;
var checker = 0;

// if(count <= 0 ) {
//     document.getElementsByClassName("minusbutton").disabled = true;

// }
function testFunction(){
  count++;
  zero.innerHTML = count;
  checker = "$" + count * f;
  prices.innerHTML =  checker;      
}

let minus = document.querySelector('minusbutton');
let zeros = document.getElementById("zero");


function testminusFunction(){
      
    zeros.innerHTML = count;
    checker = count * f;
    prices.innerHTML =  "$" +checker;  
    if(count> 0){
      count--;
    } 


}


let counter2 = document.getElementById('counter');

function shoppingbutton(){
  counter2.innerHTML = count;
  if(count > 0){
    alert("Thank You For Your Purchase");
  }
  
    
    
    
}
function myFunction() {
    var x = document.getElementsByClassName("counter-container");
    if (x.style.display == "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }