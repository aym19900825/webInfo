<template>
  <div class="container-fluid">
    	<!-- 头部组件 -->
    	<v-header navName="join"></v-header>
    	<div class="row">
    		<img src="../assets/img/join.png" alt="联系方式" class="div-img"/>
    	</div>
    	<div class="row bg">
    		<div class="col-md-8 col-md-offset-2 history">
    			<p class="first">> 担心通货膨胀？ </p> 
    			<p>> 缺乏投资渠道？ </p> 
    			<p>> 没有创业项目？ </p> 
    			<p class="none">  联系我们，投资有鱼吃，轻松当老板。 </p> 
    			<p class="none" style="margin-top: 3em;">  我们提供： </p> 
    			<p class="none" style="margin-bottom: 3em;">  从<span>门店选址、餐厅设计、人员培训到经营管理</span>的一系列支持 </p> 
    			<p>> 没有餐饮经验？ </p> 
    			<p>> 不会烹饪菜品？ </p> 
    			<p>> 从未自主创业？ </p> 
    			<p class="none">  这些通通不是问题 </p> 
    		</div>
    	</div>
    	<div class="row">
    		<img src="../assets/img/join-process.gif" alt="加盟流程" class="div-img"/>
    	</div>
    	<div class="row" style="padding-top: 7rem;background: #f6efed;">
    		<img src="../assets/img/join-compant.png" alt="公司支持" class="div-img"/>
    	</div>
    	<div class="row" style="background: #f6efed;">
    		<div class="col-md-8 col-md-offset-2 agree">
    			<p class="address">成都璟晖餐饮管理有限公司负责为有鱼吃加盟店提供经营支撑服务， 包括但不限于以下内容：</p>
    			<div class="item">
    				<span class="cirle" style="background: #98cfe0;">1</span>
    				<p>开业咨询： </p>
    				<p>包括店铺选址、前期筹备和投资分析等店铺筹备初期的咨询服务。</p>
    				<div class="clearfix"></div>
    			</div>
    			<div class="item">
    				<span class="cirle"  style="background: #f58b8a;">2</span>
    				<p>装修指导：</p>
    				<p>公司有固定合作的专业设计师可以为店铺提供装修设计。</p>
    				<div class="clearfix"></div>
    			</div>
    			<div class="item">
    				<span class="cirle" style="background: #ef944c;">3</span>
    				<p>管理咨询： </p>
    				<p>璟晖餐饮有专业的餐厅前厅后厨管理人员，可为加盟方提供内部管理支撑，包括服务培训、 流程优化、人力资源管理等。</p>
    				<div class="clearfix"></div>
    			</div>
    			<div class="item">
    				<span class="cirle" style="background: #f3dc5c;">4</span>
    				<p>经营支撑：</p>
    				<p> 璟晖餐饮有专业的运营人员，可为加盟方提供日常的经营支撑服务，包括营销活动设计、 经营数据分析等。</p>
    				<div class="clearfix"></div>
    			</div>
    			<div class="item">
    				<span class="cirle" style="background: #7ebe58;">5</span>
    				<p>线上营销：</p>
    				<p>包括微信公众号、大众点评网等线上渠道关于新店信息、促销信息的推送以及门店形象展示等</p>
    				<div class="clearfix"></div>
    			</div>
    			<div class="item">
    				<span class="cirle" style="background: #eb7177;">6</span>
    				<p>现场支撑：</p>
    				<p>为充分培育新店成长，确保加盟方投资收益，璟晖餐饮还可为有需求的加盟方在新店开业初
