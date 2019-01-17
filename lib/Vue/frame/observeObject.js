/**
 * @param obj {Array | Object}
 * @param modified {Function}
 * @param options {Object}
 */
export default observerObj = (obj, notify, isDeep=true) => {
    const arrayMethods = ['unshift','shift','push','pop','reverse','splice','sort'];

    const arrProto = Object.create(Array.prototype);

    for (let i = 0; i < arrayMethods.length; i++) {
        let method = arrayMethods[i];
        Object.defineProperty(arrProto,method,{
            configurable:true,
            enumerable:true,
            writable:true,
            value: (...rest) => {
                notify(method,rest[0])
                arrProto.__proto__[method].apply(arr,rest)
            }
        })
    }

    const observe = (val) => {
        if (!val || !(val instanceof Object)) { return }
        if (Array.isArray(val)) {
            arr.__proto__ = arrProto
            if (isDeep) {
                for (let i = 0; i < arr.length; i++)  { return observe(arr[i]) }
            }
        } else {
            Object.keys(val).forEach((key) => {
                observeProperty(val,key,val[key])
                if (isDeep) { return observe(val[key]) }
            })
        }
    }

    const observeProperty = (obj,key,value) => {
        if (isDeep && value instanceof Object) {
            observe(value)
        }
        Object.defineProperty(obj,key,{
            get(){ if(value) return value },
            set(newVal){
                observe(newVal)
                notify('set', newVal);
                value = newVal;
            },
            configurable:true,
            enumerable:true
        })
    }
    observe(obj)
}

