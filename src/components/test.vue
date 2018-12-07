<template>
<div>
    <div class="view">
        <ul  id="view-li">
            <li>
                <span></span>
                <span></span>
                <span></span>
            </li>
            <li>
                <span></span>
                <span></span>
                <span></span>
            </li>
            <li>
                <span></span>
                <span></span>
                <span></span>
            </li>
            <li>
                <span></span>
                <span></span>
                <span></span>
            </li>
        </ul>
    </div>
    <ul id="position">
        <li class="cur"></li>
        <li class=""></li>
        <li class=""></li>
    </ul>
</div>
</template>

<script>
export default {
  	name: 'join',
 	data(){
   		return {
           
   		}	
    },
    methods: {
    	init(){
            var index = 0;
            var flag = true;
            var timer = setInterval(function(){
                if (flag == true) {
                    flag = false;
                    index--;
                    if(index==1){
                        index--;
                    }
                    if(index < 0){
                        index = 3;
                    }
                    $("#view-li li").each(function(key, value) { //0 1 2 3 4
                        $(this).css({
                           "transform": "rotateX(" + (index * 90) + "deg)",
                           "transition-delay": (key * 0.2) + "s"
                        });
                    });
                    var liI = index;
                    if(index==3){
                        liI = 1;
                    }
                    $("#position li").eq(liI).addClass('cur').siblings().removeClass("cur");
                    setTimeout(function() {
                       flag = true;
                    }, 1000);
                }
            },4000);
        }
        
    },
    mounted(){
        this.init();
    }
}
</script>

<style scoped>
 * {
    padding:0;
    margin:0;
}
.view {
    width:100%;
    height:480px;
    position:relative;
}
ul {
    width:100%;
    height:100%;
    list-style:none;
    transform-style:preserve-3d;
}
ul > li {
    width:25%;
    height:100%;
    float:left;
    position:relative;
    transform-style:preserve-3d;
    transition:transform 0.5s;
}
ul > li > span {
    width:100%;
    height:100%;
    position:absolute;
    left:0;
    top:0;
}
ul > li > span:nth-of-type(1) {
    background:url("../assets/img/banner01.png");
    background-size: 400% 100%;
    transform:translateZ(150px);
}
ul > li > span:nth-of-type(2) {
    background:url("../assets/img/banner02.png");
    background-size: 400% 100%;
    transform:translateY(-150px) rotateX(90deg);
}
ul > li > span:nth-of-type(3) {
    background:url("../assets/img/department.png");
    transform:translateZ(-150px) rotateX(180deg);
    background-size: 400% 100%;
}
ul > li:nth-of-type(2) > span {
    background-position:-100% 0;
}
ul > li:nth-of-type(3) > span {
    background-position:-200% 0;
}
ul > li:nth-of-type(4) > span {
    background-position:-300% 0;
}
ul > li:nth-of-type(5) > span {
    background-position:-400% 0;
}
#position{
    position: absolute;
    margin: 0;
    width: 80px;
    text-align: center;
    right: 50%;
    margin-right: -40px;
    top: 450px;
}
#position li{
    width: 10px;
    height: 10px;
    margin:0 2px;
    display: inline-block;
    -webkit-border-radius: 5px;
    border-radius: 5px;
    background-color: #fff;
    cursor: pointer;
}
#position .cur{
    background-color: #ff0000;
    width: 20px;
}
</style>

