<template>
  <div>
    <div class="row">
      <div class="col-md-6 border">1</div>
      <div class="col-md-6 border">1</div>
    </div>
  </div>
</template>

<script>
import HeaderBar from '~/components/Header-bar.vue';
export default {
  layout: 'blog',
  components: { HeaderBar },
  name: 'IndexPage',
  mounted() {
    const urlWindow = () => {
      return window.location
    }
    dataLayer.push({'variable_name': `${urlWindow()}`});
  }
}
</script>
