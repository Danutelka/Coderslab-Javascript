/* zadanie 7
Na stronie znajduje się jeden element div. Napisz dla niego event, który będzie wypisywał
położenie kursora myszy w chwili, gdy znajduje się nad tym elementem. Wyszukaj zarówno
położenie kursora globalne (czyli odległość od górnego lewego rogu okna), jak i lokalne 
(czyli odległość od lewego górnego rogu elementu). Pamiętaj, żeby wszystko pisać w 
evencie DOMContentLoaded.
 */
document.addEventListener('DOMContentLoaded', function () {
    var box = document.getElementById('box');
    var globalX = document.getElementById('globalX');
    var globalY = document.getElementById('globalY');
    var localX = document.getElementById('localX');
    var localY = document.getElementById('localY');

    globalX.innerText = "0";
    globalY.innerText = "0";
    localX.innerText = "0";
    localY.innerText = "0";

    box.addEventListener('mousemove', function(event) {
        console.log(event);
        globalX.innerText = event.clientX;
        globalY.innerText = event.clientY;
        localX.innerText = event.screenX - event.target.offsetLeft;
        localY.innerText = event.screenY - event.target.offsetTop;
    })
});