/**
 *
 * @param obj
 * @param fields
 * @example
 *
 * @return {*}
 */
export function omit(obj, fields) {
    let copy = Object.assign({}, obj);
    for (let i = 0; i < fields.length; i++) {
        let key = fields[i];
        try { delete copy[key]; } catch (err) { }
    }
    return copy;
}