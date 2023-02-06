//es 7
function cambiaTitolo() {
    let title = document.getElementById('ciao');
    title.innerHTML = "Nuovo Titolo pagina";

    /*
    const title = document.querySelector("h1");
    title.innerText = newTitle;
     */
}

//es 8
function changeBackgroundColor() {
    document.body.style.backgroundColor = "red";
}

//es 9
function changeAddress() {
    window.location = "http://someplace.com";
}

//es 10
function link() {
    let link = document.querySelectorAll("a");
    for (let i = 0; i < link.length; i++) {
        link[i].style.color = "orange";
    }
}

//es 11
/*
function addCss() {
    let immagine = document.getElementsByTagName('img');
    immagine.classList.add("visibility:hidden");
}*/


//es12
/*function changePriceColor() {
    let price = document.getElementsByClassName('Price');
    price.createAttribute("color").value = "yellow";
}

changePriceColor();*/

