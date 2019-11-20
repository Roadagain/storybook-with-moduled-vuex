<template>
  <main>
    <p>{{ count }}</p>
    <button @click="onClick">count up</button>
  </main>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    };
  },
  methods: {
    onClick() {
      this.count++;
    }
  }
};
</script>
