<template>
	<div class="row footer">
		<div class="col-md-8 col-md-offset-2">
			<img src="../../assets/img/footer-logo.png" alt="有鱼吃" class="logo"/>
			<img src="../../assets/img/wechat.png" alt="微信扫码"  class="wechat"/>
			<p>© 2009-2018 youyuchi.shop 版权所有    |加盟热线：400-4009915177</p>
			<ul>
                <li><router-link :to="{ path: '/history' }">加盟咨询</router-link></li>
                <li><router-link :to="{ path: '/department' }">旗下门店</router-link></li>
                <li><router-link :to="{ path: '/join' }">发展历程</router-link></li>
                <li style="border-left: none;"><router-link :to="{ path: '/about' }">关于我们</router-link></li>
			</ul>
			<div class="clearfix"></div>
		</div>
	</div>
</template>

<script>
export default {
  	name: 'footer',
 	data(){
   		return {
   		}
    },
    methods: {
    	
    },
}
</script>

<style lang="scss" scoped>
@charset "utf-8";
.footer{
    background: #292b2e;
    padding-bottom: 5rem;
    .wechat{
        margin-top: 7rem;
        margin-right: 133px;
        display: block;
        float: right;
    }
    .logo{
        margin-top: 7rem;
        margin-left: 4rem;
        display: block;
        float: left;
        width: 40%;
    }
    p{
        width: 100%;
        text-align: center;
        font-size: 1.2rem;
        clear: both;
        margin-top: 24rem;
        color: #fff;
    }
    ul{
        width: 24rem;
        margin: 0 auto;
        text-align: center;
        li{
            width: 5rem;
            height: 1rem;
            line-height: 1rem;
            display: block;
            float: right;
            border-left:1px solid #fff ;
            a{
                font-size: 1.2rem;
                color: #fff;
                margin-top: 2rem;
            }
        }
    }
}
</style>

