/* zadanie 1
Plik HTML do tego zadania to plik pizza.html, a plik js to pizza.js.
Na stronie znajduje się formularz do zamówienia pizzy. W formularzu znajduje się pole 
z checkboxami, w którym użytkownik może wybrać sobie dodatki. Cena każdego 
z dodatków jest trzymana w atrybucie data-price. Napisz takie eventy, żeby po zaznaczeniu 
checkoxa wyświetlała się poprawna kwota zamówienia oraz po wysłaniu formularza wewnątrz 
elementu page-info wyświetliła się następująca informacja: "Do zapłaty: 
[odpowiednia kwota]", gdzie [odpowiednia kwota] to wartość zamówienia. Pamiętaj o tym, 
że kliknięcie w przycisk wywołuje domyślną akcję przeładowania strony. 
Zablokuj tą akcję, aby móc zobaczyć wpisaną informację do elmentu page-info.
Zwróć uwagę na dwa specjalne checkboksy:
1 - Wyczyść – powinien odznaczyć wszystkie inne opcje,
2 - Wszystkie dodatki – powinien zaznaczyć wszystkie inne opcje (poza none).
*/
var price = document.getElementById('price');
var all = document.querySelectorAll('form input');


//Policz sume za składniki
function sumaItems() {
    sumaAll = 0
    suma = 0
    for (var i = 1; i < all.length - 1; i++) {
        if (all[i].checked == true) {
            suma += (parseFloat(all[i].dataset.price));
            sumaAll = suma.toFixed(2)
        }
    }
    return parseFloat(sumaAll)
}


//Czy wszstkie opcje są zaznaczone???
function allButtonsOn() {
    tablica = []
    for (var i = 1; i < all.length - 1; i++) {
        if (all[i].checked) {
            tablica.push(all[i])

            if (tablica.length == 5) {
                all[0].checked = true
            } else {
                all[0].checked = false
            }
        }
    }
    return (tablica)
}


//Zaznacz wszytskie opcje
all[0].addEventListener('click', function (event) {
    sumaAll = 0
    suma = 0
    if (all[0].checked) {
        for (var i = 0; i < all.length - 1; i++) {
            all[i].checked = true;
            price.innerHTML = sumaItems();
        }
    } else {
        for (var i = 0; i < all.length - 1; i++) {
            all[i].checked = false;
            price.innerHTML = 0;
        }
    }
})

//Usuń wszystkie opcje
all[6].addEventListener('click', function (event) {

    all.forEach(function (event) {
        event.checked = false;
        price.innerHTML = 0;
    });
});


//zaznacz opcje na liscie elementów + spawdzanie sumy zaznaczonych + sprawdz czy 
///zaznaczyłeś wszystkie opcje

all.forEach((el) => {
    el.addEventListener('click', function (event) {
        price.innerHTML = sumaItems();
        allButtonsOn();

    })
})


var btn = document.querySelector("button")
btn.addEventListener("click", function (event) {
    var pageHeader = document.querySelector(".page-header p")
    kwota = sumaItems()
    pageHeader.innerHTML = "Do zapłaty: " + (
        kwota
    )
    event.preventDefault();

});