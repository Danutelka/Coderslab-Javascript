/**
 * Created by Jacek on 2016-01-11.
 */

 //zad A2
var arr = [1,2,3,4,5];

function add(array) {
    var result = 0;
    for (var i =0; i<array.length; i++){
        result += array[i];
    }
    return result;
}

function multiply(array) {
    var result = 1;
    for (var i =0; i<array.length; i++){
        result *= array[i];
    }
    return result;
}

console.log(add(arr));
console.log(multiply(arr) == 120);


function distFromAverage(array) {
    var average = add(array) / array.length;
    var result = [];
    for(var i = 0; i < array.length; i++) {
        var x = Math.abs(array[i] - average);
        result.push(x);
    }
    return result;
}

console.log( distFromAverage([1,2,3,4,5,6,7]) );
// => [3,2,1,0,1,2,3] (średnia z tablicy wejściowej to 4)

console.log( distFromAverage([1,1,1,1]) );
// => [0,0,0,0] (średnia z tablicy wejściowej to 1)

console.log(distFromAverage([2,8,3,7]) );
// => [3,3,2,2] (średnia z tablicy wejściowej to 5)

//zad B.1

var arr2 =["maliny", "banan", "truskawki", "czeresnie", "jagody"];

console.log(arr2[0]);
console.log(arr2[arr2.length-1]);

function ulubione(arr2) {
    var result = [];
    for (var i =0; i<arr2.length; i++){
        result += arr2[i];
    }
    return result;
}
console.log(arr2);

// zad.B2

function printTable(array) {
    var result =[];
    for (var i=0; i<array.length; i++){
        result += array[i];
    }
    return result;
}
console.log(["Do", "Re", "Mi"]);

// zad B3

function factors(number) {
    if (number > 0) {
        console.log('Liczba OK!');
    } else {
        console.log('Liczba powinna być większa niż zero!');
    }
    var wyniki = [];
    for (var i = number; i>0; i--) {
        if (number % i === 0) {
            wyniki.push(i);
        }
    }
    console.log(wyniki);
}
console.log(factors(2));
console.log(factors(0));

// zad B4
function getMissingElement(array) {
    
}

