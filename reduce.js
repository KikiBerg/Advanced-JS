/**
 * To run this file in Gitpod, use the
 * command node reduce.js in the terminal
 */

// Summing an array of numbers:
const nums = [0, 1, 2, 3, 4];
let sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum);

const teamMembers = [
  {
    name: "Andrew",
    profession: "Developer",
    yrsExperience: 5,
  },
  {
    name: "Ariel",
    profession: "Developer",
    yrsExperience: 7,
  },
  {
    name: "Michael",
    profession: "Designer",
    yrsExperience: 1,
  },
  {
    name: "Kelly",
    profession: "Designer",
    yrsExperience: 3,
  },
  {
    name: "Mark",
    profession: "Manager",
    yrsExperience: 3,
  },
];

// Totaling a specific object property
let totalExp = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0);
console.log(totalExp);

// Grouping by a property, and totaling it too
let expByProf = teamMembers.reduce((acc, curr) => {
  let key = curr.profession;
  if (!acc[key]) {
    acc[key] = curr.yrsExperience;
  } else {
    acc[key] += curr.yrsExperience;
  }
  return acc;
}, {});
console.log(expByProf);

// Provide an array of the names of those employees for each profession
let namesByProf = teamMembers.reduce((acc, curr) => {
  let keys = curr.profession;
  if (!acc[keys]) {
    acc[keys] = [curr.name];
  } else {
    acc[keys].push(curr.name);
  }
  return acc;
}, {});
console.log(namesByProf);

// If there were 100 employees and 20 different professions, you would want to filter out only the ones in a specific profession and find the one with the most experience
let specificProf = "Developer"; // Change this to the profession you want to filter by
let mostExpInProf = teamMembers.filter(member => member.profession === specificProf).reduce((acc,curr)=>curr.yrsExperience>acc.yrsExperience?curr:acc);
console.log(mostExpInProf);