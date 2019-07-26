/* zadanie 1
Na stronie znajduje się tabela z informacjami na temat zamówień (z dwoma już wprowadzonymi
zamówieniami). Poniżej znajduje się formularz do wypełnienia nowego zamówienia. Napisz 
event, który pobierze informacje z inputów (el.value) i wprowadzi nowy wpis do tablicy.
 */
document.addEventListener('DOMContentLoaded', function() {
    var zam = document.getElementById('orderId');
    var przedm = document.getElementById('item');
    var ilosc = document.getElementById('quantity');
    var dodaj = document.querySelector('a.button');
    //console.log(zam);
    dodaj.addEventListener('click',function (event) {
        var tr = document.createElement('tr');
        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
        var td3 = document.createElement('td');
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        td1.innerText = zam.value;
        td2.innerText = przedm.value;
        td3.innerText = ilosc.value;
        var table = document.getElementById('orders');
        table.appendChild(tr);
    });
});
