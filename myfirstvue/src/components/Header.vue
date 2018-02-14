<template>
  <div id="demo-header" class="wrap">
    <div class="demo-header">
      <h3 class="logo">
        欢迎来到我的衣柜
        <!--<router-link to="/">-->
          <!--&lt;!&ndash;![](../assets/logo.png)&ndash;&gt;-->
        <!--</router-link>-->
      </h3>
    </div>
    <div class="top-nav">
      <div id="navList" class="navlist-wrap">
        <div class="navlist clearfix">
     <span class="nav-btn">
      <router-link to="/">首页</router-link>
     </span>
          <span class="nav-btn">
      <router-link to="/cart">购物车</router-link>
             </span>
          <span class="nav-btn">
      <router-link to="/order">我的订单</router-link>
     </span>
          <span class="nav-btn">
      <router-link to="/clothes">我的衣柜</router-link>
     </span>
          <span class="nav-btn">
      <router-link to="/about">关于我</router-link>
     </span>
          <span class="nav-btn">
      <router-link to="/login">登录/注册</router-link>
     </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default({
    name:'demoheader',
    data:function () {
      return {
        'nav-btn': 'nav-btn'
      }
    }
  })
</script>

<style scoped>
  .demo-header{width:1105px;margin:0 auto;height:5px;padding:12px 0 18px;position:relative;*z-index:1}
  .demo-header .logo{height:86px;width:1050px;margin-top:15px;text-align: left}
  .top-nav .navlist-wrap{width:1050px;margin:0 auto;position:relative}
  .top-nav .navlist{position:absolute;right:130PX;top:-40PX}
  .top-nav .navlist .nav-btn
  {
    float:left;
    margin-left:60px;
    color:#666;
    vertical-align: middle;
    text-decoration:none;
    font-size: large;
  }
</style>
