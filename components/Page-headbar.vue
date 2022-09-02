<template>
    <div>
        <div class="page__title">
            <div class="decoration"></div>
            <div class="page__title__content">
                <h1>{{title}}</h1>
                <p>{{subtitle}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Page-headbar",
    props: ['title', 'subtitle']
}
</script>

<style>

</style>