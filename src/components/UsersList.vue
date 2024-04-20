<template>
  <div class="home__user-list">
    <ul class="home__user-list--listado">
      <li :class="user.id==1 ? 'active' : '' " v-for="user in users" v-bind:key="user.id">
        <section class="user-description">
          <img :src="user.avatar" alt="" width="55" class="user-avatar">
          <div>
            <h4 class="user-name">{{user.name}}</h4>
            <h5>
              mensagge
            </h5>
          </div>
        </section>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'userListComponet',
  setup() {
    const users = [
      {
        id: 1,
        avatar: 'https://i.pravatar.cc/150?img=4',
        date: '17 de abril de 2024, 4:44:51 p.m. UTC-4',
        name: 'Froilan',
        userId: '+58424531538',
      },
      {
        id: 2,
        avatar: 'https://i.pravatar.cc/150?img=4',
        date: '17 de abril de 2024, 4:44:51 p.m. UTC-4',
        name: 'Froilan',
        userId: '+58424531538',
      },
    ];
    return {
      users,
    };
  },
});
</script>
<style lang="scss" scoped>
  .home__user-list{
    width: 100%;
    &--listado{
      margin-top: 15px;
      list-style: none;
      text-align: start;
      width: 100%;
      padding-left: 5px;
      li{
        padding: 10px;
        width: 98%;
        margin-bottom: 10px;
        border-radius: 10px;
        transition: all 0.2s ease-out;
        &.active{
          background: #8774e1;
          &:hover{
            background: #7a67db;
          }
        }
        &:hover{
          background: #181818;
        }
      }
    }
  }
  .user-description{
    display: flex;
    align-items:center
  }

  .user-avatar{
    border-radius: 50%;
    margin-right: 10px;
  }
  .user-name{
    font-weight: 400;
  }
</style>
