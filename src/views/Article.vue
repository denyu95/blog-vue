<template>
  <div class="article">
    <h1>{{title}}</h1>
    <div v-html="content"></div>
  </div>
</template>

<script>
  import { getArticle } from '@/api/article';
  
  /* eslint-disable */
  export default {
    name: 'articleDetail',
    data: function () {
      return {
        title: '',
        content: ''
      }
    },
    created: function() {
      getArticle(this.$route.params.id).then(res => {
        this.title = res.data.title
        this.content = res.data.content
      }).catch(err => {
        console.log(err)
      })
    }
  }
</script>