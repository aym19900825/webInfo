<template>
  <div class="container-fluid" style="overflow-x: hidden;">
  		<v-header navName="about"></v-header>
    	<div class="row">
    		<!-- <img src="../assets/img/about.png" alt="公司介绍" class="div-img"/> -->

        <!-- <div id="myCarousel" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
              <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
              <li data-target="#myCarousel" data-slide-to="1"></li>
              <li data-target="#myCarousel" data-slide-to="2"></li>
          </ol>   
          <div class="carousel-inner" role="listbox">
              <div class="item active">
                  <img src="../assets/img/about.png">
              </div>
              <div class="item">
                  <img src="../assets/img/about.png">
              </div>
              <div class="item">
                  <img src="../assets/img/about.png">
              </div>
          </div>
        </div> -->
        <div id="container">
          <ul class="pic">
              <li><a href="javascript:;"><img src="../assets/img/banner001.png"></a></li>
              <li><a href="javascript:;"><img src="../assets/img/banner002.png"></a></li>
              <li><a href="javascript:;"><img src="../assets/img/banner003.png"></a></li>
              <li><a href="javascript:;"><img src="../assets/img/banner004.png"></a></li>
              <li><a href="javascript:;"><img src="../assets/img/banner005.png"></a></li>
              <li><a href="javascript:;"><img src="../assets/img/banner006.png"></a></li>
          </ul>
          <ul id="position">
              <li class="cur"></li>
              <li class=""></li>
              <li class=""></li>
              <li class=""></li>
              <li class=""></li>
              <li class=""></li>
          </ul>
          <div class="clearfix"></div>
        </div>
    	</div>
    	<div class="row story">
    		<img src="../assets/img/story.png" alt="公司故事" class="div-img"/>
    	</div>
    	<div class="row">
    		<div class="col-md-2"></div>
    		<div class="col-md-8 introduce">
    			<h4>品牌介绍Brand Introduction</h4>
    			<p>有鱼吃创立于2014年四川成都，是一家以纸上烤鱼为主，融汇了川渝特色的烤鱼主题餐厅，健康美味、价格亲民、品质标</p>
    			<p>纸上烤鱼，抛弃了传统的炭火，没有烟熏火燎，通过食品纸包裹和红外加温的方式，锁住了鱼肉的水分，保住了营养成分，区别于炭火烤鱼的重油重辣和久吃过咸，纸上烤鱼是更老少咸宜的新式烤鱼。</p>
    			<p>纸上烤鱼拥有独特的三层口感，第一层是刚打开包鱼纸时，这时享用的是鱼肉的鲜嫩，也是纸上烤鱼独有的特点，普通的炭火烤鱼吃不到这层口感；第二层是烤制10分钟左右，一面鱼肉金黄、一面鱼肉鲜嫩，这是纸上烤鱼口感最好的阶段；第三层是鱼肉完全烤干，伴着烤鱼的酱料，是最好的佐饭佳品。</p>
    		</div>
    		<div class="col-md-2"></div>
    	</div>
    	<div class="row">
    		<div id="div1">
          <ul>
            <li>
              <img src="../assets/img/scoll1.png"/>
              <div class="scoll-hover">
                  <p>酸甜味型，有鱼吃为不能吃辣的小朋友定制的专属口味，
                  酸酸甜甜超级开胃，加上鱼也是特别适合小朋友食用的肉类，
                  深受小朋友的喜爱。</p>
                  <span>番茄味</span>
              </div>
            </li>
            <li>
              <img src="../assets/img/scoll2.png"/>
              <div class="scoll-hover">
                  <p>咸鲜味型，老坛酸菜经晾晒、发酵、炒制，
                  再搭配有鱼吃秘制酱汁，打造超级下饭的酸菜味烤鱼，
                  适合不爱吃辣的朋友。</p>
                  <span>酸菜味</span>
              </div>
            </li>
            <li>
              <img src="../assets/img/scoll3.png"/>
              <div class="scoll-hover">
                  <p>有鱼吃独创烤鱼口味，偏辣， 酸酸辣辣、香味馥郁，
                  以秘制泡姜为主搭配少许泡红椒，
                  适合爱吃酸辣味型的朋友。</p>
                  <span>馥香味</span>
              </div>
            </li>
            <li>
              <img src="../assets/img/scoll4.png"/>
              <div class="scoll-hover">
                  <p>酸甜味型，有鱼吃为不能吃辣的小朋友定制的专属口味，
                  酸酸甜甜超级开胃，加上鱼也是特别适合小朋友食用的肉类，
                  深受小朋友的喜爱。</p>
                  <span>蒜香味</span>
              </div>
            </li>
          </ul>     
        </div>
    	</div>
    	<v-footer></v-footer>
    </div>
</template>

