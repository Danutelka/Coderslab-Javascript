/**
 * Created by Jacek on 2016-01-11.
 */

document.addEventListener("DOMContentLoaded", function() {
    /*
    Poniżej napisz kod rozwiązujący zadania
     */

    //zad 1.1

    // var ex1 = document.querySelector('.exercise.ex1'); -- lepsiejsza wersja 15:15
    var li = document.querySelectorAll('.exercise.ex1 li:not([data-direction]');
    console.log(li);
    li.forEach(function(element) {
        element.dataset['direction']='up';
    });
     //zad 1.2
    var li = document.querySelectorAll('.exercise.ex1 li:nth-child(even)');
    li.forEach(function(element) {
        element.style.backgroundColor = 'green';
    });
    
    // ppkt. 3
    var li = document.querySelector('.exercise.ex1 li:nth-child(5)');
    li.classList.add('big'); // dodajemy do elementu li klasę big

    // ppkt. 4
    var li = document.querySelectorAll('.exercise.ex1 li:nth-child(3n)')

    li.forEach(function(element) {
        element.style.textDecoration = 'underline';
    }); 

    //zad2 15:27
    var ex2 = document.querySelector('.exercise.ex2');
    
    var options = ex2.querySelectorAll('option');
    options.forEach(function(element) {
        element.innerHTML = element.getAttribute('value');
        element.dataset.year = parseInt(element.getAttribute('value')) + 20;
    });

    // zadanie 3

    var ex3 = document.querySelector('.exercise.ex3');

    var chrome  = ex3.querySelector('div:nth-of-type(1)');
    var firefox = ex3.querySelector('div:nth-of-type(3)');
    var edge    = ex3.querySelector('div:nth-of-type(2)');


    var edgeImg = edge.querySelector('.edge');

    edgeImg.style.backgroundImage = 'url(./assets/img/edge.png)';
    edgeImg.style.width = '100px';

    var firefoxImg = firefox.querySelector('.firefox');

    firefoxImg.style.backgroundImage = 'url(./assets/img/firefox.png)';
    firefoxImg.style.width = '100px';
    firefoxImg.style.backgroundSize = '100%';

    var chromeImg = chrome.querySelector('.chrome');

    chromeImg.style.width = '100px';


    var chromeA = chrome.querySelector('a');
    var firefoxA = firefox.querySelector('a');
    var edgeA = edge.querySelector('a');

    chromeA.setAttribute('href', 'http://chrome');
    firefoxA.setAttribute('href', 'http://firefox');
    edgeA.setAttribute('href', 'http://edge');

    chromeA.innerHTML = chrome.querySelector('h3').innerText;
    firefoxA.innerHTML = firefox.querySelector('h3').innerText;
    edgeA.innerHTML = edge.querySelector('h3').innerText;

    //zad 4
    var ex4 = document.querySelector('.exercise.ex4')

    var name = document.getElementById('name');
    var color = document.getElementById('fav_color');
    var meal = document.getElementById('fav_meal');

    name.innerHTML = 'bobbi firmino';
    color.innerHTML = 'red';
    meal.innerHTML = 'milk';

    //zad 5
    var ex5 = document.querySelector('.exercise.ex5');
    var ul = ex5.querySelector('ul');
    ul.classList.add("menu")
    var li = ul.querySelectorAll('li')
    li.forEach(function (element) {
        element.classList.add('menuElement');
        element.classList.remove('error');
    });
    console.log(li)

    // zad 6
    var ex6 = document.querySelector('.ex6');
    var li = ex6.querySelectorAll('li');
    console.log(li);
    li.forEach(function(element, index){
        element.dataset.id = index +1;
        // element.setAttribute('data-id', index +1);
    });
    
});
