/* zadanie 1
Za pomocą prototypu dodaj metodę upperLower do wbudowanego w JavaScript obiektu String. 
Metoda zamieni podany ciąg znaków tak, że każdy znak nieparzysty w wyrazie będzie 
zamieniony na mała literę, a parzysty – na duża. Jeśli w ciągu występuje spacja, pomiń ją. 
Po rozwiązaniu zadania pomyśl, czy można funkcję zapisać w inny, łatwiejszy sposób.
 -> input
var funnyText = "Smiesznie".upperLower();
    output -> sMiEsZnIe
-> input
var funnyTextWithSpace = "Javascript jest super".upperLower();
    output -> jAvAsCrIpT jEsT sUpEr
 */

 /* zadanie 2
Stwórz obiekt samochód, utwórz dla niego odpowiednie atrybuty i metody.
Atrybuty: 1 -markę, 2 - kolor, 3 -liczbę przejechanych kilometrów (na początku 0).
Metody:
1 - printCarinfo() – metoda powinna wypisywać informacje o samochodzie (kolor, markę 
    i liczbę przejechanych kilometrów).
2 - drive(km) – która dodaje do przejechanych kilometrów podaną wartość. 
    Użyj słowa kluczowego this, żeby odwołać się do obiektu w środku metody.
*/

 var samochod = {
    marka: "bmw",
    kolor: "black",
    liczba_km: 0,
    printCarinfo: function () {
        console.log(samochod.marka);
        console.log(samochod.kolor);
        console.log(samochod.liczba_km);
    },
    drive : function (km) {
        this.liczba_km += km
    },
};
samochod.drive(20);
console.log(samochod);

/* zadanie 3
Do obiektu samochód z zadania 2. dodaj tablicę z listą dat przeglądów 
(niech będą to zwykłe napisy). Dodaj ten nowy atrybut poza ciałem obiektu. 
Dodaj też następujące metody:
1 - metodę dodającą wpis do tej tablicy,
2 - metodę wyświetlającą wszystkie przeglądy samochodu.
Użyj słowa kluczowego this, żeby odwołać się do obiektu w środku metody.
*/
var samochod2 = {
    marka: "bmw",
    kolor: "black",
    liczba_km: 0,
    printCarinfo: function () {
        console.log(samochod.marka);
        console.log(samochod.kolor);
        console.log(samochod.liczba_km);
    },
    drive : function (km) {
        this.liczba_km += km
    },
};
samochod2.daty = ["10","20","30"];
samochod2.dodaj=function (wpis) {
    this.daty.push(wpis)
};
samochod2.dodaj("25");
//console.log(samochod2);
samochod2.all = function () {
    console.log(this.daty)
};
samochod2.all();

/* zadanie 5
Stwórz konstruktor dla obiektów Rectangle, który będzie przyjmować informację na temat 
długości i szerokości nowo stworzonej figury. Następnie przy pomocy prototypu klasy 
dodaj do niej następujące metody:
1 - getArea() – metoda ma zwracać pole powierzchni,
2 - getPerimiter() – metoda ma zwracać obwód.
Stwórz kilka obiektów i zobacz, czy metody działają tak jak powinny.
*/


var Rectangle = function (dlg, szr) {
    this.dlg = dlg;
    this.szr = szr;
};

Rectangle.prototype.getArea = function () {
    var pole = this.szr * this.dlg; 
    console.log('Pole powierzchni wynosi:', pole);
};

Rectangle.prototype.getPerimiter = function () {
    var obwod = (2 * this.szr) + (2 * this.dlg);
    console.log('Obwód wynosi:', obwod)
};

var nowy1 = new Rectangle(5,10);
nowy1.getArea();
nowy1.getPerimiter();

var nowy2  = new Rectangle(20,60);
nowy2.getArea();
nowy2.getPerimiter();

/* zadanie 6
Stwórz konstruktor dla obiektów Calculator. Konstruktor ma nie przyjmować żadnych danych. 
Każdy nowo stworzony obiekt powinien mieć pustą tablicę, w której będzie trzymać historię
wywołanych operacji. Następnie przy pomocy prototypu klasy dodaj do niej następujące 
metody:
1 - add(num1, num2) – metoda ma dodać do siebie dwie zmienne i zwrócić wynik. 
 Dodatkowo w tablicy operacji ma zapamiętać napis: "added num1 to num2 got result" 
 (oczywiście z wartościami zmiennych podstawionymi w odpowiednie miejsce).
2 - multiply(num1, num2) – metoda ma pomnożyć przez siebie dwie zmienne i zwrócić wynik. 
 Dodatkowo w tablicy operacji ma zapamiętać napis: "multiplied num1 with num2 got result"
 (oczywiście z wartościami zmiennych podstawionymi w odpowiednie miejsce).
3 - subtract(num1, num2) – metoda ma odjąć od siebie dwie zmienne i zwrócić wynik. 
 Dodatkowo w tablicy operacji ma zapamiętać napis: "subtracted num1 from num2 got result"
 (oczywiście z wartościami zmiennych podstawionymi w odpowiednie miejsce).
4 - divide(num1, num2) – metoda ma podzielić przez siebie dwie zmienne i zwrócić wynik. 
 Dodatkowo w tablicy operacji ma zapamiętać napis: "divided num1 by num2 got result" 
 (oczywiście z wartościami zmiennych podstawionymi w odpowiednie miejsce).
5 - printOperations() – metoda ma wypisać wszystkie operacje zapamiętane w pamięci.
6 - clearoperations() – metoda ma wyczyścić wszystkie operacje z pamięci.
*/

var Calculator = function() {
    this.operations = [];
};

Calculator.prototype.add = function (num1, num2) {
    this.result = num1 + num2;
    this.operations.push("Added" + " " + num1 + " " + "to" + " " + num2 + " " + "got" + " " + this.result);
};

Calculator.prototype.multiply = function (num1, num2){
    this.result = num1 * num2;
    this.operations.push("Multiplied" + " " + num1 + " " + "with" + " " + num2 + " " + "got" + " " + this.result);
};

Calculator.prototype.subtract = function (num1, num2) {
    this.result = num1 - num2;
    this.operations.push("Subtracted" + " " + num1 + " " + "from" + " " + num2 + " " + "got" + " " + this.result);
};

Calculator.prototype.divide = function (num1, num2) {
    this.result = num1 / num2;
    this.operations.push("Divided" + " " + num1 + " " + "by" + " " + num2 + " " + "got" + " " + this.result);
};

Calculator.prototype.printOperations = function () {
    console.log("All operations: " + " " + this.operations);
};

Calculator.prototype.clearoperations = function () {
    this.operations = [];
    console.log("Operations cleared: " + " " + this.operations);
};

var myCalc = new Calculator();
myCalc.add(2, 7);
myCalc.multiply(3, 8);
myCalc.subtract(2, 5);
myCalc.divide(4, 7);
myCalc.printOperations();
// myCalc.clearoperations();
