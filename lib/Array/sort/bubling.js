/**
 * @note bubbling of sort
 * @param a
 * @param left
 * @param right
 * @param fn  {Function} if return > 0 to right else if < 0 to left else don't do
 */
export default (a, left, right, fn) => {
    for (let i = left; i < right; i++) {
        const v = a[i];
        for (let j = i; j < a.length; j++) {
            const v1 = a[j];

        }
        const res = fn ? fn(v,a[i+1]) : 0;
        if (res > 1) {
        } else if (res < 1) {

        }
    }
}