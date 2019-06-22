<img alt="Logo" src="http://coderslab.pl/svg/logo-coderslab.svg" width="400">

# JavaScript - Snippety
> Krótkie kawałki kodu, które pokazują zależności, rozwiązują popularne problemy oraz pokazują jak używać niektórych funkcji.

#### 1. Tworzenie obiektów na podstawie konstruktora
```JavaScript```
function Animal(type) {
    this.type = type;
}

Animal.prototype.sayVoice = function(voice) {
    console.log(voice)
}

var lion = new Animal('lion');
lion.sayVoice("roar");

var pigeon = new Animal('pigeon');
pigeon.sayVoice("gru gru");
```
#### 2. Tworzenie obiektów za pomocą Object.create()

```JavaScriptvar
 Animal = {
    type: "",
    sayVoice: function(voice) {
        console.log(voice)
    }
}

var lion = Object.create(Animal);
lion.type = "lion";
lion.sayVoice("roar");


var pigeon = Object.create(Animal);
pigeon.type = "pigeon";
pigeon.sayVoice("gru gru");
```

#### 3. setInterval & clearInterval
> Ustaw interwały / powtórzenia

```JavaScript
var id = setInterval(function() {
    console.log('jestem wywolywana co 2 sekundy');
}, 2000 )

clearInterval(id);
```

#### 4. setTimeOut & clearSetTimeout
> Wykonaj kod po podanym czasie

```
JavaScript
var id = setTimeout(function() {
    setOpacity(1);
}, 1000);

clearSetTimeout(id);
```

#### 5 Różne rodzaje eventów

* click
```JavaScript
var button = document.getElementById('send');
button.addEventListener('click', function(){
    console.log('hurra kliknięto');
})
```

* keyup/keydown/keypress
```JavaScript
var inputField = document.getElementById('name');
inputField.addEventListener('keyup', function(){
    console.log('hurra wpisano tekst');
})
```
**keyup** - uruchamiany kiedy puszczasz klawisz;
**keydown** - uruchamiany kiedy klawisz jest wciśnięty;
**keypress** - uruchamiany kiedy klawisz jest wciśnięty, ale oddaje wpisany znak ukryty pod klawiszem, a nie numer klawisza tak jak poprzednie. Zobacz różnicę - http://jsfiddle.net/user2314737/543zksjc/3/show/


* mouseeneter/mouseleave/mousemove/mouseover
```JavaScript
var myButton = document.getElementById('myButton');
myButton.addEventListener('mouseeneter', function(){
    console.log('hurra najechano na element');
})
```
**mouseeneter** - uruchamiany raz kiedy wjeżdżasz kursorem na element, ale nie reaguje na dzieci;
**mouseover** - uruchamiany raz kiedy wjeżdżasz kursorem  nad element i jego dzieci;
**mouseleave** - uruchamiany kiedy zjedziesz kursorem z elementu;
**mousemove** - uruchamiany kiedy wykonujesz ruch kursorem jest nad elementem i jego dziećmi.


#### 6. Pobieranie różnych wartości z elementów z formularza
* input
```JavaScript
var inputField = document.getElementById('card');
inputField.value;
```

* checkbox
```JavaScript
var checkboxField = document.getElementById('condition')
checkboxField.checked
```

* radiobutton
```JavaScript
var radioBtn = document.getElementById('radio');
radioBtn.checked;
```
* textarea
```JavaScript
var msgField= document.getElementById('message');
msgField.value;
```
* select & option

 Pobranie
```JavaScript
var selectField = document.getElementById('infos');
selectField.options[msgField.selectedIndex].value;
```
Ustawienie
```JavaScript
var selectField = document.getElementById('infos');
selectField.options[1].selected = true
```
