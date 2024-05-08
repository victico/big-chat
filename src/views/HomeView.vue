<template>
  <div class="home">
    <section class="users">
      <Search />
      <Users />
    </section>
    <section class="messages">
      <Messages v-if="loggedPhone"/>
      <no-chat v-else/>

    </section>
    <!-- <router-view/> -->
  </div>
</template>

<script lang="ts">
import SearchVue from '@/components/Search.vue';
import UserListVue from '@/components/UsersList.vue';
import MessageArea from '@/components/MessagesArea.vue';
import NoSelectedChat from '@/components/NoSelectedChat.vue';
import { useStore } from 'vuex';
import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    Search: SearchVue,
    Users: UserListVue,
    Messages: MessageArea,
    NoChat: NoSelectedChat,
  },
  setup() {
    const store = useStore();
    const loggedPhone = computed(() => store.state.userID);
    return {
      loggedPhone,
    };
  },
});
</script>
<style scoped lang="scss">
  .home{
    background: #212121;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    .users{
      width: 25%;
    }
    .messages{
      width: 75%;
      background: #181818;
      height: 100%;
    }
  }
</style>
