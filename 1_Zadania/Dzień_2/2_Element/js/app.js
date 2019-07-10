/**
 * Created by Jacek on 2016-01-11.
 */

document.addEventListener("DOMContentLoaded", function(){
    var homeElement = document.getElementById("home");
    var childElements = document.querySelector(".oferts").children;
    var banner = document.querySelector(".ban");
    var blocks = document.querySelectorAll(".block");
    var links = document.querySelector(".links").children;

    /*
    Poniżej napisz kod rozwiązujący zadania
     */

    // zad 1
    var homeClassName = homeElement.className;
    var homeId = homeElement.id;

    homeElement.id = homeClassName;
    homeElement.className = homeId;

    // zad 2
    console.log(homeElement, homeElement.tagName);

    console.log(childElements);
    for(var i = 0; i < childElements.length; i++) {
        console.log(childElements[i], typeof(childElements[i]));
    }

    console.log(banner, banner.tagName);

    console.log(blocks);

    blocks.forEach(function(element) {
       console.log(element, element.tagName);
    });

    console.log(links);

    for(var i = 0; i < links.length; i++) {
        var element = links[i];
        console.log(element, element.tagName);
    }

    //zad 3
    //outer pokazuje wszystko co na zewnątrz
    blocks.forEach(function(element){
        console.log("innerHTML:", element.innerHTML, "outerHTML:", element.outerHTML);
        element.innerHTML = "Nowa wartość o klasie block";
    })

    //zad4
    console.log(homeElement.id);

    //zad5
    for(var i = 0; i < childElements.length; i++) {
        console.log(childElements[i], childElements[i].tagName);
    }

    // childElements.toArray()

    //zad6
    for(var i = 0; i < links.length; i++) {
        var element = links[i];
            console.log(element.dataset);
        }
        // for(var k in element.dataset){
            // console.log(element.dataset[k]);
        // }
    
    // zad7
    console.log(banner.classList, banner.className);

    console.log(typeof(banner.classList), typeof(banner.className));
});
