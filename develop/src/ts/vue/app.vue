<script lang="ts">
  import { Component, Prop, Emit, Watch, Vue } from 'vue-property-decorator';
  @Component({
    components: {}
  })
  export default class vueModel extends Vue {
    message: string = 'Vue.js is ready';
    mounted(): void {
      this.showMessage();
    }
    showMessage(): void {
      console.log(this.message);
    }
  }
</script>