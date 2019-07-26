/* zadanie 2 
Na stronie znajduje się formularz do zamówienia. Jest w nim sekcja odpowiedzialna 
za wystawienie faktury. Napisz kod JavaScript, który spowoduje, że sekcja ta jest 
widoczna tylko i wyłącznie wtedy, kiedy zaznaczony jest checkbox "Chcę otrzymać fakturę".
*/

document.addEventListener('DOMContentLoaded', function () {
    var div = document.getElementById('invoiceData');
    var fv = document.getElementById('invoice');
    fv.addEventListener('click', function (event) {
            if (this.checked) {
                div.style.display = 'block';
            } else {
                div.style.display = 'none';
            }
        });
});