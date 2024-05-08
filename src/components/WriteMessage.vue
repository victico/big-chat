<template>
  <div class="newMessage__content">
    <label for="newMessage"></label>
    <textarea
      name="lalista"
      id="lalista"
      v-model="newMessages"
      placeholder="Escribe un mensaje..."
      @keypress.enter="sendNewMessages()"
      @click="closeEmoji"
    >
    </textarea>
    <button @click="showEmoji()">
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 16 16"><g fill="#808080"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/><path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75a.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25a.5.5 0 0 1 .183-.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m1.757-.437a.5.5 0 0 1 .68.194a.93.93 0 0 0 .813.493c.339 0 .645-.19.813-.493a.5.5 0 1 1 .874.486A1.93 1.93 0 0 1 10.25 7.75c-.73 0-1.356-.412-1.687-1.007a.5.5 0 0 1 .194-.68"/></g>
      </svg>
    </button>
    <EmojiPicker @select="updateMessage" v-if="showEmojiPick" />
    <button @click="sendNewMessages()">
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 1792 1792"><path fill="#808080" d="M1764 11q33 24 27 64l-256 1536q-5 29-32 45q-14 8-31 8q-11 0-24-5l-453-185l-242 295q-18 23-49 23q-13 0-22-4q-19-7-30.5-23.5T640 1728v-349l864-1059l-1069 925l-395-162q-37-14-40-55q-2-40 32-59L1696 9q15-9 32-9q20 0 36 11"/>
      </svg>
    </button>
  </div>
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
  doc,
  setDoc,
  Timestamp,
  collection,
  onSnapshot,
} from 'firebase/firestore';
import EmojiPicker from 'vue3-emoji-picker';

