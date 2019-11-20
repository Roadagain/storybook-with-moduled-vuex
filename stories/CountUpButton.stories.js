import CountUpButton from "../components/CountUpButton.vue";

export default { title: "Button" };

export const countUpButton = () => ({
  components: { CountUpButton },
  template: "<count-up-button />"
});
