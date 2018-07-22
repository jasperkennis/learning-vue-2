<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <li class="nav-item">
            <router-link :to="{name: 'Home'}" exact>
              <img class="logo" src="./assets/build-a-bot-logo.png">
              Home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{name: 'Build'}" exact>
              Build
            </router-link>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>

export default {
  name: 'app',
};
</script>

<style>
body {
  background: linear-gradient(to bottom, #555, #999);
  background-attachment: fixed;
}
</style>

<style scoped>
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

.nav-link {
  color: inherit;
  text-decoration: none;
}

.router-link-active {
  color: #fff;
}
</style>
