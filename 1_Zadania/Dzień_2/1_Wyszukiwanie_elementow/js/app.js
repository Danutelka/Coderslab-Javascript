/**
 * Created by Jacek on 2016-01-11.
 */

document.addEventListener("DOMContentLoaded", function(){
    /*
    Poniżej napisz kod rozwiązujący zadania
     */

    //zad 1
    var article = document.querySelector("article.first"); 

    var noh1 = article.querySelectorAll("h2").length;
    // var noh2 = article.getElementByTagName("h2").length; sposob2
    console.log('jest w article.first', noh1, 'elementow h2');
    // console.log('jest w article.first', noh2, 'elementow h2');  sposob2

    var oferts = article.querySelectorAll(".oferts");

    for (var i = 0; i < oferts.length; i++) {
        console.log(oferts[i]);
    }
    /* sposob 2 
    oferts.forEach(function(value, index) {
        console.log('element', index);
        console.log(value);
    })
    oferts.ForEach(console.log);
    */ 

    var divs = article.querySelectorAll("div");

    console.log('znaleziono:', divs.lenght, 'elementow');

    divs.forEach(function(value, index) {
        console.log("div", index);
        console.log(value);
    })

    //zad 2

    var portfolio = document.querySelector("nav > ul > li:nth-of-type(5) > a");
    console.log("Znalazlem", portfolio);

    // zad3
        // sposob 1
    var home = document.getElementById("home");
    console.log("znalazłem", home);
    
    var first = document.querySelector("nav > ul > li:not([data-direction])");
    console.log("znaleziono", first);

    var first2 = document.querySelector(".block");
    console.log("pierwszy to:", first2);

    // zad4

    var sall = document.querySelectorAll('nav li');
    var par = document.querySelectorAll('div p');
    var div = document.querySelectorAll('article div');
    console.log("1", sall);
    console.log("2", par);
    console.log("3", div);

    //zad dod
    
    var li = document.querySelectorAll('nav li:not([data-direction])');

    li.forEach(function(element) {
        element.dataset.direction = 'top';
    })
});

