<template>

  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

*{
  padding:0px;
  margin: 0px;
  font-family: "Poppins", sans-serif;
  color: white;
  box-sizing:border-box;
  font-weight: 200;
}
input, input:focus{
  outline: none;
  border:0px;
  font-weight: 500;
}
select, select:focus{
  outline: none;
  border:0px;
  font-weight: 500;
}
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
