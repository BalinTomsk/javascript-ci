import { add, subtract, multiply, divide, greet } from "../utils";

describe("Math utilities", () => {
  describe("add", () => {
    it("should add two positive numbers", () => {
      expect(add(2, 3)).toBe(5);
    });

    it("should add negative numbers", () => {
      expect(add(-1, -2)).toBe(-3);
    });

    it("should add zero", () => {
      expect(add(5, 0)).toBe(5);
    });
  });

  describe("subtract", () => {
    it("should subtract two numbers", () => {
      expect(subtract(10, 4)).toBe(6);
    });

    it("should return a negative result", () => {
      expect(subtract(3, 7)).toBe(-4);
    });
  });

  describe("multiply", () => {
    it("should multiply two numbers", () => {
      expect(multiply(6, 7)).toBe(42);
    });

    it("should multiply by zero", () => {
      expect(multiply(5, 0)).toBe(0);
    });
  });

  describe("divide", () => {
    it("should divide two numbers", () => {
      expect(divide(15, 3)).toBe(5);
    });

    it("should throw on division by zero", () => {
      expect(() => divide(10, 0)).toThrow("Division by zero is not allowed");
    });
  });

  describe("greet", () => {
    it("should return a greeting string", () => {
      expect(greet("World")).toBe("Hello, World!");
    });

    it("should include the provided name", () => {
      expect(greet("TypeScript")).toBe("Hello, TypeScript!");
    });
  });
});
