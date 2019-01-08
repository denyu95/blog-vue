<template>
  <div class="article">
    <h1 v-html="msg"></h1>
  </div>
</template>

<script>
  import { getArticle } from '@/api/article';
  
  /* eslint-disable */
  export default {
    name: 'article-content',
    data: function () {
      return {
        msg: ''
      }
    },
    created: function() {
      getArticle(this.$route.params.id).then(res => {
        this.msg = res.data.content
      }).catch(err => {
        console.log(err)
      })
    }
  }
</script>