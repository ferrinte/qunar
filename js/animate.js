
// 多属性运动框架  添加回调函数
function animate(obj,json,fn) { 
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        var flag = true;  // 用来判断是否停止定时器 
        for(var attr in json){  
            var current = 0;
            if(attr == "opacity")
            {
                current = Math.round(parseInt(getStyle(obj,attr)*100)) || 0;
                //console.log(current);
            }
            else
            {
                current = parseInt(getStyle(obj,attr)); // 数值
            }
            // console.log(current);

            var step = ( json[attr] - current) / 10;  // 步长  用目标位置 - 现在的位置 / 10
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            if(attr == "opacity")  
            {
                if("opacity" in obj.style)  // 判断浏览器是否支持opacity
                {
                    // obj.style.opacity
                    obj.style.opacity = (current + step) /100;
                }
                else
                {  // obj.style.filter = alpha(opacity = 30)
                    obj.style.filter = "alpha(opacity = "+(current + step)* 10+")";

                }
            }
            else if(attr == "zIndex")
            {
                obj.style.zIndex = json[attr];
            }
            else
            {
                obj.style[attr] = current  + step + "px" ;
            }

            if(current != json[attr]) 
            {
                flag =  false;
            }
        }
        if(flag)  // 用于判断定时器的条件
        {
            clearInterval(obj.timer);
            if(fn)  
            {
                fn(); 
            }
        }
    },10)
}
function getStyle(obj,attr) {  //  谁的      那个属性
    if(obj.currentStyle)  // ie 等
    {
        return obj.currentStyle[attr];  // 返回传递过来的某个属性
    }
    else
    {
        return window.getComputedStyle(obj,null)[attr];  // w3c 浏览器
    }
}