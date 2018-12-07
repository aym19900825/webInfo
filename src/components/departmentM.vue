<template>
  <div>
    	<v-header navName="department"></v-header>
    	<div>
  		<img src="../assets/img/images/公司网站-旗下门店_02.png" alt="旗下门店" class="banner"/>
  	</div>
    	<div class="row content" style="margin-bottom: 4em;">
    		<div class="col-md-8 col-md-offset-2">
		  		<div class="center">
		  			<h3>旗下门店</h3>
		  			<img src="../assets/img/mobile/historybg.png" alt="旗下门店" style="margin-bottom: 30px;"/>
		  		</div>
		  		<h3 class="center">成都地区</h3>
		  		<div class="content-item">
					<p class="shopName"><b>成都银石店：</b>028-69066000</p>
					<p class="shopAdr">成都市锦江区红星路三段99号银石广场5层</p>
				</div>
				<div class="content-item">
					<p class="shopName"><b>成都银泰店：</b>028-69907355</p>
					<p class="shopAdr">成都市武侯区益州大道1999号银泰城4层</p>
				</div>
				<div class="content-item">
					<p class="shopName"><b>成都龙湖店：</b>028-69181199</p>
					<p class="shopAdr">成都市郫都区高新西区合作路89号龙湖时代天街4层</p>
				</div>
				<div class="content-item">
					<p class="shopName"><b>成都悠方店：</b>028-86210287</p>
					<p class="shopAdr">成都市武侯区交子大道300号悠方购物中心5层</p>
				</div>
				<div class="content-item">
					<p class="shopName"><b>成都温江店：</b>028-64258855</p>
					<p class="shopAdr">成都市温江区光华大道三段1588号珠江广场3层</p>
				</div>
				<div class="content-item" style="margin-bottom: 3.2em;">
					<p class="shopName"><b>绵阳新世界店：</b>0816-5357070</p>
					<p class="shopAdr">绵阳市涪城区临园路东段72号新世界百货5楼</p>
				</div>
					
					
    			<h3 class="center">重庆地区</h3>
		  		<div class="content-item" style="margin-bottom: 3.2em;">
						<p class="shopName"><b>重庆爱琴海店：</b>023-63215723</p>
						<p class="shopAdr">重庆市渝北区金开大道1003号爱琴海购物公园4层</p>
    			</div>
    			
    			<h3 class="center">广东地区</h3>
    			<div class="content-item" style="margin-bottom: 3.2em;">
					<p class="shopName"><b>珠海富华里店：</b>0756-8625900</p>
					<p class="shopAdr">珠海市香洲区九洲大道西富华里10栋301号</p>
				</div>
				
				<h3 class="center">甘肃地区</h3>
				<div class="content-item" style="margin-bottom: 3.2em;">
					<p class="shopName"><b>兰州万达店：</b>0931-8230686</p>
					<p class="shopAdr">兰州市城关区万达广场金雁巷步行街25-18号</p>
				</div>
				
				
				<h3 class="center">浙江地区</h3>
				<div class="content-item">
					<p class="shopName"><b>宁波吾悦店：</b>18058580733</p>
					<p class="shopAdr">宁波市镇海区宁波镇望海海南路与永茂西路交叉口吾悦广场</p>
				</div>
				<div class="content-item" style="margin-bottom: 3.2em;">
					<p class="shopName"><b>宁波银泰店：</b>0574-86882277</p>
					<p class="shopAdr">宁波市北仑区中河路银泰城4层</p>
				</div>
				
				<h3 class="center">贵州地区</h3>
				<div class="content-item">
					<p class="shopName"><b>贵阳奥莱店：</b>18585090184</p>
					<p class="shopAdr">贵阳市贵州双龙航空港经济区机场路9号与龙腾路交叉口北侧砂之船奥特莱斯A4-31号</p>
				</div>
				
				<h3 class="center">宁夏地区</h3>
				<div class="content-item" style="margin-bottom: 3.2em;">
					<p class="shopName"><b>银川大阅城店：</b>0951-3805936</p>
					<p class="shopAdr">银川市正源北街建发大阅城5层</p>
				</div>
    		</div>
    	</div>
    	<v-footer></v-footer>
    </div>
</template>

<script>
import header from './common/headerM.vue'
import footer from './common/footerM.vue'
export default {
    components: {
    	'v-header': header,
    	'v-footer': footer
 	}
}
</script>

