/**
 * find a fraction such that the difference
 * between the fraction and the original decimal is minimized.
 * e.g.
 *  decimalToReciprocalFraction(0.003125) => '1/320'
 *  decimalToReciprocalFraction(0.0012) => '1/833'
 */
export function decimalToReciprocalFraction(decimal: number) {
    const denominator = Math.round(1 / decimal)
    return `1/${denominator}`
}
