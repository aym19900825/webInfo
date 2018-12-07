<template>
  <div class="container-fluid" style="padding-left: 0px;padding-right: 0px;overflow-x: hidden;">
    	<v-header navName="department"></v-header>
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
	        <ul id="position">
		        <li class="cur"></li>
		        <li class=""></li>
		        <li class=""></li>
		    </ul>
	    </div>
    	<div class="row bg" style="background: #FFFFFF;padding-left: 15px;padding-right: 15px;">
    		<div class="col-md-2"></div>
    		<div class="col-md-8 history">
    			<h4>旗下门店Brand Stores</h4>
    			<div class="table">
	    			<div class="item">
	    				<div class="left" style="line-height: 78rem;">
	    					<p>四川</p>
	    				</div>
	    				<div class="right">
	    					<div class="content-item">
	    						<p class="shopName">成都银石店</p>
	    						<p class="shopAdr">地址：成都市锦江区红星路三段99号银石广场5层</p>
	    						<p class="shopIphone">电话：028-69066000</p>
	    					</div>
	    					<div class="content-item">
	    						<p class="shopName">成都银泰店</p>
	    						<p class="shopAdr">地址：成都市武侯区益州大道1999号银泰城4层</p>
	    						<p class="shopIphone">电话：028-69907355</p>
	    					</div>
	    					<div class="content-item">
	    						<p class="shopName">成都龙湖店</p>
	    						<p class="shopAdr">地址：成都市郫都区高新西区合作路89号龙湖时代天街4层</p>
	    						<p class="shopIphone">电话：028-69181199</p>
	    					</div>
	    					<div class="content-item">
	    						<p class="shopName">成都悠方店</p>
	    						<p class="shopAdr">地址：成都市武侯区交子大道300号悠方购物中心5层</p>
	    						<p class="shopIphone">电话：028-86210287</p>
	    					</div>
	    					<div class="content-item">
	    						<p class="shopName">成都温江店</p>
	    						<p class="shopAdr">地址：成都市温江区光华大道三段1588号珠江广场3层</p>
	    						<p class="shopIphone">电话：028-64258855</p>
	    					</div>
	    					<div class="content-item" style="margin-bottom: 3.2em;">
	    						<p class="shopName">绵阳新世界店</p>
	    						<p class="shopAdr">地址：绵阳市涪城区临园路东段72号新世界百货5楼</p>
	    						<p class="shopIphone">电话：0816-5357070</p>
	    					</div>
	    				</div>
	    				<div class="clearfix"></div>
	    			</div>
	    			
	    			<div class="item">
	    				<div class="left" style="line-height: 16rem;">
	    					重庆
	    				</div>
	    				<div class="right">
	    					<div class="content-item" style="margin-bottom: 3.2em;">
	    						<p class="shopName">重庆爱琴海店</p>
	    						<p class="shopAdr">地址：重庆市渝北区金开大道1003号爱琴海购物公园4层</p>
	    						<p class="shopIphone">电话：023-63215723</p>
	    					</div>
	    				</div>
	    				<div class="clearfix"></div>
	    			</div>
	    			
	    			
	    			<div class="item">
	    				<div class="left" style="line-height: 16rem;">
	    					广东
	    				</div>
	    				<div class="right">
	    					<div class="content-item" style="margin-bottom: 3.2em;">
	    						<p class="shopName">珠海富华里店</p>
	    						<p class="shopAdr">地址：珠海市香洲区九洲大道西富华里10栋301号</p>
	    						<p class="shopIphone">电话：0756-8625900</p>
	    					</div>
	    				</div>
	    				<div class="clearfix"></div>
	    			</div>
	    			
	    			<div class="item">
	    				<div class="left" style="line-height: 16rem;">
	    					甘肃
	    				</div>
	    				<div class="right">
	    					<div class="content-item" style="margin-bottom: 3.2em;">
	    						<p class="shopName">兰州万达店</p>
	    						<p class="shopAdr">地址：兰州市城关区万达广场金雁巷步行街25-18号</p>
	    						<p class="shopIphone">电话：0931-8230686</p>
	    					</div>
	    				</div>
	    				<div class="clearfix"></div>
	    			</div>
	    			
	    			
	    			<div class="item">
	    				<div class="left" style="line-height: 28rem;">
	    					浙江
	    				</div>
	    				<div class="right">
	    					<div class="content-item">
	    						<p class="shopName">宁波吾悦店</p>
	    						<p class="shopAdr">地址：宁波市镇海区宁波镇望海海南路与永茂西路交叉口吾悦广场</p>
	    						<p class="shopIphone">电话：18058580733</p>
	    					</div>
	    					<div class="content-item" style="margin-bottom: 3.2em;">
	    						<p class="shopName">宁波银泰店</p>
	    						<p class="shopAdr">地址：宁波市北仑区中河路银泰城4层</p>
	    						<p class="shopIphone">电话：0574-86882277</p>
	    					</div>
	    				</div>
	    				<div class="clearfix"></div>
	    			</div>
	    			
	    			
	    			<div class="item">
	    				<div class="left" style="line-height: 16rem;">
	    					贵州
	    				</div>
	    				<div class="right">
	    					<div class="content-item">
	    						<p class="shopName">贵阳奥莱店</p>
	    						<p class="shopAdr">地址：贵阳市贵州双龙航空港经济区机场路9号与龙腾路交叉口北侧砂之船奥特莱斯A4-31号</p>
	    						<p class="shopIphone">电话：18585090184</p>
	    					</div>
	    				</div>
	    				<div class="clearfix"></div>
	    			</div>
	    			
	    			<div class="item">
	    				<div class="left" style="line-height: 16rem;">
	    					宁夏
	    				</div>
	    				<div class="right">
	    					<div class="content-item" style="margin-bottom: 3.2em;">
	    						<p class="shopName">银川大阅城店</p>
	    						<p class="shopAdr">地址：银川市正源北街建发大阅城5层</p>
	    						<p class="shopIphone">电话：0951-3805936</p>
	    					</div>
	    				</div>
	    				<div class="clearfix"></div>
	    			</div>
    			</div>
    		</div>
    		<div class="col-md-2"></div>
    	</div>
    	<div class="row" style="background: #FFFFFF;">
				<img src="../assets/img/map.png" alt="旗下门店" class="div-img map-img"/>
    	</div>
    	<v-footer></v-footer>
    </div>
