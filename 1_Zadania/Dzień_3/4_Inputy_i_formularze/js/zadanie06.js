/**
 * Created by Jacek on 2016-01-12.
 */

document.addEventListener('DOMContentLoaded', function() {
    var team1 = document.getElementById('team1');
    var team2 = document.getElementById('team2');
    var points1 = document.getElementById('points1');
    var points2 = document.getElementById('points2');

    var submitBtn = document.querySelector('form button.btn.btn-primary');

    submitBtn.addEventListener('click', function(event) {
        event.preventDefault();
        if(team1.value == team2.value) {
            console.log('Zespoly sa identyczne');
            return;
        }

        if(parseInt(points1.value) < 0) {
            console.log('Wynik druzny 1 jest ujemny');
            return;
        }

        if(parseInt(points2.value) < 0) {
            console.log('Wynik druzny 2 jest ujemny');
            return;
        }

        var tr = document.createElement('tr');

        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
        var td3 = document.createElement('td');

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);

        td1.innerText = team1.value;
        td2.innerText = team2.value;
        td3.innerText = points1.value + " - " + points2.value;

        var table = document.querySelector('table.table tbody');

        table.appendChild(tr);

        team1.value = team2.value = points1.value = points2.value = '';
    })
});