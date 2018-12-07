<template>
  <div class="container-fluid">
    	<v-header navName="history"></v-header>
    	<div class="row">
    		<img src="../assets/img/history.png" alt="公司历史" class="div-img"/>
    	</div>
    	<div class="row bg">
    		<div class="col-md-8 col-md-offset-2 history">
    			<h4>发展历程Milestone</h4>
    		</div>
    		<img src="../assets/img/images/history-bg001_02.png" alt="公司历史" class="div-img"/>
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
  
    },
    components: {
    	'v-header': header,
    	'v-footer': footer,
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
        font-size: 3rem;
        height: 6rem;
        line-height: 6rem;
        border-bottom: 1px solid #92ccee;
        font-family: "tianzhen";
    }
}
</style>

