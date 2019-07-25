/* zadanie A1
 Zajrzyj do pliku zadanieA1.js – jest tam napisany szkielet funkcji przyjmującej tablicę.
  Dopisz ciało funkcji w taki sposób, żeby zwracać true (wartość booleanowską), 
  kiedy tablica ma liczby rosnące (każda następna jest większa od poprzedniej), 
  a false – jeżeli nie. Pamiętaj, żeby użyć słowa kluczowego return do zwracania 
  danych z funkcji.
 */


function isNumbersGrowing(array) {
    // Do tablicy możesz się odnieść przez zmienną array.
    // Pamiętaj o zwróceniu poprawnych danych (return true albo return false).
    for (var i = 0; i <array.length -1; i ++) {
        if ((array[i]) >= (array[i+1])) {
            return false;
        }
    }
    return true;
}

console.log("tablica [1,2,3,4,5,6,7]  jest rosnąca (powinno zwrócić true) " + isNumbersGrowing([1,2,3,4,5,6,7]));
console.log("tablica [1,2,10,4,5,6,7] nie jest rosnąca (powinno zwrócić false) " + isNumbersGrowing([1,2,10,4,5,6,7]));
console.log("tablica [-5,-4,0,4,6,21]  jest rosnąca (powinno zwrócić true) " + isNumbersGrowing([-5,-4,0,4,6,21]));
console.log("tablica [-1,2,-1,4,5,6,7] nie jest rosnąca (powinno zwrócić false) " + isNumbersGrowing([-1,2,-1,4,5,6,7]));
console.log("tablica [8]  jest rosnąca (powinno zwrócić true) " + isNumbersGrowing([8]));
