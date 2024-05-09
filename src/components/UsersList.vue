<template>
  <div class="home__user-list">
    <ul class="home__user-list--listado">
      <li
        :class="
        {
          active: loggedPhone === user.userID
        }"
        v-for="(user, index) in users"
        v-bind:key="index"
        @click="getActive(user.userID)"
      >
        <section class="user-description">
          <img :src="user.avatar" alt="" width="55" class="user-avatar">
          <div>
            <h4 class="user-name">{{ user.userID == logged ? 'Mis mensajes' : user.name }}</h4>
            <h5>
              message
            </h5>
          </div>
        </section>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  onMounted,
  ref,
} from 'vue';
import { useStore } from 'vuex';
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
  name: 'userListComponent',
  setup() {
    const users = ref<iUser[]>([]);
    const database = collection(firebase.db, 'Users');
    const store = useStore();
    const loggedPhone = computed(() => store.state.userID);
    const logged = window.localStorage.getItem('VICGRAM-CHAT_current_user').replace(/"/gi, '');

    const getUser = async (): Promise<void> => {
      try {
        const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(database);
        querySnapshot.forEach((doc: QueryDocumentSnapshot<DocumentData>) => {
          const {
            avatar,
            date,
            name,
            userID,
          } = doc.data();
          users.value.push({
            avatar,
            date,
            name,
            userID,
            active: false,
          });
        });
      } catch (e) {
        console.error('Error adding document: ', e);
      }
    };
    const getActive = (id: any): void => {
      store.commit('setUserId', id);
      store.dispatch('getMessages');
    };
    onMounted(async () => {
      getUser();
    });
    return {
      users,
      loggedPhone,
      logged,
      getUser,
      getActive,
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
