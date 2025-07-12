const args = process.argv.slice(2);

function add(a, b) {
  return a + b;
}

if (args[0] === undefined) {
  console.log("No argument");
} else if (args[1] === undefined) {
  console.log("Argument: " + args[0]);
} else {
  const num1 = parseInt(args[0], 10);
  const num2 = parseInt(args[1], 10);

  if (isNaN(num1) || isNaN(num2)) {
    console.log("Please provide valid integers");
  } else {
    console.log(add(num1, num2));
  }
}
