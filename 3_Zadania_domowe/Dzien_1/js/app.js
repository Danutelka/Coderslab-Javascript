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
var matrix = [];
function createIdentityMatrix(rows, columns) {
    for (var i=0; i < rows; i++) {
        matrix.push([i]);
        for (var j=0; j < columns; j++) {
            if (i ===j) {
                matrix[i].push(1); 
            } else {
                matrix[i].push(0);
            }
            }
        }
    };

//console.log(createIdentityMatrix(4,4));

//zad3
var Tree = function(type) {
    this.type =type;
    // var bloom = function() {
        //console.log( this.type + "I'm blooming");
    };

var tr1 = new Tree("choinka");
var tr2 = new Tree("liściaste");

console.log(tr1.type);
console.log(tr2.type);

// Tree.Prototype.bloom = function() {
   // return "I'm blooming";
//}

// console.log(tr1.hasOwnProperty());