期提供经过系统培训、具有专业经验的店面管理人员协助经营。</p>
						<div class="clearfix"></div>
    			</div>
    		</div>
    	</div>
    	
    	<div class="row">
    		<div class="col-md-8 col-md-offset-2 join">
    			<h4>合作申请  Join Application</h4>
    			<form role="form" class="form">
					  <div class="form-group">
					  	<i class="require">*</i>
					    <label for="name">姓名</label>
					    <input type="text" class="form-control"  placeholder="请输入姓名" v-model="name">
					  </div>
					  <div class="form-group">
					  	<i class="require">*</i>
					    <label for="name">联系电话</label>
					    <input type="text" class="form-control" v-model="iphone"  placeholder="请输入联系电话">
					  </div>
					  <div class="form-group">
					  	<i class="require">*</i>
					    <label for="name">加盟城市</label>
					    <input type="text" class="form-control" v-model="city" placeholder="请输入加盟城市">
					  </div>
					  <div class="form-group">
					  	<i class="require">*</i>
					    <label for="name">经营模式</label>
					    <input type="checkbox" value="完全自主经营" style="margin-left: 0;" @click="addModel()">完全自主经营
					    <input type="checkbox" value="与他人合作经营" v-model="model" @click="addModel()">与他人合作经营
					    <input type="checkbox" value="投资性（他人经营）"  v-model="model" @click="addModel()">投资性（他人经营）
					  </div>
					  
					  <div class="form-group">
					  	<i class="require">*</i>
					    <label for="inputfile" style="width: 17rem;">是否有餐饮从业经验</label>
					    <textarea name="" rows="4" cols="5"  v-model="experience"></textarea>
					  </div>
					  
					   <div class="form-group">
					   	<i class="require">*</i>
					    <label for="name">品牌信息来源</label>
					    <input type="checkbox" value="微博" v-model="infoFrom" @click="add()">微博
					    <input type="checkbox" value="微信" v-model="infoFrom" @click="add()">微信
					    <input type="checkbox" value="网站" v-model="infoFrom" @click="add()">网站
					    <input type="checkbox" value="大众点评" v-model="infoFrom" @click="add()">大众点评
					    <input type="checkbox" value="门店" v-model="infoFrom" @click="add()">门店
					    <input type="checkbox" value="朋友" v-model="infoFrom" @click="add()">朋友
					  </div>
                      <div style="text-align: center;margin-bottom:2rem;">
                          <button type="submit" class="btn btn-default" @click="submit">提交</button>
                      </div>
					</form>
    		</div>
    	</div>
    	<v-footer></v-footer>
    </div>
</template>

<script>
import header from './common/header.vue'
import footer from './common/footer.vue'
export default {
  	name: 'join',
 	data(){
   		return {
            name: '',
            iphone: '',
            city: '',
            model: [],
            experience: '',
            infoFrom: []
   		}	
    },
    methods: {
    	submit(){
            var flag = true;
            if(this.name==''){
                alert("您还没有填写姓名！");
                flag = false;
                return;
            }
            if(this.iphone==''){
                alert("您还没有填写联系电话！");
                flag = false;
                return;
            }
            if(this.city==''){
                alert("您还没有填写加盟城市！");
                flag = false;
                return;
            }
            if(this.model.length == 0){
                alert("您还没有选择经营模式！");
                flag = false;
                return;
            }
            if(this.infoFrom.length == 0){
                alert("您还没有选择品牌信息来源！");
                flag = false;
                return;
            }
            if(this.experience == 0){
                alert("您还没有填写是否有餐饮从业经验！");
                flag = false;
                return;
            }
            if(this.iphone!=''){
                if(!(/(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}/.test(this.iphone))){
                    alert("您还没有正确的联系电话！");
                    flag = false;
                    return;
                }
            }
            if(flag){
                //调取后端接口
                
            }
        },
        add(){
            var self = this;
            setTimeout(function(){
                console.log(self.infoFrom)
            },0)
        },
        addModel(){
            var self = this;
            setTimeout(function(){
                console.log(self.model)
            },0)
        }
    },
    components: {
    	'v-header': header,
    	'v-footer': footer,
 	}
}
</script>

<style lang="scss" scoped>
.div-img{
	width: 100%;
}
.bg{
    background: #f6efed;
}
.history{
    margin-bottom: 9rem;
     h4{
        font-size: 2.5rem;
        height: 6rem;
        line-height: 6rem;
        border-bottom: 1px solid #92ccee;
    }
    p{
        font-size: 2rem;
        line-height: 3rem;
        margin-left: 10rem;
        span{
            color: #ff9c00;
        }
    }
    .first{
        margin-top: 4rem;   
    }
    .none{
        margin-left: 11rem;
    }
}
.agree{
    p{
        font-size: 1.8rem;
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
        font-size: 3rem;
        font-family: "tianzhen";
        margin-top: 4rem;
    }
}
.form{
    padding-left: 9rem;
    padding-right: 9rem;
    font-size: 1.5rem;
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
</style>

