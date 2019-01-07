<template>
  <div class="article">
    <h1 v-html="msg"></h1>
    <input v-model="message">
    <button v-on:click="click">请求</button>
    <li v-for="item in items" :key="item.createAt">
      标题：<strong>{{ item.title }}</strong>，创建时间：{{item.createAt}}
    </li>
  </div>
</template>

<script>
  import axios from 'axios';
  
  /* eslint-disable */
  console.log(process.env.VUE_APP_BASE_URL)
  const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL, // 请求地址公共部分
    timeout: 15000 // 请求超时
  });

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
      service.get(`/web/article`).then(({data}) => {
        this.items = data.data
      })
    },
    methods: {
      click(){
        service.get(`/web/article/`+this.message).then(({ data }) => {
          this.msg = data.data.content
        });
      }
    }
  }
</script>