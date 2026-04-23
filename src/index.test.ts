import { greet } from "./greet";

describe("greet", () => {
  it("returns a greeting message", () => {
    expect(greet("World")).toBe("Hello, World!");
  });

  it("includes the provided name", () => {
    expect(greet("TypeScript")).toBe("Hello, TypeScript!");
  });
});
