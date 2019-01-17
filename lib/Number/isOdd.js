import isNumber from './isNumber'

/**
 * @note
 *
 *
 */
export default
(number) => {
    if (!isNumber(number)) {
        return TypeError('isOdd params1 expected a number')
    }
    return number % 2 === 0;
}
