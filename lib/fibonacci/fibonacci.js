/**
 * @method findFibonacciNumber - finds the fibonacci sequence up to a given number
 * @param n - the number to find the fibonacci sequence up to
 * @return {number}
 */
export function findFibonacciNumber(n) {
    const number = parseInt(n);

    if (isNaN(number) || number < 0) {
        console.warn("Invalid input. Please enter a valid non-negative integer.");
        return undefined;
    } else if (number <= 1) {
        return number;
    } else {
        return findFibonacciNumber(number - 1) + findFibonacciNumber(number - 2);
    }
}






