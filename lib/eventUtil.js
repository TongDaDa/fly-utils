/**
 * 
 * 
 * 兼容版 Event
 * 
 */
const EventUtil = {

   getEvent:event=>event ? event :  window.event,
   
  /**
   * @param {String} handle 类型，如果不为 'add' 表示移除
   * @param {DOMElement} element 元素
   * @param {String} type 事件类型
   * @param {Function} fun 触发函数
   */
   handle(handle,element,type,fun){
       if(window.addEventListener){  /** DOM2级 */
        handle === "add" ? element.addEventListener(type,fun) : element.removeEventListerner(type,fun)
       }else if(window.attachEvent){  /** IE */
        handle === "add" ? element.attachEvent(type,fun) : element.detachEvent(type,fun)
       }else{   /** DOM1级 */
        let eleHandle = element[`on${tyoe}`];
        handle === "add" ? eleHandle = fun : eleHandle = null; 
       }
   },

   stopPropagation(event){
    if(event.stopPropagation){
        event.stopPropagation();
    }else{
        event.cancelBubble = true;
    }
   },

   preventDefault(event){
    if(event.preventDefault){
        event.preventDefault();
    }else{
        event.returnValue = true;
    }
   }

}