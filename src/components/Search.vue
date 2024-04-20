<template>
  <div class="home__search">
    <label for="globalSearch"></label>
    <input type="text" name="" placeholder="Buscar..." id="globalSearch">
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'searchComponent',
});
</script>
<style lang="scss" scoped>
.home__search{
  input {
    padding: 10px;
    width: 95%;
    background: #181818;
    border: none;
    outline: none;
    color: #fff;
    box-sizing:border-box;
    border-radius: 8px;
    &::placeholder{
      color: #fff;
    }
  }
}
</style>
