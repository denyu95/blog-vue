<template>
  <div class="article" style="width:80%;margin: 0 auto;">
    <h1>{{title}}</h1>
    <div v-html="content" style="margin-left:5%;margin-right:5%;text-align:left;"></div>
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