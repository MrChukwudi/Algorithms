/*let radom = "Random-Value";
const person = {
  name: "John",
  age: 20,
  married: true,
  siblings: ["Jane", "John", "Mary"],
  greet: function (name) {
    console.log("Hello " + name);
  },
  job: {
    titel: "Developer",
    level: "Junior",
    yearsWorked: 4,
    companysWorked: {
      firstWork: "Decagon",
      secondWorked: "Tesla",
      thirdWorked: "BMW",
    },
  },
  "property name": "Name",
  "Random-Value": "Charles",
};
person.street = "123 Main St";

console.log(person["property name"]);
console.log(person["Random-Value"]);
console.log(person[radom]);

*/
/*
// Constructor Function: Does not use return to produce a new object:
function Person(name, age) {
  this.myName = name;
  this.myAge = age;
  this.greeting = function () {
    console.log(`${this.myName} is ${this.myAge} years old`);
  };
}

let chima = new Person("John", 20);
console.log(chima);
console.log(chima.greeting());
*/
// Factory Function uses a return keyword to produce the new object:
/*




function Vehicle(make, model, year) {
  return {
    theMake: make,
    theModel: model,
    theYear: year,
    theAdvert: function () {
      console.log(
        `The vehicle is a ${this.theMake} and ${this.theModel} and is a ${this.theYear} make`
      );
    },
  };
}

let myCar = Vehicle("Toyota", "Corolla", 2020);
let herCar = Vehicle("Benz", "Brabus", 2018);

console.log(myCar);
myCar.theAdvert();
console.log(herCar);
herCar.theAdvert();
*/
// testing out the tenary Oerator:

/*let gender = prompt(`What is your partner's name?`);
let findgender = function (takegender) {
  let answer = takegender == "Female";
  console.log(answer);

  return answer == true
    ? `your partner is a Female`
    : `Yor partner is a ${takegender}`;
};
let neat = findgender(gender);
console.log(neat);
*/

// function weather(temp) {}

let temp = [12, 40, 23, 50, 77, 20, 1, 60, 50];

for (let i = 0; i < temp.length; i++) {
  let todayTemp = temp[i];
  console.log(todayTemp);
  let todayWeather = "";

  if (todayTemp > 10 && todayTemp < 20) {
    todayWeather = "It's an Ok day";
  } else if (todayTemp > 20 && todayTemp < 30) {
    todayWeather = "it's a Good day";
  } else if (todayTemp > 30 && todayTemp < 40) {
    todayWeather = "it's a bit hot today";
  } else if (todayTemp >= 41) {
    todayWeather = "It's a hot day";
  } else {
    todayWeather = "It's not a day";
  }
  console.log(todayWeather);
}
