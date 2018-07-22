<template>
  <div id="app">
    <main>
      <HomePage msg="Welcome to Your Vue.js App"/>
    </main>
  </div>
</template>

<script>
import HomePage from './components/HomePage.vue';

export default {
  name: 'app',
  components: {
    HomePage,
  },
};
</script>

<style>
body {
  background: linear-gradient(to bottom, #555, #999);
  background-attachment: fixed;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

main {
  background: #fff;
  margin: 0 auto;
  padding: 30px;
  width: 1024px;
}
</style>
