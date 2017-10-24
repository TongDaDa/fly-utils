import {classList,hasClass,removeClass,addClass} from '../lib/handleClass';

describe("增删改查class测试",function(){

    const element = document.createElement("DIV");

    it("添加",function(done){

        addClass(element,"liutong");

        console.log(element.classList);

    });

    it("删除",function(){

    });

    it("查看",function(){

    });

    it("判断",function(){

    })
});