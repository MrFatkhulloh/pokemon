var pokies = prompt(`how many pokemons do you want to choose?`);
// var pokies = 3;
var chosenPokies = pokemons.slice(0, pokies);

var elList = document.querySelector("#list");

function paki(params) {
    elList.innerHTML = null
    for (const key of chosenPokies) {
        var newLi = document.createElement("li");
        var newCard = document.createElement("div");
        var newImg = document.createElement("img");
        var newCardBody = document.createElement("div");
        var newCardHeading = document.createElement("h5");
        var newCardText = document.createElement("p");

        newLi.classList.add("col-md-3","list__item","ml-md-auto");
        newCard.classList.add("card","text-center","p-0");
        newImg.classList.add("card-img-top");
        newImg.setAttribute("src",`${key["img"]}`);
        newImg.setAttribute("alt",`Card image cap`);
        newImg.setAttribute("width",`60`);
        newCardBody.classList.add("card-body");
        newCardHeading.classList.add("m-0");
        newCardText.classList.add("m-0");

        newCardHeading.textContent = `Name: ${key["name"]}`;
        newCardText.textContent = `Type: ${key["type"].concat("")}`;
        
        newCardBody.appendChild(newCardHeading);
        newCardBody.appendChild(newCardText);
        newCard.appendChild(newImg);
        newCard.appendChild(newCardBody);
        newLi.appendChild(newCard);
        elList.appendChild(newLi);
    }
}

console.log(paki(pokies));