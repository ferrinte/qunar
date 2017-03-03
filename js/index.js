//index.js
    var oUl = document.querySelector('.lunbo');
    var pic = document.getElementById("ban").children[0].children;      // 轮播图图片
    var circle = document.getElementById("ban").children[1];            // 轮播图顺序
    var place1 = document.getElementById("place1");                     // 度假地区
    var place2 = document.getElementById("place2");                     // 攻略地区
    var box = document.getElementById("box");                           // 获取主要部分
    var header = document.getElementById("header");
    var list = box.children;

    /*辅助页面布局*/
    var arrPlace1 = ["西安旅游 ", " 乌镇旅游 ", " 南京旅游 ", " 三亚旅游 ", " 千岛湖旅游 ", " 武汉旅游 ", " 苏州旅游 ", " 厦门旅游 ", " 普吉岛旅游 ", " 张家界旅游 ", " 韩国旅游 ", " 西塘旅游 ", " 天津旅游 ", " 上海旅游 ", " 婺源旅游 ", " 杭州旅游 ", " 成都旅游 ", " 北京旅游 ", " 台湾旅游 ", " 青岛旅游 ", " 巴厘岛旅游 ", " 九寨沟旅游 ", " 香港旅游 ", " 鼓浪屿旅游 ", " 云南旅游 ", " 西藏旅游 ", ""];
    var arrPlace2 = ["上海旅游攻略 ", " 千岛湖旅游攻略 ", " 乌镇旅游攻略 ", " 南京旅游攻略 ", " 九寨沟旅游攻略 ", " 苏州旅游攻略 ", " 武汉旅游攻略 ", " 云南旅游攻略 ", " 张家界旅游攻略 ", " 厦门旅游攻略 ", " 台湾旅游攻略 ", " 香港旅游攻略 ", " 西安旅游攻略 ", " 杭州旅游攻略 ", " 北京旅游攻略 ", " 青岛旅游攻略 ", " 韩国旅游攻略 ", " 三亚旅游攻略 ", " 鼓浪屿旅游攻略 ", " 天津旅游攻略 ", " 西藏旅游攻略 ", " 西塘旅游攻略 ", " 巴厘岛旅游攻略 ", " 婺源旅游攻略 ", " 成都旅游攻略 ", " 普吉岛旅游攻略"];
    var address = ["baidu","tecent","wangyi","qq","sina","weibo","alibaba","google","mi"];
    var price = [4390,5888,7666,3999,6475,9283,9932,3432,7743];
    var tease = [80,92,90,98,94,90,87,95,98];
    // 底部度假
    for( var i = 0;i<arrPlace1.length;i++){
        place1.appendChild(place1.children[1].cloneNode(true));
       place1.children[(i+1)].innerHTML = arrPlace1[i];
    }
    // 底部攻略
    for( var i = 0;i<arrPlace2.length;i++){
        place2.appendChild(place2.children[1].cloneNode(true));
        place2.children[(i+1)].innerHTML = arrPlace2[i];
    }
    for( var i = 0;i<list.length;i++){
        list[i].children[0].setAttribute("src","images/tour"+(i+1)+".jpg" );
        list[i].children[1].setAttribute("href","https://www." + address[i] +".com" );
        list[i].children[4].children[0].innerHTML = "满意度" + tease[i] + "%";
        list[i].children[4].children[1].children[0].innerHTML = price[i];
    }

    // 轮播图
    for( var i = 0;i<pic.length;i++){
        pic[i].style.backgroundImage = "url(images/head0"+(i+1)+".png)";
        var li = document.createElement("li");
        circle.appendChild(li);
        li.innerHTML = (i+1);
        circle.children[i].index = i;     // 核心
        circle.children[i].onmouseover =function () {
            for (var i = 0;i<circle.children.length;i++){
                pic[i].style.display = "none";
            }
            pic[this.index].style.display = "block";
        };
    }
    circle.style.marginLeft = -(circle.offsetWidth)/2 + "px";
    circle.children[0].style.className = "current";            

    //定时器
    var timer = null;
    var k = 0;
    timer = setInterval(autoPlay,3000);
    function autoPlay() {
        k++;
        // console.log(k);
        if(k<pic.length+1){
            for ( var i = 0;i<circle.children.length;i++){
                circle.children[i].className = "";
                pic[i].style.display = "none";
            }
             circle.children[k-1].className = "current";  // 留下当前的 注意classname要写的详细在哪个ID下的
            //circle.children[k].style.color = "#000";
            pic[k-1].style.display = "block";
        }

        else{
            /*clearInterval(timer);*/
            k = 0;
        }
    };

    // 获取样式函数封装
    function getStyle(obj,attr) {
        if(obj.currentStyle){
            return obj.currentStyle[attr];
        }
        else{
            return window.getComputedStyle(obj,null)[attr];
        }
    }
