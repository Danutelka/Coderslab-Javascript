
// zad 1.1
var menu = document.getElementById("menu");

function getDataInfo(menu) {
    var lista = menu.querySelectorAll('li')
    var tablica = []

    lista.forEach(function (element) {
        tablica.push(element.dataset.info)

    });
    return (tablica)
}

console.log(getDataInfo(menu));

// zad 1.2
var main = document.getElementById("main-contener");

function getElementClass(main) {
    tablica = []
    listaClass = main.classList
    listaClass.forEach(function (element) {
        tablica.push(element)
    })
    return (tablica)
}

console.log(getElementClass(main));

// zad 1.3
var pink = document.querySelector('.pink-color');

function getElementText(pink) {
    return (pink.innerText);
}

console.log(getElementText(pink));

// zad 1.4
var images = document.querySelectorAll('.images')
tablica = []

function getElementAlt(images) {
    images.forEach(function (element) {
        tablica.push(element.getAttribute('alt'))
    })
    return (tablica)
}

console.log(getElementAlt(images));

// zad 1.5
var myLinks = document.querySelectorAll('.my-link')

function getElementHref(myLinks) {
    tablica = []
    myLinks.forEach(function (element) {
        tablica.push(element.getAttribute('href'))
    })
    return (tablica)
} 
console.log(getElementHref(myLinks));