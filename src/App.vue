<template>
  <div id="app">
    <div id="nav" class="fixed-bottom">
      <div class="row">
        <div class="col">
          <router-link to="/"><font-awesome-icon :icon="['fas', 'clock']"></font-awesome-icon></router-link>
        </div>
        <div class="col mx-5">
          <router-link to="/list"><font-awesome-icon :icon="['fas', 'list-ul']"></font-awesome-icon></router-link>
        </div>
        <div class="col">
          <router-link to="/settings"><font-awesome-icon :icon="['fas', 'bell']"></font-awesome-icon></router-link>
        </div>
      </div>
    </div>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>
