<template>
  <div>
     <header id="topnav">
        <nav class="navbar navbar-inverse navbar-no-bg" role="navigation">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed nav-clicks" data-toggle="collapse" data-target="#top-navbar-1" @click="aClidk">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <button type="button" class="navbar-toggle collapsed nav-click" data-toggle="collapse" data-target="#top-navbar-1" style="color: #fff;font-size: 1.5em;padding: 0.1em .7em 0.1em .7em;display:none;" @click="aClidk">
                    X
                    </button>
                    <router-link class="navbar-brand" :to="{ path: '/history' }">
                        <img src="../../assets/img/mobile/logo.png" alt="有鱼吃" />
                    </router-link>
                </div>
                <div class="collapse navbar-collapse" id="top-navbar-1">
                    <ul class="nav navbar-nav navbar-right">
                        <li>
                            <router-link :to="{ path: '/aboutM' }">
                                <i class="index"></i>首页
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{ path: '/historyM' }">
                                <i class="story"></i>发展历程
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{ path: '/departmentM' }">
                                <i class="store"></i>旗下门店
                            </router-link>
                        </li>
                         <li>
                            <router-link :to="{ path: '/joinM' }">
                                <i class="contact"></i>加盟咨询
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
  </div>
</template>

<script>
export default {
  	name: '',
 	data(){
   		return {
   		}
    },
    methods: {
        aClidk(){
            var divStates = $('#top-navbar-1').css('display');
            if(divStates=='block'){
                $('.nav-clicks').show();
                $('.nav-click').hide();
            }else{
                $('.nav-click').show();
                $('.nav-clicks').hide();
            }
        }
    	
    },
}
</script>

<style lang="scss" scoped>
.navbar-brand>img{
    height: 150%;
}
.navbar-nav>li>a{
    
}
.navbar-inverse .navbar-nav>li>a{
    color: #f5fbfd;
    font-size: medium;
    border-bottom: 1px solid #171A21;
}
#top-navbar-1{
    background: #222222;
    position: absolute;
    width: 40%;
    right: 0em;
    z-index: 1002;
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

.nav{

    i{
        display: block;
        float: left;
        width: 1.2em;
        height: 1em;
        margin-right: 10px;
        background-size: 100% 100%;
        background-repeat: no-repeat;
    }
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

