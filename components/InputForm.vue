<template>
  <input type="text" :value="value" @input="onInput" />
</template>

<script>
export default {
  computed: {
    value() {
      return this.$store.state.form.text.value;
    }
  },
  methods: {
    onInput(e) {
      const text = e.target.value;
      this.$store.commit("form/text/setValue", { text });
    }
  }
};
</script>

<style>
</style>
