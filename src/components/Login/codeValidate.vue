<template>
  <div>
    <div class="content-login">
      <div class="content-login__container">
        <div class="logo-content">
          <div class="logo-img">
            <img alt="Vue logo" src="@/assets/logo.png" height="200" />
          </div>
        </div>
        <div class="principal-text">
          <h1 class="principal-text__title">Validate your code</h1>
          <div class="principal-text__description">
            <h3>Enter your SMS code.</h3>
          </div>
        </div>
        <div class="input-container">
          <div class="input-container__content d-flex justify-center">
            <label for="phone"></label>
            <input type="text" id="phone" class="phone_number" v-model="code" >
          </div>
        </div>
        <div class="button-container">
          <button @click="validateCode()">
            Validar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
  setup() {
    const code = ref<string>('000114');
    const validateCode = async () => {
      const confirmation = await window.confirmationResult.confirm(code.value);
      if (confirmation) {
        const { user } = confirmation;
        console.log(user);
      }
    };
    return {
      code,
      validateCode,
    };
  },
  name: 'codeValidateComponent',
});
</script>
<style scoped lang="scss">
  .d-flex{
    display: flex;
  }
  .justify-center{
    justify-content: center;
  }
  .phonecode{
    width: 25%!important;
    padding:12px 15px!important;
  }
  .phone_number{
    margin-left: -15px ;
    width: 70%!important;
    padding:12px 15px!important;
    padding-left: 5px!important;
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
  .content-login__container{
    width: 22%;
  }
  .principal-text{
    margin-top: 30px;
  }
  .principal-text__description{
    margin-top: 20px;
    & > h3{
      color: rgb(117 117 117 / 64%);
      font-weight: 300;
    }
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
  .input-container{
    margin-top: 30px;
    & .input-container__content{

      margin-bottom: 20px;
      & input{
        width: 70%;
        border-radius: 7px;
        color: black;
        font-size:15px;
        box-shadow: 0px;
      }
      & select{
        width: 90%;
        padding: 12px;
        border-radius: 7px;
        color: black;
        font-size:15px;
        box-shadow: 0px;
      }
      & option {
        color: black;
      }
    }
  }
  .button-container{
    margin-top: 40px;
    & button{
      box-shadow: none;
      padding: 12px;
      background: #27a0e9;
      width: 80%;
      border-radius: 10px;
      font-size: 15px;
      text-transform: uppercase;
      border: none;
      font-weight: 400;
      cursor: pointer;
      transition: all ease-in 0.2s;
      &:focus{
        outline: none;
      }
      &:active{
        background: rgb(37, 1, 83);
        transform: rotateX(180deg);
      }
    }
  }

</style>
