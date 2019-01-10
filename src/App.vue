<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">首页</router-link> | 
      <router-link to="/admin">博客管理</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
html,body{
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  height: 100%;
}
</style>
