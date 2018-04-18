
export function addClass(element, cls) {
    var oldList = classList(element),
        newList = oldList + cls;
    if (hasClass(element, cls)) return;
    element.className = newList.trim();
}

export function removeClass(element, cls) {
    var comCls = typeof element === "string" ? element : classList(element),
        newList;
    if (!hasClass(element, cls)) return;
    newList = comCls.replace(" " + cls + " ", " ");
    element.className = newList.trim();
}

export function classList(element) {
    return element && (" " + element.className + " ");
}

export function hasClass(element, cls) {
    var className = classList(element);
    return className.indexOf(cls) >= 0;
}

export default {addClass,hasClass,classList,removeClass}