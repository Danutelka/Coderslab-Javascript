/**
 * Created by Jacek on 2016-01-11.
 */

 // zad A1
function checkArray(array) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
       var array2 = array[i];
       var everyIsParzysta = true; //zakladam wszystkie sa parzyste
       for (var j = 0; j < array2.length; j++) {
           if (array2[j] % 2 == 1) { //jezeli jakas nie jest
               everyIsParzysta = false;//zmieniam even na false
               break;
           }
       }
      result.push(everyIsParzysta); 
    }
    return result;
}

var arr = [
    [11, 12],
    [42, 2],
    [-4, -120],
    [0, 0],
    [1, 34],
    ];

console.log(checkArray(arr));

var arr2 = [
    [3, 4, 56, 773, 1],
    [7, 12, 0, 98, 34, 381],
    [12, 66, 96, 54, 10],
    ];

console.log(checkArray(arr2));

// zad B1
