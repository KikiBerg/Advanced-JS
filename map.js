/**
 * To run this file in Gitpod, use the
 * command node map.js in the terminal
 */

// Using a for loop
let nums = [1, 2, 3, 4, 5];
let results = [];
for (let num of nums) {
  results.push(num * 2);
}
console.log(results);

// Using map()
const multByTwo = function (num) {
  return num * 2;
};
const mapResults = nums.map(multByTwo);
console.log(mapResults);

// Simplified w/ map()
const simplified = nums.map(function (num) {
  return num * 2;
});
console.log(simplified);

// Simplfied w/ map() + arrow function
const simplifiedArrow = nums.map((num) => num * 2);
console.log(simplifiedArrow);

// With objects:
const students = [
  {
    id: 1,
    name: "Mark",
    profession: "Developer",
    skill: "JavaScript",
    age: 22,
  },
  {
    id: 2,
    name: "Ariel",
    profession: "Developer",
    skill: "HTML",
    age: 24,
  },
  {
    id: 3,
    name: "Jason",
    profession: "Designer",
    skill: "CSS",
    age: 26,
  },
];

const studentsWithIds = students.map((student) => [student.name, student.id]);
console.log(studentsWithIds);

const studentsWithIds2 = students.map((student) => ({
  name: student.name,
  id: student.id,
}));
console.log(studentsWithIds2);

const studentsWithIdsAndAges = students.map((student) => ({
  name: student.name,
  id: student.id,
  age: student.age,
}));
console.log(studentsWithIdsAndAges);