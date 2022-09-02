<template>
  <header class="header">
      <div class="container">
        <nav class="nav__container">
          <div class="nav__logo bfix"><img src="~/assets/images/LogoCompensar.svg" alt=""></div>
          <div class="nav__button bfix">
            <div class="login-button">
              <div class="login-button__letter">
                <p>W</p>
              </div><NuxtLink to="/"> 
                <div class="login-button__dropdown"><img src="~/assets/images/icon_down.svg" aria-label="Desplegar menú"></div></NuxtLink>
              <div class="login-button__status"></div>
            </div>
          </div>
        </nav>
      </div>
    </header>
</template>

<script>
export default {

}
</script>

<style>

</style>