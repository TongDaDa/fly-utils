/**
 * Created by liutong on 17/6/25.
 */
import Event from './Event';
import classes from 'component-classes';
import {type} from '../util/type';

const fixStyle = ["","-webkit-","-o-","-moz-","-ms"];

function getStyleProperty(node,name){
    let ret = "";
    const style = window.getComputedStyle(node,null);
    for(let i =0; i<fixStyle.length; ++i){
        ret = style.getPropertyValue(fixStyle[i] + name);
        if(ret){
            break;
        }
    }
    return ret;
}

// 添加延时出来的属性
function fixBrowserByTimeout(node){
    const transitionDelay = parseFloat(getStyleProperty(node, 'transition-delay')) || 0;
    const transitionDuration = parseFloat(getStyleProperty(node, 'transition-duration')) || 0;
    const animationDelay = parseFloat(getStyleProperty(node, 'animation-delay')) || 0;
    const animationDuration = parseFloat(getStyleProperty(node, 'animation-duration')) || 0;

    const Max = Math.max(transitionDelay+transitionDuration,animationDelay+animationDuration);

    node.rcEndTimeout = setTimeout(()=>{
        node.rcEndTimeout = null;
        if(node.rcEndListener){
            node.rcEndListener();
        }
    },Max * 1000 + 200)
}

export default function cssAnimation(node,transitionCls,endcallback){
    //判断类型创建 className 和 active
    const isTranCls = type(transitionCls) === "object";

    const className = isTranCls ? transitionCls.name : transitionCls;
    const ActiveClassName = isTranCls ? transitionCls.active : `${transitionCls}-active`;

    // callback 3种类型
    const comNode = classes(node);
    let end = endcallback;
    let start;
    let active;

    if(type(endcallback) === "object"){
        end = endcallback.end;
        start = endcallback.start;
        active = endcallback.active;
    }

    node.rcEndListener = (e)=>{

        if(e && e.target !== node){ return; }

        if(node.rcAnimTimeout){
            clearTimeout(node.rcAnimTimeout);
            node.rcAnimTimeout = null;
        }

        if(node.rcEndTimeout){
            clearTimeout(node.rcEndTimeout);
            node.rcEndTimeout = null;
        }

        comNode.remove(className).remove(ActiveClassName);

        Event.removeEndEventListener(node,node.rcEndListener);

        node.rcEndListener = null;

        if(end){ end(); }
    };

    Event.addEndEventListener(node,node.rcEndListener);

    if(start){
        //执行回调
        start();
    }

    comNode.add(className);

    node.rcTransTimeout = setTimeout(()=>{
        node.rcTransTimeout = null;

        if(active){ active(); }

        comNode.add(ActiveClassName);

        fixBrowserByTimeout(node);
    },30);
}

cssAnimation.style = (node,style,callBack)=>{

    node.rcEndListener = (e)=>{

        if(e && e.target !== node){ return; }

        if(node.rcTransTimeout){
            clearTimeout(node.rcTransTimeout);
            node.rcTransTimeout = null;
        }

        if(node.rcEndTimeout){
            clearTimeout(node.rcEndTimeout);
            node.rcEndTimeout = null;
        }

        Event.removeEndEventListener(node,node.rcEndListener);

        node.rcEndListener = null;

        if(callBack){ callBack(); }
    };

    Event.addEndEventListener(node,node.rcEndListener);

    node.rcTransTimeout = setTimeout(()=>{
        node.rcTransTimeout = null;

        for(let s in style){
            if(style.hasOwnProperty(s)){
                node.style[s] = style[s];
            }
        }

        fixBrowserByTimeout(node);
    },0)

}