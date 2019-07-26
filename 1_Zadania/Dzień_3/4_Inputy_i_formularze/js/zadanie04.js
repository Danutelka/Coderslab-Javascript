/* zadanie 4
Na stronie znajduje się select i trzy obrazki. Każdy z obrazków jest przypisany do
jednego z wyborów w selekcie. Napisz kod javaScript w taki sposób, żeby widoczny był
 tylko ten obrazek, który został wybrany.
 */
document.addEventListener('DOMContentLoaded', function () {
    var images = document.querySelectorAll('.page-header img');
    var select = document.querySelector('.form-control');
    
    //Wyłącz wszystkei img
    images.forEach((el) => {
        el.style.display = 'None'
    });
    //Włącz pierwszy imd dla option domyślnej
    images[2].style.display = 'block'
    
    //zmiana img dla option selected
    select.addEventListener("change", function () {
        var currentOpt = select.options[select.selectedIndex];
        value = currentOpt.innerHTML
    
        if (value == 'Os X') {
            images[0].style.display = 'block'
        } else {
            images[0].style.display = 'none'
        };
        if (value == 'Ubuntu') {
            images[1].style.display = 'block'
        } else {
            images[1].style.display = 'none'
        };
        if (value == 'Windows') {
            images[2].style.display = 'block'
        } else {
            images[2].style.display = 'none'
        };
    });
});