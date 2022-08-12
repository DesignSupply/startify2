<template>
  <h1>Startify 2</h1>
</template>

<script lang="ts">
  import { defineComponent, reactive, onMounted } from 'vue';
  interface dataInterface {
    message: string
  }
  export default defineComponent({
    setup() {
      const data:dataInterface = reactive({ message: 'Vue.js is ready use TypeScript' });
      const showMessage = ():void => {
        console.log(data.message);
      }
      onMounted(():void => {
        showMessage();
      });
      return {
        data,
        showMessage
      }
    }
  });
</script>