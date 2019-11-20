<template>
  <main>
    <p>{{ count }}</p>
    <button @click="onClick">count up</button>
  </main>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.state.counter.count;
    }
  },
  methods: {
    onClick() {
      this.$store.commit("counter/countUp");
    }
  }
};
</script>
