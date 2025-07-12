const args = process.argv.slice(2);
const firstArg = args[0];

// Use parseInt and check if the result is a valid number with isNaN
const num = parseInt(firstArg, 10);

if (isNaN(num)) {
  console.log("Not a number");
} else {
  console.log("My number: " + num);
}
