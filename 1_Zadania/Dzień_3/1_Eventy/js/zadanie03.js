/* zadanie 3
Na stronie znajduje się guzik. Podepnij do niego event, który na kliknięcie spowoduje, 
że w konsoli wyświetli się napis "Hura! Działa!". Pamiętaj, żeby wszystko pisać w evencie 
DOMContentLoaded.
 */

document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('mainBtn');
    button.addEventListener('click', function(event){
        console.log('Hura! Działa');
    });
});