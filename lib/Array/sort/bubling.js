/**
 * @note bubbling of sort
 * @param a
 * @param left
 * @param right
 * @param fn  {Function} if return > 0 to right else if < 0 to left else don't do
 */


const t = (a, left, right, midValue) => {
    for (let i = left; i < right; i++) {
        for (let j = left; j < right; j++) {
            let v1 = a[j];
            if ( (v1 || midValue) > a[j+1]) {
                a[j] = a[j+1]
                a[j+1] = v1
            }
        }
    }
    return a
}

function　merge(left, right){
    var　result=[];
    while(left.length>0 && right.length>0){
        if(left[0]<right[0]){
            /*shift()方法用于把数组的第一个元素从其中删除，并返回第一个元素的值。*/
            result.push(left.shift());
        }else{
            result.push(right.shift());
        }
    }
    return　result.concat(left).concat(right);
}

function　mergeSort(items){
    if(items.length == 1){
        return　items;
    }
    var　middle = Math.floor(items.length/2),
        left = items.slice(0, middle),
        right = items.slice(middle);
    return　merge(mergeSort(left), mergeSort(right));
}

const merge1 = (a,left,right,fn) => {
    const mid = Math.ceil(a.length / 2);
    const midValue = a[mid];
    const r = a.slice(mid);
    const l = a.slice(0,mid);
    return t(l,0,l.length - 1, midValue).concat(t(r,0,r.length - 1, midValue))
}

console.log(mergeSort([3,4,2,6,3,4,1,10,1]));
