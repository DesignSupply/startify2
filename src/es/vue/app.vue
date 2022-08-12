<template>
  <h1>Startify 2</h1>
</template>

<script>
  export default {
    data() {
      return {
        message: 'Vue.js is ready.'
      }
    },
    created() {
      this.showMessage();
    },
    methods: {
      showMessage() {
        console.log(this.message);
      }
    }
  }
</script>