<script>
import header from './common/header.vue'
import footer from './common/footer.vue'
export default {
  	name: 'about',
 	data(){
   		return {
   		
    	}
    },
    methods: {
      init(){
        //第一张显示
        $(".pic li").eq(0).show();
        //鼠标滑过手动切换，淡入淡出
        $("#position li").mouseover(function() {
            $(this).addClass('cur').siblings().removeClass("cur");
            var index = $(this).index();
            i = index;//不加这句有个bug，鼠标移出小圆点后，自动轮播不是小圆点的后一个
            // $(".pic li").eq(index).show().siblings().hide();
            $(".pic li").eq(index).fadeIn(600).siblings().fadeOut(600);
        });
        
        //向右切换
        function play(){
            i++;
            i = i > 6 ? 0 : i ;
            $("#position li").eq(i).addClass('cur').siblings().removeClass("cur");
            $(".pic li").eq(i).fadeIn(600).siblings().fadeOut(600);
        }
        //向左切换
        function playLeft(){
            i--;
            i = i < 0 ? 6 : i ;
            $("#position li").eq(i).addClass('cur').siblings().removeClass("cur");
            $(".pic li").eq(i).fadeIn(600).siblings().fadeOut(600);
        }

        //自动轮播
        var i=0;
        var timer=setInterval(play,2000);
        //鼠标移入移出效果
        // $("#container").hover(function() {
        //     clearInterval(timer);
        // }, function() {
        //     timer=setInterval(play,2000);
        // });

        

        setTimeout(function(){
          var imgH =  $('#container img').eq(0).height();
          console.log(imgH);
          $('.story').css({
            marginTop: imgH
          });
        },500);
      },
      initBtm(){
        var odiv = document.getElementById('div1');
        var oul = odiv.getElementsByTagName('ul')[0];
        var ali = oul.getElementsByTagName('li');
        var spa = -2;       
        oul.innerHTML=oul.innerHTML+oul.innerHTML+oul.innerHTML+oul.innerHTML+oul.innerHTML+oul.innerHTML;
        oul.style.width=ali[0].offsetWidth*ali.length+'px';
        function move(){
          if(oul.offsetLeft<-oul.offsetWidth/2){
            oul.style.left='0';
          }
          if(oul.offsetLeft>0){
            oul.style.left=-oul.offsetWidth/2+'px'
          }
          oul.style.left=oul.offsetLeft+spa+'px';
        }
        var timer = setInterval(move,30)
        
        $('#div1 li').on('mouseenter', function(){
            clearInterval(timer);
            $(this).find('.scoll-hover').fadeIn(500);
        });
         $('#div1 li').on('mouseleave', function(){
           $(this).find('.scoll-hover').fadeOut(500);
            timer = setInterval(move,30)
        });
        document.getElementsByTagName('a')[0].onclick = function(){
          spa=-2;
        }
        document.getElementsByTagName('a')[1].onclick = function(){
          spa=2;
        }
      }
    },
    components: {
    	'v-header': header,
    	'v-footer': footer,
   	},
    mounted(){
      this.init();
      this.initBtm();
    }
}
</script>

<style lang="scss" scoped>
@charset "utf-8";
.div-img{
    width: 100%;
}
.introduce{
    h4{
        font-size: 3rem;
        text-indent: 3rem;
        line-height: 8rem;
        padding-top: 1rem;
        font-family: "tianzhen";
    }
    p{
       text-indent: 3rem;
       font-size: 1.8rem;
       font-family: "SimHei";
       color: rgb(56, 56, 56); 
       height: 6rem;
       text-align: left;
    }
}
#div1{ 
    height: 23rem; 
    position: relative; 
    margin: 100px auto;
    overflow: hidden;
  }
#div1 ul {
  height: 23rem; 
  position: relative; 
  padding-left: 1rem;
}
#div1 ul li { 
  width: 27rem; 
  height: 23rem; 
  float: left; 
  list-style: none;
  position: relative; 
  margin-right: 1rem;
  overflow: hidden;
}
#div1 ul li:hover img{
  transform: scale(1.5);
  -webkit-transform: scale(1.5); /*Safari 和 Chrome*/
  -moz-transform: scale(1.5); /*Firefox*/
  -ms-transform: scale(1.5); /*IE9*/
  -o-transform: scale(1.5); /*Opera*/
}
#div1 ul li img { 
  width: 27rem; 
  height: 23rem; 
  display: inline-block;
  z-index: 100;
}
.scoll-hover
  {
    display: none;
    opacity:0.9;
    top: 0rem;
    left: 0rem;
    height: 100%;
    background: #eba953;
    color: #fff;
    position: absolute;
    z-index: 10001;
    text-align: center;
    padding-top: 7rem;
    p{
      text-align: center;
      font-size: 1.4rem;
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }
    span{
      width: 6rem;
      height: 3rem;
      line-height: 3rem;
      border: 1px solid #fff;
      display: block;
      left: 50%;
      bottom: 2rem;
      position: absolute;
      margin-left: -3rem;
      font-size: 1.8rem;
    }
  }
  .carousel-indicators li{
    background: #caccd1;
  }
  .carousel-indicators li.active{
    background: #db1415;
    width: 25px;
  }
  *{ 
     margin: 0;
     padding: 0; 
     text-decoration: none;
   }
  ul{
      list-style: none;
  }
  #container{
      position: relative;
      width: 100%;
  }

.pic li {
    position: absolute;
    top: 0;
    left: 0;
    display: none;
}
.pic li img {
    width: 100%;
}
#position{
    position: absolute;
    bottom: -600px;
    margin: 0;
    width: 400px;
    text-align: center;
    right: 50%;
    margin-right: -200px;
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

#container:hover .arrow { 
    display: block;
}
#prev { 
    left: 20px;
}
#next { 
    right: 20px;
}
</style>

