
/* ZADANIE 1
Dołącz do swojego pliku bibliotekę jQuery. 
W pliku app.js umieść kod sprawdzający, czy DOM został załadowany.

$(function() {
    alert ('wszystsko działa');

});
 
albo

$(document).ready(function() {
    alert ('wszystko działa');
});
*/

// zad 2
/*
$(document).ready(function() {
    var li = $('section.main').find('li');
    // li.attr('class', 'borderClass');
    li.addClass('borderClass');

   $('.showMore').eq(0).css('color', 'red');
    
});
*/

$(document).ready(function() {
    //ZADANIE 3
    var li = $('section.main').find('li');
    li.addClass('colorText backgroundElement borderClass')
        .fadeOut('slow')
        .fadeIn('slow');
    //ZADANIE 4
    var link = $('.menu').find('a').css('color', 'red');
    link.addClass('redlinks');
    var link1 = link.eq(0);
    link1.css('font-size', 'large');
    //ZADANIE 5
    var h1 = $('body').find('h1');
    if ($('h1').hasClass('creepyHeader')) {
        console.log('Ma juz taka classe');
    } else {
        h1.addClass('creepyHeader')
    }
});




