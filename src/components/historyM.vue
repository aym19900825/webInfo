<template>
<div>
    	<v-header navName="history"></v-header>
    <div>
        <img src="../assets/img/history.png" alt="发展历程" class="banner"/>
    </div>
    <!--banner img end-->
    
    <!--history body start-->
    <div class="container">
        <div class="center">
            <h3>发展历程</h3>
            <img src="../assets/img/mobile/historybg.png" alt="发展历程" style="margin-bottom: 2em;"/>
        </div>
        
        <div class="row flex">
            <div class="history-left">
                <h4  class="year">2014年</h4 >
            </div>
            <div class="history-right">
                <span class="start"></span>
                <h4 class="tit">5月</h4>
                <p>有鱼吃品牌创立，第一家直营店于成都市春熙路银石广场开业</p>
                <h4 class="tit">10月</h4>
                <p>位列大众点评成都最佳餐厅第23位</p>
                <img src="../assets/img/mobile/history001.png" style="margin-bottom: 30px;"/>
            </div>
        </div>
        
        <div class="row flex orange">
            <div class="history-left">
                    <h4 class="year">2015年</h4>
            </div>
            <div class="history-right">
                <h4 class="tit">8月 </h4>
                <p>成都璟晖餐饮管理有限公司成立，全面负责有鱼吃品牌运营，启动全国地区品牌加盟与授权</p>
                <h4 class="tit">10月</h4>
                <p>授权有鱼吃成都银泰城店开业，开业当天创下排号216桌的记录</p>
                <h4 class="tit">11月</h4>
                <p>有鱼吃银泰店被评为大众点评成都最佳餐厅第10位 </br>有鱼吃银石店获大众点评2015年成都最好评餐厅大评选<b>第2名</b></p>
                <img src="../assets/img/mobile/history003.png"/>
                <h4 class="tit">12月</h4>
                <p style="margin-bottom: 30px;">有鱼吃珠海富华里店开业</p>
            </div>
        </div>
        
        <div class="row flex">
            <div class="history-left">
                    <h4 class="year">2016年</h4>
            </div>
            <div class="history-right">
                <h4 class="tit">1月 </h4>
                <p>有鱼吃银石店被评为美味不用等成都火爆餐厅排行榜第3位</p>
                <img src="../assets/img/mobile/history002.png"/>
                <h4 class="tit">4月 </h4>
                <p>有鱼吃成都龙湖时代天街店开业</p>
                <img src="../assets/img/mobile/history008.png"/>
                <h4 class="tit">6月 </h4>
                <p>有鱼吃绵阳新世界百货店开业</p>
                <h4 class="tit">7月</h4>
                <p> 有鱼吃兰州城关万达店开业</p>
                <h4 class="tit">9月 </h4>
                <p> 有鱼吃温江珠江广场店开业</p>
                <h4 class="tit">10月  </h4>
                <p>有鱼吃重庆爱琴海店、银川大阅城店开业</p>
                <h4 class="tit">12月  </h4>
                <p style="margin-bottom: 30px;">有鱼吃银泰店获大众点评2016年成都最好评餐厅大评选第3名、银川大阅城店开业</p>
            </div>
        </div>
        
        <div class="row flex orange">
            <div class="history-left">
                    <h4 class="year">2017年</h4>
            </div>
            <div class="history-right">
                <h4 class="tit">7月  </h4>
                <p>有鱼吃宁波北仑银泰店开业</p>
                <h4 class="tit">11月  </h4>
                <p>有鱼吃贵阳奥莱店开业</p>
                <h4 class="tit">12月  </h4>
                <p>有鱼吃银泰店被评为大众点评排队到腿软人气火爆餐厅</p>
                <img src="../assets/img/mobile/history004.png" style="margin-bottom: 30px;"/>
            </div>
        </div>
        
        <div class="row flex" style="padding-bottom: 5em;">
            <div class="history-left">
                    <h4 class="year">2018年</h4>
            </div>
            <div class="history-right">
                <h4 class="tit">3月   </h4>
                <p>有鱼吃宁波吾悦店开业</p>
                <h4 class="tit">5月  </h4>
                <p>有鱼吃成都悠方店开业，开业第1天，排队428桌，接待187桌，翻台11次，创下17桌台41398元营业额</p>
                <img src="../assets/img/mobile/history005.png"/>
                <h4 class="tit">8月    </h4>
                <p style="margin-bottom: 30px;">有鱼吃悠方店被评为大众点评成都市十佳烤鱼餐厅第2名</p>
                <p class="tit" style="">未完待续......</p>
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
  	name: 'about',
 	data(){
   		return {
   		
    	}
    },
    methods: {
  
    },
    components: {
        'v-header': header,
    	'v-footer': footer,
 	}
}
</script>

<style lang="scss" scoped>
@charset "utf-8";
@charset "utf-8";
.navbar-header{
    height: 70px;
}
.navbar-brand>img{
    height: 200%;
}
.navbar-nav>li>a{
    line-height: 40px;
}
.navbar-inverse .navbar-nav>li>a{
    color: #f5fbfd;
    font-size: 1.3em;
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

.center{
    i{
        display: block;
        width: 30px;
        height: 40px;
        margin-left: 30%;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        float: left;
        margin-right: -100%;
    }
}

.row{
    margin-right: 0px;
    margin-left: 0px;
}
</style>

