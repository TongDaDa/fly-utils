var css = (function(){
    var prefixCls = ["Webkit","O","Moz","ms"],
        cacheprefixCls = {};

    /**
     *  查询当前浏览器下能不能支持这个属性，如不支持，试用prefix回退方案
     *  pure string handle
     *  @param name 
     */
     function getPrefixCls (name){

        var style = document.body.style;

        if(name in style) return;

        var capName = name.charAt(0).toUpperCase() + name.substring(1),
            i = prefixCls.length,
            vendorName;

        while(i--){

            vendorName = prefixCls[i] + capName;

            if(vendorName in style) return vendorName;

        }

        return name;
     }


     function applyStyle (elment,property,value){

        var prop = getStyleProp(property);

        element.style[prop] = value;

     }

     // cache getPrefixCls to improve performance
     function getStyleProp(name){
         return cacheprefixCls[name] || (cacheprefixCls[name] = getPrefixCls(name));
     }

     return function (ele,properties){
        var args = arguments,
            prop,
            values;

        if(args.length >= 2){
            for(prop in properties){ 
                valaue = properties[prop];
                if(value !== void 0) { applyStyle(ele,prop,value); }
             }
        }else{
            applyStyle(ele,prop,value);
        }
     };
})();

export default css;