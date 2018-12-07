<template>
  <div style="overflow-x: hidden;">
  	<v-header></v-header>
    <div>
        <!-- <img src="../assets/img/about.png" alt="关于我们" class="banner"/> -->
         <swiper :options="swiperOption">
          <swiper-slide><img src="../assets/img/mobile/col001.png" class="banner"></swiper-slide>
          <swiper-slide><img src="../assets/img/mobile/col002.png" class="banner"></swiper-slide>
          <swiper-slide><img src="../assets/img/mobile/col003.png" class="banner"></swiper-slide>
          <swiper-slide><img src="../assets/img/mobile/col004.png" class="banner"></swiper-slide>
          <swiper-slide><img src="../assets/img/mobile/col005.png" class="banner"></swiper-slide>
          <swiper-slide><img src="../assets/img/mobile/col006.png" class="banner"></swiper-slide>
        </swiper>
    </div>
      <div class="row content" style="margin-bottom: 6em;">
        <div class="col-md-8 col-md-offset-2">
          <div class="center">
            <h3 style="margin-top: 3em;">品牌介绍</h3>
            <img src="../assets/img/mobile/historybg.png" alt="品牌介绍" style="margin-bottom: 30px;"/>
          </div>
          <img src="../assets/img/mobile/about001.png" alt="品牌介绍" style="float: left;"/>
          <p class="longs">有鱼吃创立于2014年四川成都，是一家以纸上烤鱼为主，融汇了川渝特色的烤鱼主题餐厅，健康美味、价格亲民、品质标准、管理科学是有鱼吃的特点。在炭火烤鱼遍地的当下，有鱼吃的出现开创了全新的烤鱼品类，一张食品纸、一口红外锅，包住是一条鲜嫩美味的鱼，打开是对生活最美好的期待。</p>
          <p class="longs">纸上烤鱼，抛弃了传统的炭火，没有烟熏火燎，通过食品纸包裹和红外加温的方式，锁住了鱼肉的水分，保住了营养成分，区别于炭火烤鱼的重油重辣和久吃过咸，纸上烤鱼是更老少咸宜的新式烤鱼。纸上烤鱼拥有独特的三层口感，第一层是刚打开包鱼纸时，这时享用的是鱼肉的鲜嫩，也是纸上烤鱼独有的特点，普通的炭火烤鱼吃不到这层口感；第二层是烤制10分钟左右，一面鱼肉金黄、一面鱼肉鲜嫩，这是纸上烤鱼口感最好的阶段；第三层是鱼肉完全烤干，伴着烤鱼的酱料，是最好的佐饭佳品。</p>
          <img src="../assets/img/mobile/about002.png" alt="品牌介绍" class="div-img"/>
          
          <div class="center">
            <h3 style="margin-top: 3em;">品牌故事</h3>
            <img src="../assets/img/mobile/historybg.png" alt="品牌故事" style="margin-bottom: 30px;"/>
            <img style="display: block;margin: 0 auto;margin-bottom: 30px;max-width: 400px;" src="../assets/img/mobile/about003.png" alt="品牌故事" class="div-img"/>
            <p class="top">童年的记忆，始于三峡江边</p>
            <p>爸爸是土生土长的渔民</p>
            <p>风雨是生计，渔船是归途</p>
            <p class="btm">每次打渔回家，周围都已炊烟袅袅</p>
            <p>还未走到巷口，一身的鱼味先飘进屋</p>
            <p>闻着味道，便知道是爸爸回来了</p>
            <p>开心的跑到门口隔着巷口拐角的老树</p>
            <p>大声的喊道：“爸爸，今天有什么吃的？”</p>
            <p class="btm">“今天有鱼吃喔”</p>
            <p>若干年后，兴修三峡大坝，全家搬迁</p>
            <p>这句稀松平常的对白</p>
            <p>成为了儿时生活最鲜活的回忆</p>
            <p class="btm">如此，便有了这家——有鱼吃</p>
            <img src="../assets/img/mobile/about004.png" alt="品牌故事" class="div-img"/>
            
            <h3>主打产品</h3>
            <img src="../assets/img/mobile/historybg.png" alt="主打产品" style="margin-bottom: 30px;"/>
            <div class="row proBg">
              <div class="col-md-12">
                <img src="../assets/img/mobile/about005.png" alt="主打产品1" style="margin-bottom: 30px;max-width: 400px;" class="div-img"/>
                <img src="../assets/img/mobile/aboutBg001.png" alt="主打产品1" class="div-img"/>
                <div class="mask">
                  <p>当遍地寻尽</p>
                  <p>全是麻辣味、豆豉味烤鱼时</p>
                  <p class="btm0">蒜香味的横空出世，大大满足好吃客的味蕾</p>
                  <p>4道腌制工序，12味独特调料</p>
                  <p>再配上手工排剁的新鲜大蒜</p>
                  <p>麻辣浓郁不过咸，越吃越有味</p>
                </div>
              </div>
              
              <div class="col-md-12" style="margin-top: 20em">
                <img src="../assets/img/mobile/about007.png" alt="主打产品2" style="margin-bottom: 30px;max-width: 400px;" class="div-img"/>
                <img src="../assets/img/mobile/aboutBg002.png" alt="主打产品2" class="div-img"/>
                <div class="mask" style="background: #eb585e;">
                  <p>在鱼料盘中烤制其他菜品</p>
                  <p class="btm0">让鱼料的香味与菜品本身美味相结合</p>
                  <p>吸纳韩式烤肉、日式铁板烧精华</p>
                  <p>造就独特渝东美食</p>
                </div>
              </div>
              
              <div class="col-md-12" style="margin-top: 17em;margin-bottom: 10em;">
                <img src="../assets/img/mobile/about008.png" alt="主打产品3" style="margin-bottom: 30px;max-width: 400px;" class="div-img"/>
                <img src="../assets/img/mobile/aboutBg003.png" alt="主打产品3" class="div-img"/>
                <div class="mask" style="background: #ffe42b;">
                  <p class="btm0">烧烤豆干一年卖出10万串</p>
                  <p>薄薄卤豆干皮包着花生米和脆爽萝卜</p>
                  <p>一口下去停不下来</p>
                </div>
              </div>
            </div>
          
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
    name: 'aboutM',
    data(){
        return{
             swiperOption: {//swiper3
                centeredSlides: true,
                autoplay: {
                    delay: 3500,
                    disableOnInteraction: false
                },
            }
        }
    },
    components: {
        'v-header': header,
        'v-footer': footer
    },
}
</script>

<style lang="scss" scoped>
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

i.adr{
    background-image: url(../assets/img/mobile/icon-join001.png);
}
i.pre{
    background-image: url(../assets/img/mobile/icon-join002.png);
}
i.find{
    background-image: url(../assets/img/mobile/icon-join003.png);
}
i.act{
    background-image: url(../assets/img/mobile/icon-join004.png);
}
i.done{
    background-image: url(../assets/img/mobile/icon-join005.png);
}
i.taining{
    background-image: url(../assets/img/mobile/icon-join006.png);
}
i.doing{
    background-image: url(../assets/img/mobile/icon-join007.png);
}

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
    margin-bottom: 2em;
   }
   .proBg{
       position: relative;
       div.mask{
            opacity:0.9;
            position: absolute;
            top: 70%;
            left: 15%;
            background: #f18f34;
            width: 85%;
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
</style>

