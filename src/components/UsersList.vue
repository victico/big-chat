<template>
  <div class="home__user-list">
    <ul class="home__user-list--listado">
      <li :class="index ? 'active' : '' " v-for="(user, index) in users" v-bind:key="index">
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
import { defineComponent, onMounted, ref } from 'vue';
import iUser from '@/interfaces/User';
import firebase from '@/firebase';
import {
  collection,
  DocumentData,
  getDocs,
  QueryDocumentSnapshot,
  QuerySnapshot,
} from 'firebase/firestore';

export default defineComponent({
  name: 'userListComponet',
  setup() {
    const users = ref<iUser[]>([]);
    const database = collection(firebase.db, 'Users');
    const getUser = async (): Promise<void> => {
      try {
        const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(database);
        querySnapshot.forEach((doc: QueryDocumentSnapshot<DocumentData>) => {
          console.log(doc.data());
        });
      } catch (e) {
        console.error('Error adding document: ', e);
      }
    };

    getUser();
    return {
      users,
      getUser,
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
