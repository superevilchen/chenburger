"use strict";

const burger = document.getElementById("fillings");

const addTomato = document.getElementsByClassName("add")[0];
const addLettuce = document.getElementsByClassName("add")[1];
const addOnion = document.getElementsByClassName("add")[2];
const addCheese = document.getElementsByClassName("add")[3];
const addMeat = document.getElementsByClassName("add")[4];
const addSauce = document.getElementsByClassName("add")[5];

const removeTomato = document.getElementsByClassName("remove")[0];
const removeLettuce = document.getElementsByClassName("remove")[1];
const removeOnion = document.getElementsByClassName("remove")[2]
const removeCheese = document.getElementsByClassName("remove")[3];
const removeMeat = document.getElementsByClassName("remove")[4];
const removeSauce = document.getElementsByClassName("remove")[5];

const restart = document.getElementById("restart");

let price = 5;

addGlobalEventListener(addTomato, "tomato", 0.5);
removeGlobalEventListener(removeTomato, "tomato", 0.5);

addGlobalEventListener(addLettuce, "lettuce", 0.5);
removeGlobalEventListener(removeLettuce, "lettuce", 0.5);

addGlobalEventListener(addOnion, "onion", 0.5);
removeGlobalEventListener(removeOnion, "onion", 0.5);

addGlobalEventListener(addCheese, "cheese", 1);
removeGlobalEventListener(removeCheese, "cheese", 1);

addGlobalEventListener(addMeat, "meat", 10);
removeGlobalEventListener(removeMeat, "meat", 10);

addGlobalEventListener(addSauce, "sauce", 1);
removeGlobalEventListener(removeSauce, "sauce", 1);

function addGlobalEventListener(element, style, priceToAdd){
    element.addEventListener('click', function(e){
        e.preventDefault();
        const toAdd = document.createElement("div");
        toAdd.classList.add(style);
        toAdd.innerHTML = ".";
        burger.appendChild(toAdd);
        price += priceToAdd;
        updatePrice();
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
