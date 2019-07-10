/**
 * Created by Jacek on 2016-01-11.
 */

 //zad 2
var car = function(marka, kolor, liczba_km=0) {
    this.marka=marka;
    this.kolor=kolor;
    this.liczba_km=liczba_km;
    about: printCarinfo(car) {
            console.log(this.marka);
            console.log(this.kolor);
            console.log(this.liczba_km);
    }
};
var bmw = ("BMW", "czarny", 0);

