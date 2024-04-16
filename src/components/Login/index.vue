<template>
  <div>
    <div class="content-login">
      <div class="logo-content">
        <div class="logo-img">
          <img alt="Vue logo" src="@/assets/logo.png" height="200" />
        </div>
      </div>
      <div class="principal-text">
        <h1>Sing in to Talker</h1>
      </div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, inject } from 'vue';
import iStorage from '@/interfaces/Storage';

export default defineComponent({
  name: 'LoginComponent',
  data: () => ({
    Storage: inject<iStorage>('Storage'),
  }),
});
</script>
<style scoped lang="scss">
  *{
    color: white;
  }
  .content-login{
    background: #212121;
    height: 100vh;
    width: 100%;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .principal-text{
    margin-top: 10px;
  }
  .logo-content{
    display: flex;
    justify-content: center;
    & .logo-img{
      background: white;
      box-shadow: 0px 5px 10px 5px rgb(43 43 43);
      border-radius: 20%;
    }
  }
</style>
