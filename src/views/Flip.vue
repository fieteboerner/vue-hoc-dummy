<template>
  <FlipCard>
    <!-- Front -->
    <template #frontTitle>Title</template>
    <template #frontContent>
      <div class="h-64">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, cumque?</div>
    </template>
    <!-- Back -->
    <template #backTitle>Title (edit)</template>
    <template #backContent>
      <div class="h-64">
        <textarea class="w-full h-full" rows="3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, cumque?</textarea>
      </div>
    </template>
  </FlipCard>
</template>

<script>
import FlipCard from '@/components/Cards/FlipCard.vue';

export default {
  name: 'Flip',
  components: { FlipCard }
}
</script>

