<template>
  <input type="text" :value="value" @change="onChange" />
</template>

<script>
export default {
  computed: {
    value() {
      return this.$store.state.form.text.value;
    }
  },
  methods: {
    onChange(e) {
      const text = e.target.value;
      this.$store.commit("form/text/setValue", { text });
    }
  }
};
</script>

<style>
</style>
