<template>
  <div class="article">
    <h1 v-html="msg"></h1>
    <input v-model="message">
    <button v-on:click="click">请求</button>
    <li v-for="item in items" :key="item.title">
      标题：<strong>{{ item.title }}</strong>，创建时间：{{item.createAt}}
    </li>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'home',
    data: function () {
      return {
        msg: 0,
        message: '',
        items: [
        ]
      }
    },
    created: function () {
      axios.get(`http://123.206.221.18:8081/web/article`).then(({data}) => {
        this.items = data.data
      })
    },
    methods: {
      click(){
        /* eslint-disable */
        console.log('haha')
        axios.get(`http://123.206.221.18:8081/web/article/`+this.message).then(({ data }) => {
          this.msg = data.data.content
        });
      }
    }
  }
</script>