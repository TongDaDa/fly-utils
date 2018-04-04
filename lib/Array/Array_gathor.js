var type = require("../../base/type");

/**
 * 数组交集
 * @param {arr[i]->简单类型值} arr1
 * @param {arr[i]->简单类型值} arr2
 */
var arrayConcat = function (arr1, arr2) {

    if (type(arr1) !== "array" || type(arr2) !== "array") {
        console.error("arrayConcat param is not a array");
        return;
    }
    ;

    var arr = [];

    arr1.forEach(function (i, k) {

        if (arr2.indexOf(i) !== -1) arr.push(i);

    });

    return arr;
};

/**
 * 数组并集
 */
var arrayCombine = function (arr1, arr2) {

    var arr = [];

    arr1.forEach(function (i, k) {

        if (arr2.indexOf(i) !== -1) {
            arr.push(i)
        } else {

            arr.push(i);
            arr.push(arr2[k]);

        }

    });

    return arr;

};

/**
 * 数组补集
 */
var arrayPick = function(arr1,arr2){
    var arr = [];
        arr1.forEach(function(i,k){
            if(arr2.indexOf(i) === -1) arr.push(i);
        });
    return arr;
};

export {arrayConcat,arrayCombine,arrayPick};