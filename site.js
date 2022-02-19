"use strict";

const burger = document.getElementById("fillings");

// const addTomato = document.querySelectorAll("add")[0];
const addTomato = document.getElementById("addTomato");
const addLettuce = document.querySelectorAll(".add")[1];
const addCheese = document.querySelectorAll(".add")[2];
const addMeat = document.querySelectorAll(".add")[3];

// const removeTomato = document.querySelectorAll("remove")[0];
const removeTomato = document.getElementById("removeTomato");
const removeLettuce = document.querySelectorAll("remove")[1];
const removeCheese = document.querySelectorAll("remove")[2];
const removeMeat = document.querySelectorAll("remove")[3];

let price = 5;

addGlobalEventListener(addTomato, "tomato", 2);
removeGlobalEventListener(removeTomato, "tomato", 2);

function add(style, priceToAdd){
    const toAdd = document.createElement("div");
    toAdd.classList.add(style);
    toAdd.innerHTML = "tomato";
    burger.appendChild(toAdd);
    price += priceToAdd;
    updatePrice();
}

function addGlobalEventListener(element, style, priceToAdd){
    element.addEventListener('click', function(){
        add(style, priceToAdd);
    })
}

function removeGlobalEventListener(element, style, priceToDecrement){
    element.addEventListener('click', function(){
        const toRemove = document.getElementsByClassName(style)[0];
        burger.removeChild(toRemove);
        price -= priceToDecrement;
        updatePrice();
    })
}

function updatePrice(){
    const updatedPrice = document.getElementById("price");
    updatedPrice.innerHTML = `Price: ${price}`;
}