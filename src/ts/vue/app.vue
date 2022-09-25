<template>
  <h1>Startify 2</h1>
</template>

<script lang="ts" setup>
  import { defineComponent, reactive, onMounted, computed } from 'vue';
  import { useStore } from 'vuex';
  import { key } from '../store';
  interface dataInterface {
    message: string
  }
  const store = useStore(key);
  const data:dataInterface = reactive({ message: 'Vue.js is ready use TypeScript' });
  store.dispatch('updateStatus', 'state updated');
  const stateStatus = computed(() => {
    return store.getters.getStatus;
  })
  const showMessage = ():void => {
    console.log(data.message);
    console.log(stateStatus.value);
  };
  onMounted(():void => {
    showMessage();
  });
</script>