/**
 * find a fraction such that the difference
 * between the fraction and the original decimal is minimized.
 * e.g. decimalToFraction(0.003125) => '1/3'
 */
export function decimalToFraction(decimal: number) {
    // Set a limit for the denominator
    const maxDenominator = 1000000 // You can adjust this value as needed

    // To avoid precision issues, handle the integer part separately
    const integerPart = Math.floor(decimal)
    decimal -= integerPart

    function gcd(a: number, b: number) {
        if (b < 0.0000001) return a // When the number after the decimal point is very small, we can consider that we have found the greatest common divisor
        return gcd(b, Math.floor(a % b)) // Use the Euclidean algorithm
    }

    // Set the best numerator and denominator
    let bestNumerator = 1
    let bestDenominator = 1
    let minError = Math.abs(decimal)

    for (let denominator = 1; denominator <= maxDenominator; denominator++) {
        const numerator = Math.round(decimal * denominator)
        const error = Math.abs(decimal - numerator / denominator)
        if (error < minError) {
            minError = error
            bestNumerator = numerator
            bestDenominator = denominator
        }
    }

    // Now that we have the best numerator and denominator, we need to find their greatest common divisor to simplify the fraction
    const theGCD = gcd(bestNumerator, bestDenominator)
    bestNumerator /= theGCD
    bestDenominator /= theGCD

    // If the integer part is not 0, add it back to the numerator
    if (integerPart !== 0) {
        bestNumerator = integerPart * bestDenominator + bestNumerator
    }

    return `${bestNumerator}/${bestDenominator}`
}
