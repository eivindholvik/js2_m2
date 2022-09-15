// const myArray = [0, 2, 3, 2, 4, 3];
// // console.log(myArray);

// // myArray.forEach(() => {
// //   console.log("Hello World");
// // });

// console.log([0, 2, 3, 2, 4, 3].filter((ele) => ele > 3));

// const savedArray = ["hei på deg", 4];

// console.log(newArray);

const personsArray = [
  { firstName: "Eivind", age: 21, hasLicense: true },
  { firstName: "Sigrid", age: 15, hasLicense: false },
  { firstName: "Albert", age: 28, hasLicense: false },
  { firstName: "Stian", age: 24, hasLicense: true },
];

// const adultLicenseArray = personsArray.filter(
//   ({ age, hasLicense }) => age > 18 && hasLicense
// );

// console.log(adultLicenseArray);

// const yearPassed = (person) => {
//   const modifiedPerson = { ...person };
//   modifiedPerson.age++;
//   return modifiedPerson;
// };

// const mappedArray = personsArray.map(yearPassed);

// console.log(personsArray);
// console.log(mappedArray);

// const calculateVolumCylinder = ({ radius, height }) => {
//   return Math.PI * radius ** 2 * height;
// };

// const cylinders = [
//   { height: 3, radius: 3 },
//   { height: 2, radius: 3 },
//   { height: 4, radius: 8 },
// ];

// console.log(calculateVolumCylinder(2, 2));

// const cylinderVolumes = cylinders.map(calculateVolumCylinder);
// console.log(cylinderVolumes);

// const calculateVolumCylinder = ({ radius, height }) => {
//   const volume = Math.PI * radius ** 2 * height;
//   return { radius: radius, height: height, volume: volume };
// };

// const cylinders = [
//   { height: 3, radius: 3 },
//   { height: 2, radius: 3 },
//   { height: 4, radius: 8 },
// ];

// console.log(calculateVolumCylinder({ height: 2, radius: 2 }));

// const cylinderVolumes = cylinders.map(calculateVolumCylinder);
// console.log(cylinderVolumes);

// const myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// const evenArray = myArray.map((num) => (num + 1) * 2);

// console.log(evenArray);

// const values = [100, 200, 300, 400, 500];

// const endResult = values.reduce(
//   (previousValue, currentElement, index, array) => {
//     console.log(previousValue);
//     return previousValue;
//   }
// );
// console.log(endResult);