<style lang="scss" scoped>
@charset "utf-8";
.div-img{
    width: 100%;
}
.history{
     h4{
        font-size: 2.5rem;
        height: 6rem;
        line-height: 6rem;
        border-bottom: 1px solid #92ccee;
    }
    p{
        font-size: large;
        span{
            color: #ff9c00;
        }
    }
    .first{
        margin-top: 4rem;   
    }
    .none{
        margin-left: 1rem;
    }
}
.agree{
    p{
        font-size: medium;
        margin-left: 3.5rem;
        margin-bottom: 0.3rem;
    }
    .tit{
       font-size: 2rem; 
       font-weight: bold;
       text-align: center;
       margin-top: 3.5rem;
    }
    .address{
        font-weight: bold;
        font-size: 1.8rem;
        margin-top: 2rem;
    }
    .item{
        margin-left: 5rem;
        margin-top: 2rem;
        margin-bottom: 2rem;
        span{
            display: block;
            float: left;
            height: 3rem;
            line-height: 3rem;
            width: 3rem;
            text-align: center;
            border-radius: 50%;
            color: #fff;
            font-size: 1.8rem;
        }
    }
}
.join{
    h4{
        padding-left: 5rem;
        line-height: 6rem;
        font-weight: bold;
        font-size: 2rem;
    }
}
.form{
    font-size: large;
    .form-group{
        display: flex;
        line-height: 3rem;
        i.require{
            color: red;
            line-height: 3rem;
        }
        label{
            display: block;
            min-width: 6rem;
            float: left;
            margin-left: 1rem;
            font-weight: normal;
            line-height: 3rem;
            margin-right: 10px;
        }
        input[type='checkbox']{
            margin-left: 2rem;
            margin-top: 1rem;
        }
        textarea{
            width: 100%;
        }
    }
}


.content{
    .short{
        line-height: 1.8em;
        margin-top: 20px;
        color: #000;
        text-indent:0px;
        span{
            background: #e74951;
            color: #fff;
            display: block;
            float: left;
            border-radius: 10px;
            padding-left: 10px;
            padding-right: 10px;
            margin-right: 10px;
        }
    }
    .longs{
        line-height: 1.8em;
        margin-top: 30px;
        color: #000;
        span{
            background: #e74951;
            color: #fff;
            display: block;
            float: left;
            border-radius: 10px;
        }
    }
    p{
        font-size: medium;
        text-indent:30px;
        padding-left: 10px;
        padding-right: 10px;
        color: #ed767a;
        .square{
            display: block;
            width: 10px;
            height: 10px;
            float: left;
            margin-left: 20px;
            margin-right: -10px;
            margin-top: 5px;
        }
    }
}
 .pink{
    background: #f5ebec;
}
 .red{
        background: #e74a4f;
}
.roange{
    background: #f0831e;
}
.yellow{
    background: #ffe114;
}
.blue{
    background: #36afd8;
}
.join-p{
    font-size: large;
    line-height: 2.5em;
    border-radius: .8em;
    position: relative;
    font-size: large;
    span{
        width: 30px;
        height: 30px;
        line-height: 30px;
        border-radius: 50%;
        background: #fff;
        color: #f14a52;
        display: block;
        float: left;
        position: absolute;
        left: 3em;
        margin-top: 6px;
    }
}
.btn{
    width: 100%;
    max-width: 300px;
    background: #e74951;
    color: #fff;
    height: 50px;
    line-height: 50px;
    font-size: medium;
    margin-bottom: 50px;
    margin-left: auto;
    margin-right: auto;
    display: block;
}
.content-item{
    p.shopName{
        font-size: medium;
        color: #000;
        text-indent: 0px;
    }
    p.shopAdr{
        color: #000;
        margin-bottom: 30px;
        text-indent: 0px;
    }
}
.row{
    margin-right: 0px;
    margin-left: 0px;
}
.center{
   p{
       color: #000;
       text-indent: 0px; 
   } 
   p.btm{
       margin-bottom: 5em;
   }
   p.top{
       margin-top: 5em;
   }
   p.btm0{
    margin-bottom: 3em;
   }
   .proBg{
       position: relative;
       div.mask{
            opacity:0.9;
            position: absolute;
            top: 70%;
            left: 15%;
            background: #f18f34;
            width: 100%;
            padding-top: 3em;
            padding-bottom: 3em;
            p{
               color: #fff;
            }  
       }
       
   }
}
.red{
    color: #e9464d;
}
.banner{
    width: 100%;
    margin-top: -20px;
}
.center{
    text-align: center;
}
.center h3{
    margin-top: 30px;
}
.center img{
    margin-top: -1em;
}

.flex{
    display: flex;
    padding-left: 10px;
    padding-right: 10px;
   .history-right{
        flex: 1;
        float: left;
        border-left:1px solid #e5e5e4 ;
        padding-left: 10px;
        margin-left: 1.5em;
        span.start{
            display: block;
            width: .5em;
            height: .5em;
            border-radius: 50%;
            background: #e5e5e4;
            position: relative;
            left: -1em;;
        }
        .tit{
            color: #e9464d;
            font-size: 1.5em;
        }
        p{
            font-size: medium;
            line-height: 1.8em;
        }
        img{
            clear: both;
            width: 100%;
            margin-top: 20px;
            margin-bottom: 20px;
            max-width: 400px;
        } 
    }
    .history-left{
        float: left;
        .year{
            color: #fff;
            background: #e9464d;
            font-size: 1.5em;
            padding-left: .1em;
        }
        .year:after{
            content: '';
            position: absolute;
            border: 0.55em solid transparent;
            border-left-color: #e9464d;
        }
    }
    
}
.orange{
    .history-left{
        h4.year:after{
            border-left-color: #ee832f;;
        }
        h4.year{
            background: #ee832f;
        }
    }
    .history-right{
        h4.tit{
            color: #ee832f;
        }
    }
}
</style>

