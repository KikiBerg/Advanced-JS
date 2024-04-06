/**
 * To run this file in Gitpod, use the
 * command node destructuring.js in the terminal
 */

// Destructuring arrays
let ages = [30, 26, 27];
//let john = ages[0];
//let mary = ages[1];
//let joe = ages[2];
let [john, mary, joe] = ages;
console.log(john, mary, joe);

// Destructuring objects
let jobs = {
  mike: "designer",
  jill: "developer",
  alicia: "accountant",
};
let { mike, jill, alicia } = jobs;
console.log(mike, jill, alicia);

// Destructuring subsets
let languages = ["english", "french", "spanish", "german", "japanese"];
let [johnNative, johnSecondary] = languages;
console.log(johnNative, johnSecondary);

let languages2 = {
  firstlanguage: "english",
  secondLanguage: "french",
  thirdLanguage: "german",
  fourthLanguage: "japanese",
};
let { firstlanguage, thirdLanguage } = languages2;
console.log(firstlanguage, thirdLanguage);

// Using rest parameter syntax
let fruits = ["apple", "orange", "banana", "peach", "cherry"];
let [favorite, secondFavorite, ...others] = fruits;
console.log(favorite);
console.log(secondFavorite);
console.log(others);

let favoriteFoods = {
  brian: "pizza",
  ana: "pasta",
  sara: "vegetarian",
  andrea: "steak",
};
let { brian, ana, ...rest } = favoriteFoods;
console.log(brian);
console.log(ana);
console.log(rest);
