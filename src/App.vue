<template>
  <div id="app">
    <div id="nav" class="fixed-bottom">
      <router-link to="/">首頁</router-link>|
      <router-link to="/list">清單</router-link>|
      <router-link to="/settings">設定</router-link>
    </div>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>
