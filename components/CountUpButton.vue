<template>
  <button @click="onClick">{{ count }}</button>
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
