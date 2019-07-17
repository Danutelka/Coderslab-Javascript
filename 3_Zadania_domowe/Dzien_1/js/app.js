// zad 1
function getNumber(a, array) {
    if (array.includes(a)) {
        console.log('true');
    } else {
        console.log('false');
    }
}
console.log(getNumber(2, [33, 54, 2, 1, 4, 100]));
console.log(getNumber(5, [33, 54, 2, 1, 4, 100]));

// zad 2
function createIdentityMatrix(rows, columns) {
    var matrix = new Array(columns)
    for (i=0; i < columns; i++) {
        matrix[i] = new Array(rows)
        for (j=0; j < rows; j++) {
            if (i ===j) {
                matrix[i][j] = 1 
            } else {
                matrix[i][j] = 0
            }
            }
        }
        return (matrix)
    }

console.log(createIdentityMatrix(4,4));

//zad3
function Tree (type) {
    this.type =type;
    
    this.bloom = function() {
        console.log ("I'm blooming")
    }
}
   
var treeOne = new Tree('choinka')
var treeTwo = new Tree('liściaste')
var treeThree = new Tree('kaktus')

console.log(treeOne.hasOwnProperty("bloom"));
console.log(treeThree.type);

//zad 1 dod

var addTheSameNumbers = function(inNumber, inArray) {
    var sum = 0;
    var found = false;
     for (var  i = 0; i< inArray.length; i++) {
        if (inArray[i] === inNumber) {
            sum += inNumber;
            found = true;
        }
    }
    if (!found) return null;
        else return sum;
    }

console.log(addTheSameNumbers(7, [4, 7, 24, 7, 0, 10]));
console.log(addTheSameNumbers(9, [33, 54, 2, 1, 9, 100]));
console.log(addTheSameNumbers(0, [33, 0, 2, 0, 9, 0]));
console.log(addTheSameNumbers(43, [6, 0, 2, 2, 3, 46]));

//zad 2 dod

function factors(liczba) {
    var tablica = []
    if (liczba <= 0) {
        return (tablica)
    } else {
        var i = 1
        while (i <= liczba) {
            while (liczba % i == 0) {
                tablica.push(liczba / i)
                i++
            }
            i++
        }
        return (tablica)
    }
}
console.log(factors(2));
console.log(factors(54));
console.log(factors(-4));

//zad 3 dod

function getMissingElement(array) {
    var missing = null;
    for (var i = 0; i < array.length; i++) {
        if (array[i + 1] - array[i] > 1) {
            missing = array[i] + 1;
        }
    }
    return missing
}

console.log(getMissingElement([1,2,3,4,5,6,7]));
console.log(getMissingElement([6,7,8,10,11,12,13,14,15]));
console.log(getMissingElement([-4,-3,-2,0,1,2,3,4]));

// zad 4 dod
function getLastNumbers(liczba, tablica) {
    if (typeof liczba === "number") {
        result = tablica.slice(liczba * -1)
    } else {
        tablica = []
        result = tablica
    }
    return (result)
}
console.log(getLastNumbers(2, [1,2,3,4,5,6,7])); //=>[6, 7]
console.log(getLastNumbers(4, [6,7,8,10,11,12,13,14,15])); //=> [12, 13, 14, 15]
console.log(getLastNumbers([-4,-3,-2,0,1,2,3,4])); //=> []
console.log(getLastNumbers('ala', [-4,-3,-2,0,1,2,3,4])); //=> []