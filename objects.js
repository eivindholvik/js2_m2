// const plane = {
//   name: "Boeing 737",
//   code: 737,
//   capasity: 800,
//   company1: "SAS",
//   company2: "Wideroe",
//   company3: "Norwegian",
//   company4: "KLM",
//   company5: "Qatar",
//   company6: "Emirates",
// };

// console.log(plane["company2"]);
// console.log("-------------for------------");

// for (let i = 1; i <= 2; i++) {
//   console.log(plane[`company${i}`]);
// }

// Statisk representasjon av for-løkke
// // Første itterasjon
// let i = 0;
// console.log(plane[`company${i + 1}`]);
// // Andre itterasjon
// i++;
// console.log(plane[`company${i + 1}`]);
// // Tredje itterasjon
// // i++;
// // if (i < 2) fortsett
// console.log("--------------for in-----------");

// for (const myKey in plane) {
//   if (/^company/.test(myKey)) {
//     console.log(`${myKey} is ${plane[myKey]}`);
//   }
// }

// const myArray = [0, 1, 4, 6, 7];

// for (const item of myArray) {
//   console.log(item);
// }

// console.log(Object.keys(plane).find((ele) => ele === "code"));
// console.log(Object.values(plane).find((ele) => ele === "SASS"));

// const threeArray = Object.entries(plane);
// console.log(threeArray);

// const myMap = new Map(threeArray);
// console.log(myMap);
