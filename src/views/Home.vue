<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <li v-for="item in items" :key="item.createAt">
      <router-link :to="{name: 'article', params: {id : item.id}}">标题：<strong>{{ item.title }}</strong>，创建时间：{{item.createAt}}</router-link>
    </li>
  </div>
</template>

<script>
  /* eslint-disable */
  // @ is an alias to /src
  import { listArticle } from '@/api/article';

  export default {
    name: 'home',
    data: function() {
      return {
        id:'',
        items: []
      }
    },
    created: function() {
      listArticle().then(res => {
        this.items = res.data
      }).catch(err => {
        console.log(err)
      })
    }
  }
</script>
