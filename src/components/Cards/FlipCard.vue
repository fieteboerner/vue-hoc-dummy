<template>
<div class="flipCard flip-right">
    <div class="flipCard__content">
        <div class="flipCard__front border border-teal-500 rounded overflow-hidden">
            <div class="p-2 bg-teal-500 text-white">
                <slot name="frontTitle" />
            </div>
            <div class="p-2 content">
                <slot name="frontContent" />
            </div>
        </div>
        <div class="flipCard__back border border-teal-500 rounded overflow-hidden">
            <div class="p-2 bg-teal-500 text-white">
                <slot name="backTitle" />
            </div>
            <div class="p-2 content">
                <slot name="backContent" />
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'FlipCard',
}
</script>

<style lang="scss">
@import "~@/assets/scss/components/flip-card";
</style>
