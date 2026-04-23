import { add, subtract, multiply, divide, greet } from "./utils";

function main(): void {
  console.log("=== TypeScript Node.js Demo ===\n");

  console.log("Math operations:");
  console.log(`  add(5, 3)      = ${add(5, 3)}`);
  console.log(`  subtract(10, 4) = ${subtract(10, 4)}`);
  console.log(`  multiply(6, 7) = ${multiply(6, 7)}`);
  console.log(`  divide(15, 3)  = ${divide(15, 3)}`);

  console.log("\nGreeting:");
  console.log(`  ${greet("World")}`);
}

main();
