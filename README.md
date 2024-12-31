# TypeScript Type Mismatch in Arithmetic Functions

This repository demonstrates a common yet subtle error in TypeScript: type mismatches in function parameters. The `add`, `subtract`, `multiply`, and `divide` functions are designed to work with numbers. However, if you pass non-numeric values, TypeScript's type system won't catch it directly (unless you use strict type checking), leading to runtime errors. The `bug.ts` file shows the issue and how it may cause unexpected behavior. The `bugSolution.ts` file provides solutions for handling this.  This is especially relevant when working with user inputs or external data where type validation is crucial. 

## How to Reproduce
1. Clone this repository.
2. Compile the code using a TypeScript compiler (e.g., `tsc bug.ts`).
3. Run the resulting JavaScript code. Observe the behavior with numeric inputs and then try passing strings or other types.

## Solutions
The `bugSolution.ts` file offers a solution where using type assertions or runtime type checking ensures the inputs are numbers.