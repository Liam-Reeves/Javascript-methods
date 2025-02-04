const items = [
  { name: "Bike", price: 100 },
  { name: "TV", price: 200 },
  { name: "Album", price: 10 },
  { name: "Book", price: 5 },
  { name: "Phone", price: 500 },
  { name: "Computer", price: 1000 },
  { name: "Keyboard", price: 25 },
];
const filteredItems = items.filter((items) => {
  return items.price <= 100;
});

console.log("Items with price <= 100:");
console.log(filteredItems);

const itemNames = items.map((item) => {
  return item.name;
});
console.log(itemNames);

const foundItems = items.find((item) => {
  return item.name === "Album";
});
console.log(foundItems);

const allItems = items.forEach((item) => {
  console.log(item.name);
});

const numbers = [1, -1, 2, 3];
const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);

console.log("Sum of numbers:", sum);
