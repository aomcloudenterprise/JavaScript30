const people =[
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 },
];

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Nice Nice Nice!', id: 542328 },
];

// Array.prototype.some() - is at least one person 19?
const isAdult = people.some((person) => (new Date()).getFullYear() - person.year >= 19);
console.log(`Is at least one person 19? - ${isAdult}`);
// Array.prototype.every() - is everyone 19?
const allAdults = people.every((person) => (new Date()).getFullYear() - person.year >= 19);
console.log(`Is everyone 19? - ${allAdults}`);
// Array.prototype.find() - find the comment with ID of 823423
const comment = comments.find( comment => comment.id === 823423);
console.log(comment);
// Array.prototype.findIndex() - delete the comment with the ID of 823423
const index = comments.findIndex( comment => comment.id === 823423);

const newComments = [
    ...comments.slice(0, index),
    ...comments.slice(index +1)
];
console.table(newComments);
