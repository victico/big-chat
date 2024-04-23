<template>
  <div class="newMessage__content">
    <label for="newMessage"></label>
    <!-- <input type="text" name="" id="newMessage" placeholder="Escribe un mensaje..."> -->
    <textarea
      name="lalista"
      id="lalista"
      :v-model="newMessages"
      placeholder="Escribe un mensaje..."
    >
    </textarea>
    <button @click="sendNewMessages()">enviar</button>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
  ref,
  toRefs,
} from 'vue';
import { useStore } from 'vuex';
import iMessage from '@/interfaces/Message';
import firebase from '@/firebase';
import { doc, setDoc, Timestamp } from 'firebase/firestore';

export default defineComponent({
  name: 'WriteMessageComponent',
  setup() {
    const newMessages = ref<string>();
    const database = doc(firebase.db, 'Menssages', 'sdsadsadsadad');
    const messageData = {
      date: Timestamp.fromDate(new Date()),
      text: 'HOLA',
      type: 'text',
      userID: '+584245391538',
    };
    const sendNewMessages = async (): Promise<void> => {
      try {
        await setDoc(database, messageData);
      } catch (error) {
        console.log(error);
      }
    };
    return {
      newMessages,
      sendNewMessages,
    };
  },
});
</script>
<style lang="scss" scoped>
.newMessage__content{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  box-sizing: border-box;
  padding: 10px;
  & textarea{
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background: #212121;
    padding: 10px;
    outline: none;
    border: none;
  }
}
</style>
