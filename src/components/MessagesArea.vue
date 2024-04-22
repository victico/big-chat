<template>
  <div class="home__message-area">
    <div class="chat">
      <div class="message-content">
        <UserMessage v-for="(message, index) in getMessages" :key="index" :msg="message.text" />
      </div>
      <div class="write-message">

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  computed,
  onMounted,
  ref,
} from 'vue';
import { useStore } from 'vuex';
import iMessage from '@/interfaces/Message';
import firebase from '@/firebase';
import UserMessage from './UserMessage.vue';

export default defineComponent({
  name: 'messagesAreaComponent',
  components: {
    UserMessage,
  },
  setup() {
    const messages = ref<iMessage[]>([]);
    const store = useStore();
    const getMessages = computed(() => store.state.messages);
    // messages.value = getMessages;

    onMounted(() => {
      console.log('hola');
    });
    return {
      messages,
      getMessages,
    };
  },
});
</script>
<style lang="scss" scoped>
  .home__message-area{
    height: 100vh;
    display: flex;
    & .chat{
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: end;
    }
  }
  .message-content{
    box-sizing: border-box;
    padding: 20px;
  }
  .write-message{
    height: 10vh;
    width: 100%;
    background: #212121;
  }
</style>
