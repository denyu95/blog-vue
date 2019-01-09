<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div v-for="item in items" :key="item.createAt">
      <router-link :to="{name: 'article', params: {id : item.id}}" style="text-decoration:none">
        <h3><strong>{{ item.title }}</strong></h3>
        <h4>发布时间：{{item.createAt}}</h4>
      </router-link>
    </div>
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
