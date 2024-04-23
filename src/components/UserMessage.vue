<template>
  <div class="otherLogged">
    <div class="otherLogged__message">
     {{ msg.text }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from 'vue';
import iMessage from '@/interfaces/Message';

export default defineComponent({
  name: 'UserMessageComponent',
  props: {
    msg: {
      require: true,
      default: Object as PropType<iMessage>,
    },
  },
  setup(props) {
    return {
      ...toRefs(props),
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
