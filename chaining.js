// // const values = [0, 1, 2, 3, 4];

// // const filtered = values.filter((ele) => ele > 2);
// // const reduced = filtered.reduce(
// //   (prev, ele) => {
// //     prev[0] = prev[1] * 2;
// //     return prev;
// //   },
// //   [1, 2, 3]
// // );
// // const result = reduced.map((ele) => ele * 2);
// // console.log(result);

// // const result = values
// //   .filter((ele) => ele > 2)
// //   .reduce(
// //     (prev, ele) => {
// //       prev[0] = prev[1] * 2;
// //       return prev;
// //     },
// //     [1, 2, 3]
// //   )
// //   .map((ele) => ele * 2);
// // console.log(result);
// // The discount percentage being applied
// const DISCOUNT_PERCENTAGE = 20;

// const products = [
//   { name: "Milk", price: 5.0, inStock: true },
//   { name: "Cheese", price: 10.0, inStock: true },
//   { name: "Bread", price: 8.0, inStock: false },
//   { name: "Beans", price: 3.0, inStock: true },
//   { name: "Eggs", price: 12.0, inStock: true },
//   { name: "Rice", price: 4.0, inStock: false },
//   { name: "Meat", price: 25, inStock: true },
//   { name: "Coffee", price: 12.0, inStock: true },
//   { name: "Tea", price: 8.0, inStock: false },
//   { name: "Bottled Water", price: 4.0, inStock: false },
// ];

// const discountedProducts = products
//   .filter(({ inStock, price }) => {
//     if (inStock && price >= 5) return true;
//   })
//   .map((product) => {
//     const tempProduct = { ...product };
//     tempProduct.discountedPrice =
//       tempProduct.price - (DISCOUNT_PERCENTAGE / 100) * tempProduct.price;
//     return tempProduct;
//   });

// discountedProducts[0].someValue = 5;

// console.log(discountedProducts);
// console.log(products);
// // Returns:
// // {name: 'Milk', price: 5, inStock: true, discountedPrice: 4}
// // {name: 'Cheese', price: 10, inStock: true, discountedPrice: 8}
// // {name: 'Eggs', price: 12, inStock: true, discountedPrice: 9.6}
// // {name: 'Meat', price: 25, inStock: true, discountedPrice: 20}
// // {name: 'Coffee', price: 12, inStock: true, discountedPrice: 9.6}

console.log(new Date());
