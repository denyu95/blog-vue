<template>
  <div class="admins" style="height: 100%;">
    <h5>文章标题</h5><input v-model="title" style="width:20%;"/>
    <br/>
    <h5>文章内容</h5><textarea v-model="content" style="width:60%;height:60%;margin: 0 auto;"/>
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
          alert("保存成功！")
          this.title = ''
          this.content = ''
        }).catch(err => {
          console.log(err)
          alert("保存失败！")
        })
      }
    }
  }
</script>
