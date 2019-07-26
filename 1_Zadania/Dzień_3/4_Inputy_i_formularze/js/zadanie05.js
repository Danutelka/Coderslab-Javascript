/* zadanie 5
Na stronie znajduje się formularz, który odsyła do strony 
http://api.coderslab.pl/showpost.php. Napisz walidację tego formularza w taki sposób,
żeby wysyłany był tylko i wyłącznie wtedy, kiedy spełnione zostaną następujące warunki:
1 - Email zawiera w sobie @.
2 - Imię jest dłuższe niż pięć znaków.
3 - Nazwisko jest dłuższe niż pięć znaków.
4 - Hasło i hasło drugie są identyczne.
5 - Checkbox musi być zaznaczony.
Warunek dla chętnych. Dodatkowe. Hasło ma mieć co najmniej pięć znaków 
(w tym co najmniej jedną liczbę i jedną literę).
Zauważ, jak dane wyświetlane są na stronie docelowej (jak ich nazwy są skorelowane
z kodem HTML). Spróbuj pozmieniać atrybuty name i zobacz, jak się zmieniają wysyłane
 dane (np. sprawdź, co się stanie, jak dwa inputy mają taką samą nazwę). Uwaga, jest
 to ważne miejsce współpracy frontendowców z backendowcami.
 */
document.addEventListener('DOMContentLoaded', function() {
    var email = document.getElementById('email');
    var name = document.getElementById('name');
    var surname = document.getElementById('surname');
    var pass1 = document.getElementById('pass1');
    var pass2 = document.getElementById('pass2');
    var button = document.querySelector('button');
    var cb = document.getElementById('agree');

    button.addEventListener('click', function (event) {
          if (email.value.indexOf("@")<= -1) {
              event.preventDefault();
              console.log('email nie poprawny');
              return;
          }
          if(name.value.length < 5 ) {
              event.preventDefault();
              console.log('imie za krotke');
              return;
          }
          if (surname.value.length < 5) {
              event.preventDefault();
              console.log("nazwisko za krotke");
              return;
          }
          if (pass1.value != pass2.value){
              event.preventDefault();
              console.log('hasla nie sa identyczne');
              return;
          }
          if (pass1.value.length == 0) {
              event.preventDefault();
              console.log('podaj haslo');
              return;
          }
          if (cb.checked == false) {
              event.preventDefault();
              console.log("daj na flage");
              return;
          }
    });
});
