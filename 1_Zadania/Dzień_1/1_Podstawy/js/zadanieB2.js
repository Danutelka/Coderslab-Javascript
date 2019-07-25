/*
Zajrzyj do pliku zadanieB2.js. Jest tam napisany szkielet funkcji przyjmującej trzy liczby.
Dopisz ciało funkcji tak, żeby zwracać true (wartość booleanowską), jeżeli z podanych 
liczb można stworzyć trójkąt , a false jeżeli nie. Tę figurę geometryczną można zbudować 
z trzech linii tylko wtedy, gdy suma długości dwóch z nich jest większa niż długość 
trzeciej linii, czyli:
a + b > c
c + b > a
a + c > b
Użyj if, else oraz else if. Następnie zmień rozwiązanie tak, 
aby zawrzeć wszystkie te punkty w jednym zapytaniu if (użyj operatorów logicznych). 
Pamiętaj żeby użyć słowa kluczowego return do zwracania danych z funkcji. 
Zadanie rozwiąż w tym samym pliku.
 */

function canCreateTriagle(a, b, c) {
    // Do liczb odwołuj się przez zmienne a, b i c.
    // Pamiętaj o zwróceniu poprawnych danych (return true albo return false).
    return (
        (a +b >c) && (c + b > a) && (a + c > b)
    )
}

/// z ifem
    /*
    if ( (a+b >c) && (c +b >a) && (a+c >b) ) {
        return true;
    } else {
        return false;
    }
    */

    if( (a+b >c) ) {
        if ( (c +b >a) ){
            if ((a +c >b) ) {
                return 'true';
            } else {
                return 'false';
            }
        } else {
            return false;
        }
    } else {
        return false;
};

console.log("z liczb 5, 6, 4 można stworzyć trójkąt (powinno zwrócić true) " + canCreateTriagle(5, 6, 4));
console.log("z liczb 100, 3, 6 nie można stworzyć trójkąta (powinno zwrócić false) " + canCreateTriagle(100, 3, 6));
console.log("z liczb 12, 14, 9 można stworzyć trójkąt (powinno zwrócić true) " + canCreateTriagle(12, 14, 9));
console.log("z liczb 3, 6, 200 nie można stworzyć trójkąta (powinno zwrócić false) " + canCreateTriagle(3, 6, 200));
console.log("z liczb 65, 53, 74 można stworzyć trójkąt (powinno zwrócić true) " + canCreateTriagle(65, 53, 74));
console.log("z liczb 600, 800, 1 nie można stworzyć trójkąta (powinno zwrócić false) " + canCreateTriagle(600, 800, 1));