export default defineComponent({
  name: 'WriteMessageComponent',
  components: {
    EmojiPicker,
  },
  setup() {
    const showEmojiPick = ref<boolean>();
    const newMessages = ref<string>();
    const store = useStore();
    const reloadMessage = async (): Promise<void> => {
      const database = collection(firebase.db, 'Menssages');
      try {
        const unsub = onSnapshot(database, (querySnapshot) => {
          querySnapshot.docChanges().forEach((change) => {
            if (change.type === 'added') store.dispatch('getMessages');
          });
        });
      } catch (error) {
        console.log(error);
      }
    };
    const showEmoji = () => {
      showEmojiPick.value = !showEmojiPick.value;
    };
    const closeEmoji = () => {
      if (showEmojiPick.value) showEmojiPick.value = false;
    };
    const updateMessage = (emoji: any) => {
      newMessages.value += emoji.i;
    };
    const sendNewMessages = async (): Promise<void> => {
      const ID = Math.random() * (999999 - 100000) + 100000;
      const AddDatabase = doc(firebase.db, 'Menssages', ID.toString());
      const messageData:iMessage = {
        date: Timestamp.fromDate(new Date()),
        text: newMessages.value,
        type: 'text',
        userID: window.localStorage.getItem('VICGRAM-CHAT_current_user').replace(/"/gi, ''),
      };
      try {
        await setDoc(AddDatabase, messageData).then((data) => {
          newMessages.value = '';
          reloadMessage();
          closeEmoji();
        });
      } catch (error) {
        console.log(error);
      }
    };
    return {
      newMessages,
      showEmojiPick,
      sendNewMessages,
      showEmoji,
      updateMessage,
      closeEmoji,
    };
  },
});
</script>
<style lang="scss" >
.v3-input-emoji-picker{
  width: 100%;
}
.v3-input-emoji-picker .v3-input-picker-root .v3-input-picker-wrap .v3-input-picker-icon img{
  filter: invert(1);
}
.v3-emoji-picker{
  position: absolute;
  top: 45%;
  right: 5%;
  width: 400px!important;
  height: 400px!important;
}
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
    resize: none;
    font-weight: 500;
  }
  & button{
    border-radius: 50%;
    height: 45px;
    width: 45px;
    border: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #090909;
    margin-left: 5px;
    transition: background 0.5s ease;
    &:hover{
      background: #212121;
    }
  }
}
.v3-body-inner{scroll-behavior:smooth;scrollbar-color:#393d3f rgba(0,0,0,.1);scrollbar-width:thin}.v3-body-inner::-webkit-scrollbar{width:8px}.v3-body-inner::-webkit-scrollbar-track{background-color:transparent}.v3-body-inner::-webkit-scrollbar-thumb{display:none;background:rgba(0,0,0,.3);border-radius:5px}.v3-body-inner:hover::-webkit-scrollbar-thumb{display:block}.v3-emoji-picker{height:320px;width:280px;box-shadow:0 2px 10px #0003;border-radius:10px;margin:0 auto;box-sizing:border-box;display:flex;flex-direction:column;text-align:left}.v3-emoji-picker *{box-sizing:border-box}.v3-emoji-picker .v3-header{padding:15px 15px 13px;border-bottom:1px solid}.v3-emoji-picker .v3-header .v3-groups{display:flex}.v3-emoji-picker .v3-header .v3-groups .v3-group{flex-grow:1;padding:0;margin:0;border:none;background:none;font-size:23px;cursor:pointer;position:relative;display:block;opacity:.7;transition:.2s}.v3-emoji-picker .v3-header .v3-groups .v3-group.v3-is-hidden{display:none}.v3-emoji-picker .v3-header .v3-groups .v3-group:first-child,.v3-emoji-picker .v3-header .v3-groups .v3-group:last-child{flex-grow:0}.v3-emoji-picker .v3-header .v3-groups .v3-group:hover{opacity:1}.v3-emoji-picker .v3-header .v3-groups .v3-group span{display:flex;align-items:center;justify-content:center}.v3-emoji-picker .v3-header .v3-groups .v3-group span img{display:block;width:1em;height:auto}.v3-emoji-picker .v3-spacing{height:11px}.v3-emoji-picker .v3-search input{width:100%;display:block;height:26px;padding:0 10px;border:1px solid;border-radius:3px;font-size:12px;transition:.2s}.v3-emoji-picker .v3-search input:focus{outline:none}.v3-emoji-picker .v3-body{padding:0 0 15px 11px;min-height:0;flex-grow:1}.v3-emoji-picker .v3-body .v3-body-inner{flex-grow:1;min-height:0;overflow-y:auto;overflow-x:hidden;height:100%;padding-right:11px}.v3-emoji-picker .v3-body .v3-body-inner .v3-group h5{margin:0;top:0;padding:7px 0 3px 4px;z-index:2}.v3-emoji-picker .v3-body .v3-body-inner .v3-group h5.v3-sticky{position:sticky}.v3-emoji-picker .v3-body .v3-body-inner .v3-group .v3-emojis{display:flex;font-size:18px;flex-wrap:wrap}.v3-emoji-picker .v3-body .v3-body-inner .v3-group .v3-emojis button{cursor:pointer;border:none;background:none;margin:0;text-align:center;display:flex;align-items:center;justify-content:center;flex-basis:12.5%;max-width:12.5%;flex-grow:1;padding:0;font-size:22px;position:relative}.v3-emoji-picker .v3-body .v3-body-inner .v3-group .v3-emojis button:after{content:"";width:100%;padding-bottom:100%}.v3-emoji-picker .v3-body .v3-body-inner .v3-group .v3-emojis button span{display:flex;align-items:center;justify-content:center}.v3-emoji-picker .v3-body .v3-body-inner .v3-group .v3-emojis button img{max-width:100%;padding:4px}.v3-emoji-picker .v3-body .v3-body-inner .v3-group .v3-emojis button span,.v3-emoji-picker .v3-body .v3-body-inner .v3-group .v3-emojis button img{position:absolute;top:0;left:0;width:100%;height:100%}.v3-emoji-picker .v3-body .v3-body-inner.is-mac .v3-emojis button{font-family:"Apple Color Emoji"}.v3-emoji-picker .v3-footer{font-size:14px;border-top:1px solid #dddddd;padding:15px;display:flex;align-items:center;justify-content:space-between;position:relative}.v3-emoji-picker .v3-footer .v3-tone,.v3-emoji-picker .v3-footer .v3-foot-left{display:flex;align-items:center}.v3-emoji-picker .v3-footer .v3-tone img,.v3-emoji-picker .v3-footer .v3-foot-left img{width:20px;display:block}.v3-emoji-picker .v3-footer .v3-tone>span:first-child,.v3-emoji-picker .v3-footer .v3-foot-left>span:first-child{margin-right:6px}.v3-emoji-picker .v3-footer .v3-foot-left>span.v3-text{max-width:100px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.v3-emoji-picker .v3-footer .v3-tone{border:none;padding:0;background:none;cursor:pointer;display:inline-flex;align-items:center}.v3-emoji-picker .v3-footer .v3-tone>span{display:inline-flex;vertical-align:top}.v3-emoji-picker .v3-footer .v3-tone .v3-text{font-size:13px}.v3-emoji-picker .v3-footer .v3-tone .v3-icon{display:inline-flex;height:15px;width:15px;vertical-align:middle;align-self:center;border:2px solid rgba(0,0,0,.2)}.v3-emoji-picker .v3-footer .v3-tone .v3-icon.v3-tone-neutral{background-color:#ffd225}.v3-emoji-picker .v3-footer .v3-tone .v3-icon.v3-tone-1f3fb{background-color:#ffdfbd}.v3-emoji-picker .v3-footer .v3-tone .v3-icon.v3-tone-1f3fc{background-color:#e9c197}.v3-emoji-picker .v3-footer .v3-tone .v3-icon.v3-tone-1f3fd{background-color:#c88e62}.v3-emoji-picker .v3-footer .v3-tone .v3-icon.v3-tone-1f3fe{background-color:#a86637}.v3-emoji-picker .v3-footer .v3-tone .v3-icon.v3-tone-1f3ff{background-color:#60463a}.v3-emoji-picker .v3-footer .v3-tone .is-mac span{font-family:"Apple Color Emoji"}.v3-skin-tones{position:absolute;height:100%;width:60%;top:0;left:0;display:flex;align-items:center;justify-content:flex-end;padding:0 15px;opacity:0;visibility:hidden;transition:.2s;border-radius:0 0 10px 10px}.v3-skin-tones.v3-is-open{opacity:1;visibility:visible}.v3-skin-tones .v3-skin-tone{display:inline-block;height:15px;width:25px;border:none;padding:0;cursor:pointer;transition:0ms}.v3-skin-tones .v3-skin-tone:hover{transform:scale(1.1);transition:.2s}.v3-skin-tones .v3-skin-tone-neutral{color:#ffd225;background-color:#ffd225}.v3-skin-tones .v3-skin-tone-1f3fb{color:#ffdfbd;background-color:#ffdfbd}.v3-skin-tones .v3-skin-tone-1f3fc{color:#e9c197;background-color:#e9c197}.v3-skin-tones .v3-skin-tone-1f3fd{color:#c88e62;background-color:#c88e62}.v3-skin-tones .v3-skin-tone-1f3fe{color:#a86637;background-color:#a86637}.v3-skin-tones .v3-skin-tone-1f3ff{color:#60463a;background-color:#60463a}.v3-input-emoji-picker *{box-sizing:border-box}.v3-input-emoji-picker .v3-input-picker-root{position:relative}.v3-input-emoji-picker .v3-input-picker-root .v3-emoji-picker-input,.v3-input-emoji-picker .v3-input-picker-root .v3-emoji-picker-textarea{width:100%;height:40px;border:1px solid #999;padding-left:15px}.v3-input-emoji-picker .v3-input-picker-root .v3-emoji-picker-textarea{min-height:80px;resize:vertical}.v3-input-emoji-picker .v3-input-picker-root .v3-emoji-picker-textarea+.v3-input-picker-wrap .v3-input-picker-icon{top:auto;bottom:5px}.v3-input-emoji-picker .v3-input-picker-root .v3-input-picker-wrap .v3-input-picker-icon{display:inline-flex;position:absolute;right:5px;top:50%;transform:translateY(-50%);font-size:24px;border:none;background:none;padding:0 5px;cursor:pointer}.v3-input-emoji-picker .v3-input-picker-root .v3-input-picker-wrap .v3-input-picker-icon img{display:block;width:1em;height:1em}.v3-input-emoji-picker .v3-input-picker-root .v3-input-picker-wrap .v3-emoji-picker{opacity:0;visibility:hidden;transition:.2s}.v3-input-emoji-picker .v3-input-picker-root .v3-input-picker-wrap.v3-picker-is-open .v3-emoji-picker{opacity:1;visibility:visible;z-index:999}.v3-emoji-picker{--v3-picker-bg: #ffffff;--v3-picker-fg: #000000;--v3-picker-border: #dddddd;--v3-picker-input-bg: var(--v3-picker-bg);--v3-picker-input-border: #cccccc;--v3-picker-input-focus-border: #000000;--v3-group-image-filter: none;--v3-picker-emoji-hover: #f7f7f7;background:var(--v3-picker-bg);color:var(--v3-picker-fg)}.v3-emoji-picker .v3-footer,.v3-emoji-picker .v3-header{border-color:var(--v3-picker-border)}.v3-emoji-picker .v3-groups{filter:var(--v3-group-image-filter)}.v3-emoji-picker .v3-tone{color:var(--v3-picker-fg)}.v3-emoji-picker .v3-search input{background:var(--v3-picker-input-bg);border-color:var(--v3-picker-input-border);color:inherit}.v3-emoji-picker .v3-search input:focus{border-color:var(--v3-picker-input-focus-border)}.v3-emoji-picker .v3-body .v3-body-inner .v3-group h5,.v3-emoji-picker .v3-skin-tones{background:var(--v3-picker-bg)}.v3-emoji-picker .v3-body .v3-body-inner .v3-group .v3-emojis button:hover{background:var(--v3-picker-emoji-hover, #f7f7f7)}@media (prefers-color-scheme: dark){.v3-emoji-picker.v3-color-theme-auto{--v3-picker-bg: #000000;--v3-picker-fg: #ffffff;--v3-picker-border: #333333;--v3-picker-input-bg: #222222;--v3-picker-input-border: #444444;--v3-picker-input-focus-border: #555555;--v3-group-image-filter: invert(1);--v3-picker-emoji-hover: #222222}}.v3-emoji-picker.v3-color-theme-dark{--v3-picker-bg: #000000;--v3-picker-fg: #ffffff;--v3-picker-border: #333333;--v3-picker-input-bg: #222222;--v3-picker-input-border: #444444;--v3-picker-input-focus-border: #555555;--v3-group-image-filter: invert(1);--v3-picker-emoji-hover: #222222}

</style>
