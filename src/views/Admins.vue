<template>
  <div class="admins">
    文章标题：<input v-model="title"/>
    <br/>
    文章内容：<input v-model="content"/>
    <br/>
    <button v-on:click="save">保存</button>
  </div>
</template>

<script>
  import { saveArticle } from '@/api/article';
  /* eslint-disable */
  export default {
    name: 'admins',
    data: function () {
      return {
        title: '',
        content: ''
      }
    },
    methods: {
      save(){
        var articleDto = {}
        articleDto.title = this.title
        articleDto.content = this.content
        saveArticle(articleDto).then(res => {
          console.log(res)
        }).catch(err => {
          console.log(err)
        })
      }
    }
  }
</script>
