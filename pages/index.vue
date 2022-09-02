<template>
  <div>
    <PageHeadbar
    title="Solicitud de crédito" 
    subtitle="Encuentre ofertas activas de crédito">
    </PageHeadbar>
    <StepsBalls></StepsBalls>
    <div class="row py-4">
      <div class="col-md-12">
        <h2 class="title-l">Información general su solicitud - Crédito de libre inversión</h2>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderBar from '~/components/Header-bar.vue';
import PageHeadbar from '~/components/Page-headbar.vue';
import StepsBalls from '~/components/Steps-balls.vue';
export default {
  layout: 'blog',
  components: { HeaderBar, PageHeadbar, StepsBalls },
  name: 'IndexPage',
  mounted() {
    const urlWindow = () => {
      return window.location
    }
    dataLayer.push({'variable_name': `${urlWindow()}`});
  }
}
</script>
