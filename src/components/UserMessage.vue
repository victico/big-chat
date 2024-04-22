<template>
  <div class="otherLogged">
    <div class="otherLogged__message">
     {{ msg }}
    </div>
  </div>
  <!-- <div class="iLogged">
    <div class="iLogged__message">
      Hola, Bien y tu?
    </div>
  </div> -->
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
} from 'vue';
import { useStore } from 'vuex';
import iMessage from '@/interfaces/Message';
import firebase from '@/firebase';
import {
  collection,
  DocumentData,
  getDocs,
  QueryDocumentSnapshot,
  QuerySnapshot,
} from 'firebase/firestore';

export default defineComponent({
  name: 'UserMessageComponent',
  props: ['msg'],
  setup() {
    const messages = ref<iMessage[]>([]);
    const database = collection(firebase.db, 'Messages');
    const store = useStore();
    // console.log(database);
    return {

    };
  },
});
</script>
<style lang="scss" scoped>
  .iLogged{
    display: flex;
    justify-content: end;
    margin-bottom:15px ;
    &__message{
      background:#8774e1 ;
      width: max-content;
      box-sizing: border-box;
      padding: 10px;
      border-radius: 10px;
      font-weight: 300;
    }
  }
  .otherLogged{
    display: flex;
    justify-content: start;
    margin-bottom:15px ;
    &__message{
      background:#7a67db ;
      width: max-content;
      box-sizing: border-box;
      padding: 10px;
      border-radius: 10px;
      font-weight: 300;
    }
  }
</style>
