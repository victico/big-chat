<template>
  <div class="home__message-area-no-selected-chat">
    <div class="img-container">
      <!-- <img src="https://i.pinimg.com/originals/a5/36/50/a53650df83be3a5e7b6ac4f55528d1fa.gif" alt="" > -->
      <!-- <img src="https://uploads-ssl.webflow.com/5e7a75b1c97ca2328482ecc9/5f344d563ddaf336684aa0e2_Avionsito-6-500x500.gif" alt=""> -->
      <img src="https://i.gifer.com/786X.gif" alt="">
      <!-- <img src="https://i.pinimg.com/originals/0f/38/bc/0f38bcfc9f00c42803c00eedcb87159b.gif" alt=""> -->
      <!-- <img src="https://images.vexels.com/media/users/3/145066/isolated/preview/9eee08cd0243443fb95d824856e6d5a7-ilustracion-de-avion-de-papel.png" alt=""> -->
    </div>
    <div>
      <h1>Bienvenido a Talker Chat</h1>
      <h3>Seleciona un chat</h3>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .home__message-area-no-selected-chat{
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & h1{
      font-weight: 500;
      font-size: 40px;
      text-shadow: 0px 2px 20px rgba(0, 0, 0, 0.486);
      color:#505050
    }
    & h3{
      font-weight: 400;
      color: white;
    }
    & img {
      border-radius:50%;
      height: 150px;
    }
  }

</style>
