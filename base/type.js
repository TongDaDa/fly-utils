
/**
 * 
 * @param {*} value 
 * 
 */

var type = function(value){

    return Object.prototype.toString.call(value).slider(7,value.length-1).toLowerCase();

};