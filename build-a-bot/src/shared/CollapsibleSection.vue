<template>
  <div>
    <div class="header">
      <span v-if="open" @click="open = !open">collapse</span>
      <span v-if="!open" @click="open = !open">expand</span>
    </div>

    <slot v-if="open"></slot>
  </div>
</template>

<script>
export default {
  name: 'CollapsibleSection',
  data() {
    return { open: true };
  },
};
</script>

<style scoped>
  header {
    background-color: #ccc;
    cursor: pointer;
    padding: 10px;
  }
</style>
