/**
 * Created by Jacek on 2016-01-11.
 */

 //zad 2
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

// zad 3
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

// zad 5

var Rectangle = function (dlg, szr) {
    this.dlg = dlg;
    this.szr = szr;
};

Rectangle.prototype.x = function () {
    var z = this.szr * this.dlg;
    console.log(z);
    var t = this.szr / this.dlg;
    console.log(t);
};

var w = new Rectangle(5,10);
w.x();

var u  = new Rectangle(20,60);
u.x();
