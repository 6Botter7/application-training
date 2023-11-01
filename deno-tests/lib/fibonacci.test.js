import { assertEquals, beforeAll, describe, init, it } from "../dependencies.js";
import { findFibonacciNumber } from "../../lib/fibonacci/fibonacci.js";

describe("fibonacci numbers", () => {
    beforeAll(async () => {
        await init();
    });

    it("should return 0 for 0", () => {
        const result = findFibonacciNumber(0);

        assertEquals(result, 0);
    });

    it("should return 1 for 1", () => {
        const result = findFibonacciNumber(1);

        assertEquals(result, 1);
    });

    it("should return 1 for 2", () => {
        const result = findFibonacciNumber(2);

        assertEquals(result, 1);
    });

    it("should return 8 for 6", () => {
        const result = findFibonacciNumber(6);

        assertEquals(result, 8);
    });

    it("should return 55 for 10", () => {
        const result = findFibonacciNumber(10);

        assertEquals(result, 55);
    });

    it("should handle invalid inputs", () => {
        const result = findFibonacciNumber("abc");

        assertEquals(result, undefined);

        const result2 = findFibonacciNumber(-1);

        assertEquals(result2, undefined);

        const result3 = findFibonacciNumber(NaN);

        assertEquals(result3, undefined);

        const result4 = findFibonacciNumber(-7);

        assertEquals(result4, undefined)
    });

    it("should handle ", () => {

    });
});
