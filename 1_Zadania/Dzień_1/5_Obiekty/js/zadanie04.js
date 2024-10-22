/* zadanie 4
W pliku zadanie04.js możesz znaleźć przykładowy konstruktor dla robota. 
Konstruktor oczekuje, że podasz tylko imię robota. 
Wszystkie roboty mają od razu kilka metod (metody dodane są przez prototypy).
 twórz kilka robotów i sprawdź, czy w napisanym kodzie nie ma błędów.
*/


var Robot = function(name) {
  this.name = name;
  this.isFunctional = true;
}

Robot.prototype.sayHi = function(toWho) {
  if(isFunctional === true) {
    console.log("Robot " + this.name + " greets " + toWho);
  }
  else{
    console.log("Robot " + this.name + "is broken");
  }
};

Robot.prototype.changeName = function(newname) {
  console.log("Robot " + this.name + "changes name to " + newname);
  name = newname;
};

Robot.prototype.fixIt = function() {
  this.isFunctional = true;
  console.log("Robot " + this.name + "was fixed");
};
