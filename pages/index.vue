<template>
  <div>
    <PageHeadbar
    title="Solicitud de crédito" 
    subtitle="Encuentre ofertas activas de crédito">
  </PageHeadbar>
  </div>
</template>

<script>
import HeaderBar from '~/components/Header-bar.vue';
import PageHeadbar from '~/components/Page-headbar.vue';
export default {
  layout: 'blog',
  components: { HeaderBar, PageHeadbar},
  name: 'IndexPage',
  mounted() {
    const urlWindow = () => {
      return window.location
    }
    dataLayer.push({'variable_name': `${urlWindow()}`});
  }
}
</script>
