<template>
  <div id="app">
        <keep-alive>
      <vue-page-transition>
        <router-view />
      </vue-page-transition>
    </keep-alive>
    <div id="nav" class="">
      <router-link to="/"><font-awesome-icon :icon="['fas', 'clock']"></font-awesome-icon></router-link>
      <router-link to="/list"><font-awesome-icon :icon="['fas', 'list-ul']"></font-awesome-icon></router-link>
      <router-link to="/settings"><font-awesome-icon :icon="['fas', 'bell']"></font-awesome-icon></router-link>
    </div>
  </div>
</template>
