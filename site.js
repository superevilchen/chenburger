"use strict";

const burger = document.getElementById("fillings");

const addTomato = document.getElementsByClassName("add")[0];
const addLettuce = document.getElementsByClassName("add")[1];
const addCheese = document.getElementsByClassName("add")[2];
const addMeat = document.getElementsByClassName("add")[3];

const removeTomato = document.getElementsByClassName("remove")[0];
const removeLettuce = document.getElementsByClassName("remove")[1];
const removeCheese = document.getElementsByClassName("remove")[2];
const removeMeat = document.getElementsByClassName("remove")[3];

const restart = document.getElementById("restart");

let price = 5;

addGlobalEventListener(addTomato, "tomato", 0.5);
removeGlobalEventListener(removeTomato, "tomato", 0.5);

addGlobalEventListener(addLettuce, "lettuce", 0.5);
removeGlobalEventListener(removeLettuce, "lettuce", 0.5);

addGlobalEventListener(addCheese, "cheese", 1);
removeGlobalEventListener(removeCheese, "cheese", 1);

addGlobalEventListener(addMeat, "meat", 10);
removeGlobalEventListener(removeMeat, "meat", 10);

function add(style, priceToAdd){
    const toAdd = document.createElement("div");
    toAdd.classList.add(style);
    toAdd.innerHTML = ".";
    burger.appendChild(toAdd);
    price += priceToAdd;
    updatePrice();
}

function addGlobalEventListener(element, style, priceToAdd){
    element.addEventListener('click', function(e){
        e.preventDefault();
        add(style, priceToAdd);
        element.classList.add("remove");
    })
}

function removeGlobalEventListener(element, style, priceToDecrement){
    element.addEventListener('click', function(e){

        e.preventDefault();

        if (document.getElementsByClassName(style).length > 0) {


            const toRemove = document.getElementsByClassName(style)[0];
            burger.removeChild(toRemove);
            price -= priceToDecrement;
            updatePrice();
        }
        // block remove button if 0 
    })
}

function updatePrice(){
    const updatedPrice = document.getElementById("price");
    updatedPrice.innerHTML = `Price: ${price}`;
}


restart.addEventListener('click', function() {
    while (burger.firstChild) {
        burger.removeChild(burger.lastChild);
      }
      price = 5;
      updatePrice();
})