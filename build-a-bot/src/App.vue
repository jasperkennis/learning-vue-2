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
          <li class="nav-item cart">
            <router-link to="/cart" exact>
              Cart
            </router-link>
          </li>
        </ul>
      </nav>
    </header>
    <div class="container">
      <aside class="aside">
        <router-view name="sidebar" />
      </aside>
      <main>
        <router-view />
      </main>
    </div>
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
  min-height: 300px;
  padding: 30px;
  width: 1024px;
}

header {
  background-color: #999;
  margin: 0 auto;
  width: 1184px;
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

.nav-item.cart {
  border-right: none;
  margin-left: auto;
  position: relative;
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

.container {
  display: flex;
  justify-content: center;
  margin: 10px auto 0 auto;
}

.aside {
  background-color: #aaa;
  min-height: 300px;
  padding: 30px;
  width: 100px;
}
</style>
