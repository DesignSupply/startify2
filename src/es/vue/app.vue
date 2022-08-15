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
    computed: {
      stateStatus() {
        return this.$store.getters.getStatus;
      }
    },
    created() {
      this.$store.dispatch('updateStatus', 'state updated');
    },
    mounted() {
      this.showMessage();
    },
    methods: {
      showMessage() {
        console.log(this.message);
        console.log(this.stateStatus);
      }
    }
  }
</script>

