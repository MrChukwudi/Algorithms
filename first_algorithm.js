let radom = "Random-Value";
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
