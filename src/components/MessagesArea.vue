<template>
  <div class="home__message-area">
    <div class="chat">
      <div class="message-content">
        <UserMessage v-for="(message, index) in getMessages" :key="index" :msg="message" />
      </div>
      <div class="write-message">
        <WriteMessage />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  computed,
  ref,
} from 'vue';
import { useStore } from 'vuex';
import iMessage from '@/interfaces/Message';
import UserMessage from './UserMessage.vue';
import WriteMessage from './WriteMessage.vue';

export default defineComponent({
  name: 'messagesAreaComponent',
  components: {
    UserMessage,
    WriteMessage,
  },
  setup() {
    const messages = ref<iMessage[]>([]);
    const store = useStore();
    const getMessages = computed(() => store.state.messages);
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
    background: #181818;
  }
</style>
