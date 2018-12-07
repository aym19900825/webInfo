<template>
  <div>
     <div class="row" style="background: #f5f5f5;">
		<div class="col-md-8 col-md-offset-2 nav">
			<img src="../../assets/img/logo.png" alt="有鱼吃" />
			<ul>
				<li><router-link :to="{ path: '/history' }" :style="{color: navName == 'join' ? '#db1415' : '#000'}">加盟咨询</router-link></li>
				<li><router-link :to="{ path: '/department' }" :style="{color: navName == 'department' ? '#db1415' : '#000'}">旗下门店</router-link></li>
				<li><router-link :to="{ path: '/join' }" :style="{color: navName == 'history' ? '#db1415' : '#000'}">发展历程</router-link></li>
				<li><router-link :to="{ path: '/about' }" :style="{color: navName == 'about' ? '#db1415' : '#000'}">关于我们</router-link></li>
			</ul>
		</div>
	</div>
  </div>
</template>

<script>
export default {
  	name: '',
    props:['navName'],
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
$navH: 154px;
body{
    background: #f5f5f5;
}
.nav{
    background: #f5f5f5;
    img{
        display: block;
        float: left;
        width: 8rem;
        margin-left: 6rem;
    }
    ul{
        li{
            width: 10rem;
            line-height: 6rem;
            display: block;
            float: right;
            a{
                font-size: 2.2rem;
                font-family: "tianzhen";
                color: #000;
                text-decoration: none;
                &:hover{
                    color: #db1415;
                    text-decoration: none;
                }
            }
            .seleted{
                color: #db1415;
            }
        }
    }
}
.div-img{
    width: 100%;
}
</style>

