<template>
  <div>
    <h1>{{part.title}}</h1>
    <div>
      {{part.description}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'PartInfo',
  data() {
    return {
      part: {
        title: 'Part title',
        description: 'Part description',
      },
    };
  },
};
</script>
