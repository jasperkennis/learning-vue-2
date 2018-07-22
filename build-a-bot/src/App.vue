<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <li class="nav-item">
            <img class="logo" src="./assets/build-a-bot-logo.png">
            Build a bot
          </li>
        </ul>
      </nav>
    </header>
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

header {
  background-color: #999;
  margin: 0 auto;
  width: 1084px;
}

ul {
  display: flex;
  padding: 3px;
}

.nav-item {
  border-right: 1px solid #bbb;
  display: inline-block;
  font-size: 22px;
  padding: 5px 10px;
}

.logo {
  height: 30px;
  vertical-align: middle;
}
</style>
