/* zadanie 1
Uruchom stronę przygotowaną dla zadania 1. Sprawdź w konsoli, czy są jakieś błędy. 
Następnie:
1 - Przenieś tag <script> do sekcji <head>. Zobacz, co się zmieniło w działaniu skryptu. 
    Spróbuj to wytłumaczyć.
2 - Stwórz event DOMContentLoaded dla elementu document i przenieś kod do środka tego 
    eventu. Czy poprawiło to sytuację?
3 - Przenieś znowu tag <script> na koniec pliku – czy jest jakaś różnica?
 */

document.addEventListener('DOMContentLoaded', function() {
    var menu = document.querySelector("#menu");
    var paragraf = document.querySelector("p");
    menu.classList.add("menu");
    paragraf.innerHTML = "A to jest paragraf w zadaniu 1";
});

// script na koniec: też działa przy usunięciu linijki 4

