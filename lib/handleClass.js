//add class
function addClass(element, cls) {

    var oldList = classList(element),
        newList = oldList + cls;

    if (hasClass(element, cls)) return;

    element.className = newList.trim();

}

//remove class
function removeClass(element, cls) {

    var comCls = typeof element === "string" ? element : classList(element),
        newList;

    if (!hasClass(element, cls)) return;

    newList = comCls.replace(" " + cls + " ", " ");

    element.className = newList.trim();

}

//classlist
function classList(element) {

    return element && (" " + element.className + " ");

}

//hasClass
function hasClass(element, cls) {

    var className = classList(element);

    return className.indexOf(cls) >= 0;

}

