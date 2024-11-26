/**
 * find a fraction such that the difference
 * between the fraction and the original decimal is minimized.
 * e.g. decimalToFraction(0.003125) => '1/320'
 */
export function decimalToFraction(decimal: number) {
    // Set a limit for the denominator
    const maxDenominator = 1000000 // You can adjust this value as needed

    // To avoid precision issues, handle the integer part separately
    const integerPart = Math.floor(decimal)
    decimal -= integerPart

    // Set the best denominator
    let bestDenominator = 1
    let minError = Math.abs(decimal - 1)

    for (let denominator = 1; denominator <= maxDenominator; denominator++) {
        const error = Math.abs(decimal - 1 / denominator)
        if (error < minError) {
            minError = error
            bestDenominator = denominator
        }
    }

    // If the integer part is not 0, add it back to the numerator
    let bestNumerator = 1
    if (integerPart !== 0) {
        bestNumerator = integerPart * bestDenominator + bestNumerator
    }

    return `${bestNumerator}/${bestDenominator}`
}
