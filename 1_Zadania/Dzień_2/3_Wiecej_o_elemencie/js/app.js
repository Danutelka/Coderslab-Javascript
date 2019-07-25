
document.addEventListener("DOMContentLoaded", function() {
    /* zadanie 1
    Zmodyfikuj listę w następujący sposób:
    1 - Dodaj atrybut data-direction nastawiony na wartość up każdemu elementowi li, 
    który nie ma tego atrybutu.
    2 - Nastaw kolor tła co drugiego elementu listy na zielony.
    3 - Nastaw piątemu elementowi listy klasę big.
    4 - Nastaw co trzeciemu elementowi podkreślenie.
     */

    //zad 1.1
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
    //zad 1.3
    var li = document.querySelector('.exercise.ex1 li:nth-child(5)');
    li.classList.add('big'); // dodajemy do elementu li klasę big

    //zad 1.4
    var li = document.querySelectorAll('.exercise.ex1 li:nth-child(3n)');

    li.forEach(function(element) {
        element.style.textDecoration = 'underline';
    }); 

    /* zadanie 2
    W zadaniu (plik index.html) znajduje się prosty formularz z polem wyboru select. 
    Ustaw każdemu elementowi option wartość opisu z atrybutu value. 
    Dodaj każdemu elementowi atrybut data-year, użyj dataset, ale wynikowa wartość 
    ma być o 20 większa niż w atrybucie value, czyli np. 2020 -> 2040.
    */ 
    var ex2 = document.querySelector('.exercise.ex2');
    
    var options = ex2.querySelectorAll('option');
    options.forEach(function(element) {
        element.innerHTML = element.getAttribute('value');
        element.dataset.year = parseInt(element.getAttribute('value')) + 20;
    });

    /* zadanie 3 
    Na stronie są trzy obrazki z ikonami najpopularniejszych przeglądarek internetowych. 
    Niestety zarówno obrazki, jak i linki prowadzące do ich stron zawierają błędy. 
    Napisz kod JavaScript, który wprowadzi następujące zmiany:
    1 - Poprawi elementy tak, żeby do każdej przeglądarki było podpięte odpowiednie logo 
    (obrazek jest nastawiany za pomocą background-image).
    2 - Poprawi linki tak, żeby każdy miał poprawny opis i atrybut href.
    3 - Poprawi szerokość elementu o klasie chrome (powinno być 100px).
    Podejrzyj w konsoli, jak wygląda kod CSS dopisany przez JavaScript. 
    Zastanów się, dlaczego dopisywany jest w tym miejscu. 
    Napisz odpowiedź na to pytanie w komentarzu do zadania.
    */
    var ex3 = document.querySelector('.exercise.ex3');

    var chrome = ex3.querySelector('div:nth-of-type(1)');
    var firefox = ex3.querySelector('div:nth-of-type(3)');
    var edge = ex3.querySelector('div:nth-of-type(2)');


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

    /* zadanie 4
    Na stronie jest lista, w której wpisz swoje imię i nazwisko, ulubiony kolor i potrawę.
    Wyszukaj wszystkie spany i zapisz je do odpowiednich zmiennych.
    Za pomocą innerHTML wypełnij w nich odpowiednie informacje.
    */
    var ex4 = document.querySelector('.exercise.ex4')

    var name = document.getElementById('name');
    var color = document.getElementById('fav_color');
    var meal = document.getElementById('fav_meal');

    name.innerHTML = 'bobbi firmino';
    color.innerHTML = 'red';
    meal.innerHTML = 'milk';

    /* zadanie 5
    Na stronie jest proste menu. Zarówno kod HTML, jak i CSS jest już do niego przygotowany. 
    Niestety ktoś zapomniał dodać odpowiednie klasy do odpowiednich elementów.
    1 - Wyszukaj element ul i dodaj mu klasę menu.
    2 - Wyszukaj wszystkie elementy li i dodaj im klasę menuElement (użyj do tego pętli). 
    Uważaj, żeby nie wykasować klasy selected.
    Zauważ, że jeden z elementów ma czerwony kolor tekstu. Jest to spowodowane tym, że ma 
    klasę error. Zabierz mu ją (najlepiej, jeżeli zabierzesz tę klasę wszystkim elementom, 
    które ją mają).
    */
    var ex5 = document.querySelector('.exercise.ex5');
    var ul = ex5.querySelector('ul');
    ul.classList.add("menu")
    var li = ul.querySelectorAll('li')
    li.forEach(function (element) {
        element.classList.add('menuElement');
        element.classList.remove('error');
    });
    console.log(li)

    /* zadanie 6
    Dodaj do każdego elementu listy atrybut data-id przyjmujący kolejne liczby całkowite 
    (zaczynając od 1). Rozwiąż to zadanie na dwa sposoby:
    1 - Używając datasetu.
    2 - Używając matody setAttribute.
    */
   
    var ex6 = document.querySelector('.ex6');
    var li = ex6.querySelectorAll('li');
    console.log(li);
    li.forEach(function(element, index){
        element.dataset.id = index +1;
        // element.setAttribute('data-id', index +1);
    });
    
});
