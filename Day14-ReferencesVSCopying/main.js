let name = 'Wes';
let name2 = name;
console.log(name, name2);
name = 'wesley';
console.log(name, name2);

// ARRAYS
// let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
// and we want to make a copy of it.
const team = players;
console.log(players, team);
team[3] = 'Lux';
console.log(players, team);

// making copy of the array
const team2 = players.slice();
team2[3] = 'Lux';
console.log(players, team2);

const team3 = [].concat(players);

// another way to make a copy - ES6 Spread
const team4 = [...players];

// making copy with Array.from()
const team5 = Array.from(players);

// OBJECTS
const person = {
    name: 'Wes Bos',
    age: 80
};
// just a reference
const captain = person;
captain.number = 99;
console.log(person, captain);

// making copy of the object with Object.assign()
const captain2 = Object.assign({}, person, { number: 99 });
console.log(person, captain2);

// making copy with ES6 Spread
const captain3 = {...person};
