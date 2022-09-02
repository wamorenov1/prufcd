<template>
  <div>
    <Header-bar></Header-bar>
    <main>
      <div class="container">
        <Breadcrum></Breadcrum>
        <Nuxt />
      </div>
    </main>
    
    
  </div>
</template>

<script>
import Breadcrum from '~/components/Breadcrum.vue'
export default {
  components: { Breadcrum },

}
</script>

<style>

</style>