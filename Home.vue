<template>
  <div class="index-wrap">
    <div class="index-left">
      <div class="index-left-block">
        <h2>全部产品</h2>

        <template v-for="product in productList">
          <h3>{{ product.title}}</h3>
          <ul>
            <li v-for="item in product.list">
              <a :href="item.url">{{ item.name }}</a>
              <span v-if="item.hot" class="hot-tag">HOT</span>
            </li>
          </ul>
          <div v-if="!product.last" class="hr"></div>
        </template>
      </div>
      <div class="index-left-block lastest-news">
        <h2>最新消息</h2>
        <ul>
          <li v-for="item in newsList">
            <a :href="item.url" class="new-item">{{ item.title }}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="index-right">
  //    <slide-show :slides="slides" :inv="invTime"></slide-show>
      <div class="index-board-list">
        <div
          class="index-board-item"
          v-for="(item, index) in boardList"
          :class="[{'line-last' : index % 2 !== 0}, 'index-board-' + item.id]">
          <div class="index-board-item-inner" >
            <h2>{{ item.title }}</h2>
            <p>{{ item.description }}</p>
            <div class="index-board-button">
              <router-link class="button" :to="{path: 'detail/' + item.toKey}">立即购买</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


</template>

<script>
  export default({
  //  name:'home'

    data(){
      return{
        boardList: [
          {
            title: '潮牌大衣',
            description: '大衣给你轻松的优雅',
            id: 'car',
            toKey: 'analysis',
            saleout: false
          },
          {
            title: '品牌营销',
            description: '品牌营销帮助你的产品更好地找到定位',
            id: 'earth',
            toKey: 'count',
            saleout: false
          },
          {
            title: '使命必达',
            description: '最快的衣物上门',
            id: 'loud',
            toKey: 'forecast',
            saleout: true
          },
          {
            title: '低价交换',
            description: '最便宜的押金交换',
            id: 'hill',
            toKey: 'publish',
            saleout: false
          }
        ],
        newsList:[
          {
            title: '外套',
            url: 'http://starcraft.com'
          },
          {
            title: '内衣',
            url: 'http://warcraft.com'
          },
          {
            title: '裤子',
            url: 'http://overwatch.com',
            hot: true
          },
          {
            title: '鞋',
            url: 'http://hearstone.com'
          }
        ],
        productList:{
          pc:{
                title:'男装',
                list:[
                  {
                    name: '外套',
                    url: 'http://starcraft.com'
                  },
                  {
                    name: '内衣',
                    url: 'http://warcraft.com'
                  },
                  {
                    name: '裤子',
                    url: 'http://overwatch.com',
                    hot: true
                  },
                  {
                    name: '鞋',
                    url: 'http://hearstone.com'
                  }
                ]
          },
          app:{
                title:'女装',
                list:[
                  {
                    name: '外套',
                    url: 'http://weixin.com'
                  },
                  {
                    name: '内衣',
                    url: 'http://twitter.com',
                    hot: true
                  },
                  {
                    name: '裤子',
                    url: 'http://maps.com'
                  },
                  {
                    name: '鞋',
                    url: 'http://phone.com'
                  }
                ]

          }
        }
      }
    }
  })
</script>

<style scoped>
  #home{
    width: 100%;
    height: 500px;
    background-color: khaki;
  }

  .index-wrap {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
  }
  .index-left {
    float: left;
    width: 300px;
    text-align: left;
  }
  .index-right {
    float: left;
    width: 900px;
  }
  .index-left-block {
    margin: 15px;
    background: #fff;
    box-shadow: 0 0 1px #ddd;
  }
  .index-left-block .hr {
    margin-bottom: 20px;
  }
  .index-left-block h2 {
    background: #4fc08d;
    color: #fff;
    padding: 10px 15px;
    margin-bottom: 20px;
  }
  .index-left-block h3 {
    padding: 0 15px 5px 15px;
    font-weight: bold;
    color: #222;
  }
  .index-left-block ul {
    padding: 10px 15px;
  }
  .index-left-block li {
    padding: 5px;
  }
  .index-board-list {
    overflow: hidden;
  }
  .index-board-item {
    float: left;
    width: 400px;
    background: #fff;
    box-shadow: 0 0 1px #ddd;
    padding: 20px;
    margin-right: 20px;
    margin-bottom: 20px;
  }
  .index-board-item-inner {
    min-height: 125px;
    padding-left: 120px;
  }

  .index-board-item h2 {
    font-size: 18px;
    font-weight: bold;
    color: #000;
    margin-bottom: 15px;
  }
  .line-last {
    margin-right: 0;
  }
  .index-board-button {
    margin-top: 20px;

    background: #4fc08d;
    color: #fff;
  }
  .lastest-news {
    min-height: 512px;
  }
  .hot-tag {
    background: red;
    color: #fff;
  }
  .new-item {
    display: inline-block;
    width: 230px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .index-board-car .index-board-item-inner{
    background: url(../../assets/images/1.png) no-repeat;
  }
  .index-board-loud .index-board-item-inner{
    background: url(../../assets/images/2.png) no-repeat;
  }
  .index-board-earth .index-board-item-inner{
    background: url(../../assets/images/3.png) no-repeat;
  }
  .index-board-hill .index-board-item-inner{
    background: url(../../assets/images/4.png) no-repeat;
  }


</style>
