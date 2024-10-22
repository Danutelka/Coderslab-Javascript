/*
W pliku zadanieA2.js – jest przykładowa funkcja obliczająca proste równania. 
Niestety nie działa ona dobrze. Znajdź błąd i go napraw, tak żeby funkcja działała. 
Dopisz dodatkowe testy, żeby sprawdzić, czy wszystkie przypadki działają. 
Zadanie rozwiąż w tym samym pliku.
 */


function myEval(a, b, operation) {
    var result = 0;
    switch(operation) {
        case'+': result = a + b; break;
        case'-': result = a - b; break;
        case'/': result = a / b; break;
        case'*': result = a * b; break;
        case'%': result = a % b; break;
        case'^': result = Math.pow(a, b); break;
    }
    return result;
}

console.log(" 2 + 4 = " + myEval(2, 4, "+"));
console.log(" 5 - 2 = " + myEval(5, 2, "-"));
console.log(" 4 ^ 8 = " + myEval(4, 8, "^"));
//poniżej dopisz pozostałe przypadki działań jakie ma obsługiwać funkcja
console.log(" 4 % 8 = " + myEval(4, 8, "%"));
console.log(" 4 / 8 = " + myEval(4, 8, "/"));
console.log(" 2 * 4 = " + myEval(2, 4, "*"));