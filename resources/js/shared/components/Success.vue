<template>
    <div class="text-center success">
        <i class="fas fa-thumbs-up"></i>
        <h1 class="mt-4">Success!</h1>
        <h2>
            <slot></slot>
        </h2>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.success {
    color: #0ccd49;
    font-size: 10rem;
}
</style>