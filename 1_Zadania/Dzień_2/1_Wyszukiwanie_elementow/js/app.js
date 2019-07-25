
document.addEventListener("DOMContentLoaded", function(){
    /* zadanie 1 
    Wyszukaj na stronie i zapisz do odpowiednio nazwanej zmiennej tag article o klasie 
    first.
    W kolejnym etapie:
    1 - wypisz w konsoli, ile elementów h1 znajduje się w tym tagu.
    2 - wyszukaj w nim wszystkie elementy o klasie oferts, przeiteruj je i 
    wypisz je w konsoli,
    3 - wyszukaj w nim wszystkie elementy div, przeiteruj je i wypisz je w konsoli.
    Pamiętaj, żeby za każdym razem sprawdzić, czy wczytałeś odpowiednie elementy. 
    Używaj funkcji, które wyszukują wiele elementów. Za każdym razem wypisz w konsoli, 
    ile jest znalezionych przez Ciebie elementów.
     */
    var article = document.querySelector("article.first"); 
    var noh1 = article.querySelectorAll("h2").length;
    // var noh2 = article.getElementByTagName("h2").length; sposob2
    console.log('jest w article.first', noh1, 'elementow h2');
    // console.log('jest w article.first', noh2, 'elementow h2'); sposob2

    var oferts = article.querySelectorAll(".oferts");
    for (var i = 0; i < oferts.length; i++) {
        console.log(oferts[i]);
    }
    /* sposob 2 
    oferts.forEach(function(value, index) {
        console.log('element', index);
        console.log(value);
    })
    oferts.ForEach(console.log);
    */ 

    var divs = article.querySelectorAll("div");

    console.log('znaleziono:', divs.lenght, 'elementow');

    divs.forEach(function(value, index) {
        console.log("div", index);
        console.log(value);
    })

    /* zadanie 2
    Wyszukaj na stronie i zapisz do zmiennej element o id exercise2, który znajduje się
    w menu. Skorzystaj z selektora CSS. Nie odwołuj się bezpośredniego do klasy lub id 
    jakiegokolwiek elementu. Użyj selektorów potomków, dzieci, n-tych dzieci itp.
    */
    var portfolio = document.querySelector("nav > ul > li:nth-of-type(5) > a");
    console.log("Znalazlem", portfolio);

    /* zadanie 3
    Wyszukaj na stronie następujące elementy i zapisz je do odpowiednio nazwanych 
    zmiennych:
    1 - Element o id home (na dwa sposoby).
    2 - Pierwszy element li nieposiadający atrybutu data-direction.
    3 - Pierwszy element o klasie block.
    Pamiętaj, żeby za każdym razem sprawdzić, czy wczytałeś odpowiedni element. 
    Używaj funkcji wyszukujących tylko jeden element.
    */
     
    var home = document.getElementById("home");
    console.log("znalazłem", home);
    
    var first = document.querySelector("nav > ul > li:not([data-direction])");
    console.log("znaleziono", first);

    var first2 = document.querySelector(".block");
    console.log("pierwszy to:", first2);

    /* zadanie 4
    Wyszukaj na stronie następujące elementy i zapisz je do odpowiednio nazwanych zmiennych:
    1 - Wszystkie elementy li znajdujące się w tagu nav.
    2 - Wszystkie paragrafy należące do wszystkich elementów div.
    3 - Wszystkie divy znajdujące się w tagu article.
    Pamiętaj, żeby za każdym razem sprawdzić, czy wczytałeś odpowiednie elementy. 
    Pamiętaj, żeby używać funkcji, które wyszukują wiele elementów. Za każdym razem 
    wypisz w konsoli, ile znalazłeś elementów.
    */
    var sall = document.querySelectorAll('nav li');
    var par = document.querySelectorAll('div p');
    var div = document.querySelectorAll('article div');
    console.log("1", sall);
    console.log("2", par);
    console.log("3", div);

    /* zad dodatkowe
    Znajdź wszystkie elementy li, które są w tagu nav. 
    Następnie nadaj każdemu elementowi li atrybut data-direction = "top", ale tylko 
    dla tych elementów, które nie mają ustawionego tego atrybutu.
    */
   
    var li = document.querySelectorAll('nav li:not([data-direction])');
    li.forEach(function(element) {
        element.dataset.direction = 'top';
    })
});

