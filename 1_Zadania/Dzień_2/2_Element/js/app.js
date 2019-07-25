
document.addEventListener("DOMContentLoaded", function(){
    var homeElement = document.getElementById("home");
    var childElements = document.querySelector(".oferts").children;
    var banner = document.querySelector(".ban");
    var blocks = document.querySelectorAll(".block");
    var links = document.querySelector(".links").children;

    /* zad 1 
    W pliku js dopisz kod, który zamieni miejscami klasę i id dla elementu znajdującego 
    się w zmiennej homeElement.
     */

    var homeClassName = homeElement.className;
    var homeId = homeElement.id;

    homeElement.id = homeClassName;
    homeElement.className = homeId;

    /* zadanie 2
    Przeanalizuj kod HTML i JavaScript tego zadania. Wypisz w konsoli wszystkie wcześniej 
    przygotowane zmienne i ich typy. W przypadku tablic przeiteruj 
    (używając np. pętli for), wypisując wartość i typ dla każdego elementu, który znajduje
     się w tablicy.
    */

    console.log(homeElement, homeElement.tagName);

    console.log(childElements);
    for(var i = 0; i < childElements.length; i++) {
        console.log(childElements[i], typeof(childElements[i]));
    }

    console.log(banner, banner.tagName);

    console.log(blocks);

    blocks.forEach(function(element) {
       console.log(element, element.tagName);
    });

    console.log(links);

    for(var i = 0; i < links.length; i++) {
        var element = links[i];
        console.log(element, element.tagName);
    }

    /* zadanie 3
    Wypisz w konsoli wartości innerHTML i outerHTML dla elementów zmiennej blocks. 
    Napisz w komentarzu, czym się od siebie różnią. Nastaw wartość innerHTML 
    na "Nowa wartość diva o klasie blocks". Przeanalizuj, jak zmienił się kod HTML strony.
    */

    //outer pokazuje wszystko co na zewnątrz
    blocks.forEach(function(element){
        console.log("innerHTML:", element.innerHTML, "outerHTML:", element.outerHTML);
        element.innerHTML = "Nowa wartość o klasie block";
    })

    /* zadanie 4
    Wypisz w konsoli id elementu kryjącego się w zmiennej homeElement.
    */
    console.log(homeElement.id);

    /* zadanie 5
    Wypisz w konsoli tagi wszystkich elementów, które znajdują się w zmiennej 
    childElements (pamiętaj o tym, że jest to tablica).
    */

    for(var i = 0; i < childElements.length; i++) {
        console.log(childElements[i], childElements[i].tagName);
    }

    // childElements.toArray()

    /* zadanie 6 
    Wypisz w konsoli wartość atrybutu dataset dla każdego elementu znajdującego się w
     zmiennej links (pamiętaj o tym, że jest to tablica).
    */
    for(var i = 0; i < links.length; i++) {
        var element = links[i];
            console.log(element.dataset);
        }
            /*
            for(var k in element.dataset){
            console.log(element.dataset[k]);
           } */

    /* zad7
    Wypisz w konsoli wartość atrybutów classList i className dla zmiennej banner.
    Wypisz w konsoli, jakiego typu (i ewentualnie jakiej klasy) są te wartości.
    */
    console.log(banner.classList, banner.className);

    console.log(typeof(banner.classList), typeof(banner.className));
});
