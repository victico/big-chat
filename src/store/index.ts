import { createStore } from 'vuex';
import firebase from '@/firebase';
import {
  collection,
  query,
  where,
  orderBy,
  getDocs,
} from 'firebase/firestore';
import iMessages from '@/interfaces/Message';

export default createStore({
  state: {
    userID: '' as string,
    messages: [] as iMessages[],
    logged: window.localStorage.getItem('VICGRAM-CHAT_current_user').replace(/"/gi, ''),
  },
  getters: {
  },
  mutations: {
    setUserId(state: any, userId: any) {
      state.userID = userId;
    },
    setMessages(state: any, messages: iMessages[]) {
      state.messages = messages;
    },
    setLogged(state: any, payload: string) {
      state.logged = payload;
    },
  },
  actions: {
    async getMessages({ commit, state }) {
      try {
        const database = collection(firebase.db, 'Menssages');
        const getMessageQuery = query(database, where('userID', 'in', [state.userID, state.logged]), orderBy('date', 'asc'));
        const querySnapshot = await getDocs(getMessageQuery);
        const messages:iMessages[] = [];
        querySnapshot.forEach((doc) => {
          const {
            date,
            type,
            text,
            userID,
          } = doc.data();
          messages.push({
            date,
            text,
            type,
            userID,
          });
        });
        commit('setMessages', messages);
      } catch (error) {
        console.error(error);
      }
    },
  },
  modules: {
  },
});
