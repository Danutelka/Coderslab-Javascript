/* zadanie 1
Plik HTML do tego zadania to plik searchDom.html, a plik js to searchDom.js.
Nie używaj eventu DOMContentLoaded. Skrypt jest wczytany do pliku html przed końcem body.
Do każdego podpunktu stwórz odpowiednią funkcję o nazwie podanej w treści zadania.
*/

/* 1.1
Pobranie informacji z atrybutu data:
1 - znajdź element o id menu,
2 - stwórz funkcję getDataInfo(element) do której przekaż , jako argument , 
    znaleziony element,
3 - stwórz w funkcji nową tablicę i wypełnij ją wartościami pobranymi 
    z atrybutu data każdego elementu li. Zauważ, że elementy li to dzieci elementu o 
    id menu.
4 - zwróć tą tablicę.
*/
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

/* 1.2
Szukanie elementu po id:
1 - Znajdź element o id main-contener.
2 - stwórz funkcję getElementClass(element) do której przekaż , jako argument , 
    znaleziony element.
3 - zwróć tablicę złożoną z nazw klas tego elementu.
*/
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

/* 1.3
Szukanie elementu po klasie:
1 - Znajdź element o klasie pink-color.
2 - stwórz funkcję getElementText(element) do której przekaż , 
    jako argument , znaleziony element.
3 - zwróć z funkcji tekst, znajdujący się w tym elemencie
*/
var pink = document.querySelector('.pink-color');

function getElementText(pink) {
    return (pink.innerText);
}

console.log(getElementText(pink));

/* 1.4
Szukanie elementu po klasie:
1 - Znajdź elementy o klasie images.
2 - stwórz funkcję getElementAlt(element) do której przekaż , jako argument , 
    znalezione elementy.
3 - stwórz w funkcji tablicę i wypełnij ją wartościami pobranymi z atrybutu alt obrazków. 
    Pobierz te atrybuty z przekazanych jako argument elementów.
*/
var images = document.querySelectorAll('.images')
tablica = []

function getElementAlt(images) {
    images.forEach(function (element) {
        tablica.push(element.getAttribute('alt'))
    })
    return (tablica)
}

console.log(getElementAlt(images));

/* 1.5
Szukanie elementu po klasie:
1 -Znajdź elementy o klasie my-link.
2 - stwórz funkcję getElementHref(element) do której przekaż , jako argument , 
    znalezione elementy.
3 - stwórz w funkcji tablicę i wypełnij ją wartościami pobranymi z atrybutu href linków. 
    Pobierz te atrybuty z przekazanych jako argument elementów.
*/
var myLinks = document.querySelectorAll('.my-link')

function getElementHref(myLinks) {
    tablica = []
    myLinks.forEach(function (element) {
        tablica.push(element.getAttribute('href'))
    })
    return (tablica)
} 
console.log(getElementHref(myLinks));