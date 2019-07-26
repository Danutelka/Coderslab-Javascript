/* zadanie 5
Na stronie znajduje się tabela podobna do tej z zadania 1. 
Tym razem przy każdym zamówieniu znajduje się dodatkowo guzik, 
który służy do usuwania tego zamówienia. Dopisz do niego odpowiedni event, 
który spowoduje, że dane zamówienie zniknie z tablicy. Spróbuj zrobić to w taki sposób,
 żeby wszystkie guziki korzystały z tego samego eventu (użyj this). Pamiętaj o zmianie 
 łącznej kwoty na samym dole tabeli!.
 */
document.addEventListener('DOMContentLoaded', function () {
    var del = document.querySelectorAll('td > a');
 
    function delt() {
         this.parentElement.parentElement.remove();
     }
 
    del.forEach(function (del) {
        del.addEventListener('click', delt)
    })
 });
 