<template>
	<div class="row footer">
        <ul>
            <li style="border-right: 1px solid #fff;">
                <router-link :to="{ path: '/aboutM' }">
                    <i class="index"></i>
                    <span>首页</span>
                </router-link>
            </li>
            <li @click="telCall">
                <!-- <router-link :to="'tel:'+ phone" @click="telCall">
                    <i class="contact"></i>
                    <span>加盟咨询</span>
                </router-link> -->
                <i class="contact" style="margin-left: -5.5em;margin-top: 0.2rem;"></i>
                <span>加盟咨询</span>
            </li>
            <div class="clearfix"></div> 
        </ul>
	</div>
</template>

<script>
export default {
  	name: 'footer',
 	data(){
   		return {
            phone: '400-991-5177'
   		}
    },
    methods: {
    	telCall(){
            window.location.href = 'tel://' + this.phone;
        }
    },
}
</script>

<style lang="scss" scoped>
@charset "utf-8";
.footer{
    background: #292b2e;
    position: fixed;
    bottom: 0;
    width: 100%;
    
    ul{
        padding-left: 0px;  
        margin-bottom: 0px;
        li{
            width: 50%;
            float: left;
            display: block;
            height: 2.2em;
            margin-top: 1em;
            margin-bottom: 1em;
            text-align: center;

            span{
                font-size: 2rem;
                color: #fff;
                text-decoration: none;
                display: block;
                text-align: center;
            }

            a{
                font-size: 2rem;
                color: #fff;
                text-decoration: none;
                display: block;
                text-align: center;

                span{
                    display: inline-block;
                }
            }
        }
        
   }
}
i{
    display: inline-block;
    float: left;
    width: 30px;
    height: 24px;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    position: absolute;
    margin-left: -2em;
}
i.contact{
    background-image: url(../../assets/img/mobile/contac-icon.png);
}
i.index{
    background-image: url(../../assets/img/mobile/index-icon.png);
}
i.store{
    background-image: url(../../assets/img/mobile/store.png);
}
i.story{
    background-image: url(../../assets/img/mobile/story-iron.png);
}
</style>

