// Goal: Given this data array make a list of all the names,  a list of everyone over the age of 25, a string made up of the first letter in everybody's name.
// You should have three different variables when you're finished
const data = [
    {
        name: 'Josh',
        age: '26',
        position: 'Instructor'
    },
    {
        name: 'Sam',
        age: '27',
        position: 'Mentor'
    },
    {
        name: 'Jon',
        age: '24',
        position: 'Mentor'
    },
    {
        name: 'Dan',
        age: '25',
        position: 'Instructor'
    },
    {
        name: 'Luis',
        age: '35',
        position: 'Student'
    },
]

const names = data.map(e => e.name);

const over25 = data.filter(e => Number(e.age) > 25);

const firstLetters = data.reduce((l, e) => l += e.name[0], ``);

console.log(names);
console.log(over25);
console.log(firstLetters);