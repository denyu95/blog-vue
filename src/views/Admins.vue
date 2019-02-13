<template>
  <div class="admins" style="height: 100%;">
    <h5>文章标题</h5><input v-model="title" style="width:20%;"/>
    <br/>
    <h5>文章内容</h5>
    <div style="height:65%; width:100%; margin-top:15px">
        <textarea id="mdtext" v-model="content" style="float:left; resize:none; height:100%; width:49.5%;" @keydown="keydown" @keyup="keyup"></textarea>
        <div id="content" style="float:right; border:1px solid #33CC99; height:100%; width:48%; padding-left:2%; text-align:left; overflow-x:scroll; overflow-y:scroll;"></div>
    </div>
    <br/>
    <button v-on:click="save">保存</button>
  </div>
</template>

<script>
  import { saveArticle } from '@/api/article';
  import md from '@/md_parser.js';
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
      },
      keydown(e){
        if (e.keyCode == 9) {
          e.preventDefault();
          var indent = '    ';
          var start = document.getElementById('mdtext').selectionStart;
          var end = document.getElementById('mdtext').selectionEnd;
          var selected = window.getSelection().toString();
          selected = indent + selected.replace(/\n/g, '\n' + indent);
          document.getElementById('mdtext').value = document.getElementById('mdtext').value.substring(0, start) + selected
            + document.getElementById('mdtext').value.substring(end);
          document.getElementById('mdtext').setSelectionRange(start + indent.length, start
            + selected.length);
        }
      },
      keyup() {
        document.getElementById('content').innerHTML = md(this.content)
      }
    }
  }
</script>
