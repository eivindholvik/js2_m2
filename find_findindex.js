// const myArray = [
//   "Henrik",
//   "Sarah",
//   "Eilef",
//   "Sarah",
//   "Alex",
//   "Sandra",
//   "Linda",
// ];

// const myName = myArray.findIndex((name) => {
//   return name === "Sarah";
// });

// console.log(myName);

// const myArray = [
//   { name: "Henrik", id: 2, activities: "Padel" },
//   { name: "Sandra", id: 3, activities: "Jogge" },
//   { name: "Sarah", id: 7, activities: "Hønsejakt" },
//   { name: "Henrik", id: 23, activities: "Fotballdans" },
// ];

// const loggedInUser = myArray.find(({ id }) => {
//   return id === 7;
// });

// loggedInUser.activities = "Ihvertfall ikke hønsejakt!";

// console.log(loggedInUser);

// console.log(myArray);

const myArray = [
  { name: "Agurk", inStock: false, quantity: 3 },
  { name: "Anis", inStock: true, quantity: 1700 },
  { name: "Tomat", inStock: true, quantity: 4 },
  { name: "Fingermat", inStock: true, quantity: 2 },
];

const findMyAItem = (item) => {
  return item.name.toLowerCase()[0] === "a" && item.inStock;
};

console.log(myArray.find(findMyAItem));
console.log(myArray.findIndex(findMyAItem));
console.log(myArray.filter(findMyAItem));
console.log(myArray.some(findMyAItem));
