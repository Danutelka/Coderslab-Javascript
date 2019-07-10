/**
 * Created by Jacek on 2016-01-12.
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