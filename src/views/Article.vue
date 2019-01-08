<template>
  <div class="article">
    <h1 v-html="msg"></h1>
    <input v-model="id">
    <button v-on:click="click">请求</button>
    <li v-for="item in items" :key="item.createAt">
      标题：<strong>{{ item.title }}</strong>，创建时间：{{item.createAt}}
    </li>
  </div>
</template>

<script>
  import { getArticle, listArticle } from '../api/article';
  
  /* eslint-disable */

  export default {
    name: 'home',
    data: function () {
      return {
        msg: 0,
        id: '',
        items: [
        ]
      }
    },
    created: function () {
      listArticle().then(res => {
        this.items = res.data
      }).catch(err => {
        console.log(err)
      })
    },
    methods: {
      click(){
        getArticle(this.id).then(res => {
          this.msg = res.data.content
        }).catch(err => {
          console.log(err)
        })
      }
    }
  }
</script>