</template>

<script>
import header from './common/header.vue'
import footer from './common/footer.vue'
export default {
  	name: 'about',
  	props: ['vid','businessCats','bid'],
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
    components: {
    	'v-header': header,
    	'v-footer': footer,
 	},
 	mounted(){
 		this.init();
 	}
}
</script>

<style lang="scss" scoped>
@charset "utf-8";
ul{
	padding-left: 0px;
}
.div-img{
    width: 100%;
}
.history{
    h4{
        font-size: 3rem;
        height: 6rem;
        line-height: 6rem;
        border-bottom: 1px solid #92ccee;
        font-family: "tianzhen";
    }
}
.table{
    .item{
        border: 1px solid #92ccee;
        margin-top: 2em;
        .left{
            float: left;
            width: 30%;
            vertical-align:middle;  
            display:table-cell; 
            font-size: 2.3em;
            font-weight: bold;
            text-align: center;
	        font-family: "tianzhen";
        }
        .right{
            display: block;
            float: left;
            width: 70%;
            .content-item{
                margin-top: 3.2em;
                .shopName{
                    font-size: 1.3em;
                    font-weight: bold;
                    margin-bottom: 1em;
                }
                .shopAdr{
                    font-size: 1.3em;
                }
                .shopIphone{
                    font-size: 1.3em;
                }
            }
        }
    }
}
.map-img{
	width: 100%;
    margin-top: 10em;
    margin-bottom: 4em;
}

.view {
    width:100%;
    height:600px;
    position:relative;

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
}

#position{
    position: absolute;
    margin: 0;
    width: 66px;
    text-align: center;
    right: 50%;
    margin-right: -40px;
    top: 550px;
}
#position li{
    width: 10px;
    height: 10px;
    margin:0 2px;
    display: inline-block;
    -webkit-border-radius: 5px;
    border-radius: 5px;
    background-color: #fff;
}
#position .cur{
    background-color: #ff0000;
    width: 20px;
}

</style>

