function greet(username) {
  console.log("Good Morning" + username);
}

greet("Bruce"); // Outputs: Good Morning

function add(a, b) {
  return a + b;
}

const sum = add(2, 4);

console.log(sum); // Outputs: 6

const arrowSum = (c, d) => {
  return c + d;
};

const arrowResult = arrowSum(3, 5);

console.log(arrowResult); // Outputs: 8
