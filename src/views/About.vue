<template>
  <div class="about">
    <h1 v-html="msg"></h1>
    <button v-on:click="click">请求</button>
  </div>
</template>

<script>
  import axios from 'axios';
  // import Vue from 'vue';

  export default {
    name: 'home',
    data: function () {
      return {
        msg: 0
      }
    },
    methods: {
      click(){
        /* eslint-disable */
        console.log('haha')
        axios.get(`http://123.206.221.18:8081/mgt/article`).then(({ data }) => {
          this.msg = data.data.content
        });
      }
    }
  }
</script>