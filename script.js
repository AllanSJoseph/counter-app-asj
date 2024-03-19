"use strict"
let value = 0;

document.querySelector('.screen').addEventListener('click', function reset(){

    document.querySelector('.screen').textContent = "0";
})

document.querySelector('.decrement').addEventListener('click', function decrementValue(){
    
    value = document.querySelector('.screen').textContent;

    value--;

    if (value < 0){
        alert("Cannot Decrement below 0");
    }else{
        document.querySelector('.screen').textContent = value;
    }
})


document.querySelector('.increment').addEventListener('click', function decrementValue(){
    
    value = document.querySelector('.screen').textContent;
    
    value++;

    document.querySelector('.screen').textContent = value;
})