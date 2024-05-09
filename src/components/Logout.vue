<template>
  <div class="cerrar">
    <button @click="logout()">
      Cerrar sesión
    </button>
  </div>
</template>
<script lang="ts">
import { defineComponent, inject } from 'vue';
import { useRouter } from 'vue-router';
import iStorage from '../interfaces/Storage';

export default defineComponent({
  setup() {
    const Storage = inject<iStorage>('Storage');
    const router = useRouter();
    const logout = (): void => {
      Storage.delete('current_user');
      Storage.delete('token');
      router.push('/login');
    };
    return {
      logout,
    };
  },
});
</script>
