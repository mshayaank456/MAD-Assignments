const cities = ["Attock", "Islamabad", "Karachi", "Peshawar"];

console.log("Length:", cities.length);

console.log(cities.toString());

console.log(cities.at(1));

console.log("join('-'):", cities.join(" - "));

console.log(cities.pop()); 
console.log(cities);

cities.push("Lahore");
console.log(cities); 

console.log("shift():", cities.shift()); 
console.log(cities); 

cities.unshift("Quetta");
console.log(cities); 

delete cities[1];
console.log(cities); 

const moreCities = ["Faisalabad", "Multan"];
const allCities = cities.concat(moreCities);
console.log(allCities);

cities.copyWithin(1, 2);
console.log(cities); 

const nestedCities = [["Attock", "Islamabad"], ["Karachi", "Peshawar"]];
console.log(nestedCities.flat()); 

cities.splice(1, 1, "Hyderabad");
console.log(cities); 

const newCities = cities.toSpliced(2, 1);
console.log(newCities); 

const slicedCities = cities.slice(1, 3);
console.log(slicedCities);

console.log(cities.indexOf("Karachi")); 

console.log(cities.lastIndexOf("Karachi")); 

console.log(cities.includes("Islamabad")); 
console.log(cities.includes("Lahore")); 

const foundCity = cities.find(city => city.startsWith("K"));
console.log(foundCity); 

const foundIndex = cities.findIndex(city => city.startsWith("K"));
console.log(foundIndex); 

const foundLast = cities.findLast(city => city.startsWith("K"));
console.log(foundLast); 

const foundLastIndex = cities.findLastIndex(city => city.startsWith("K"));
console.log(foundLastIndex); 

cities.sort();
console.log("sort():", cities); 

cities.reverse();
console.log("reverse():", cities); 

let sortedCities = cities.toSorted();
console.log("toSorted():", sortedCities); 

let reversedCities = cities.toReversed();
console.log("toReversed():", reversedCities); 

let students = [
    { name: "Ali", age: 22 },
    { name: "Zain", age: 20 },
    { name: "Bilal", age: 25 }
];

students.sort((a, b) => a.age - b.age);
console.log("Sorted Objects by age:", students); 

numbers.sort(() => Math.random() - 0.5);
console.log("Random sort:", numbers); 

console.log("Math.min():", Math.min(...numbers)); 

console.log("Math.max():", Math.max(...numbers));
