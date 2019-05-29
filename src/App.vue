<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About This Site</router-link>
      <router-link to="/community">Community Involvement</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Noto+Serif:700|Raleway:400,400i,700&display=swap");

body {
  line-height: 1.4em;
  font-weight: 300;
  font-family: "Raleway", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #fafeff;
  color: #363030;
}
#app {
  max-width: 900px;
  margin: auto;
}
h1 {
  font-size: 2.2em;
  font-family: "Noto Serif", serif;
}

h3 {
  font-size: 1.09em;
}
a {
  color: #363030;
  &:hover {
    color: rgb(145, 145, 145);
  }
}
p {
  margin: 1.5em 0;
}
#nav {
  text-align: right;
  a {
    color: #2c3e50;
    font-weight: bold;
    font-size: 0.8em;
    padding: 5px;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.page-title {
  text-align: center;
}
.hr {
  border: 0;
  height: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  margin: 55px auto 64px;
  width: 64px;
}
.col {
  margin-bottom: 30px;
  h3 {
    font-size: 1.35em;
    margin: 15px 0;
  }
  p {
    margin: 0 0 3px 5px;
    padding: 0;
    font-weight: bold;
    font-size: 0.95em;
  }
  ul {
    margin: 0 0 5px 12px;
    padding: 0;
    li {
      list-style: none;
      font-size: 0.9em;
    }
  }
}

@media (min-width: 800px) {
  .bottom {
    display: flex;
    justify-content: space-between;
  }
  .col {
    width: 47%;
  }
}
</style>
