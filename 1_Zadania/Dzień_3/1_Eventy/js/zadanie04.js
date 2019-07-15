/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener("DOMContentLoaded", function() {
    var button1 = document.getElementById('button1');
    var button2 = document.getElementById('button2');
    var button3 = document.getElementById('button3');

    var span1 = document.querySelector("#button1 + p > span");
    console.log(span1)
    var span2 = document.querySelector("#button2 + p > span");
    var span3 = document.querySelector("#button3 + p > span");

    button1.addEventListener('click',function(event) {
        span1.innerText=parseInt(span1.innerText) + 1;
    });
    button2.addEventListener('click',function(event) {
        span2.innerText=parseInt(span2.innerText) + 1;
    });
    button3.addEventListener('click',function(event) {
        span3.innerText=parseInt(span3.innerText) + 1;
    });
});