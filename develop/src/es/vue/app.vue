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

