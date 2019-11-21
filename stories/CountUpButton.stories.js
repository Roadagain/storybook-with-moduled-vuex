import CountUpButton from "../components/CountUpButton.vue";
import store from "./store"

export default { title: "Button" };

export const countUpButton = () => ({
  components: { CountUpButton },
  store,
  template: "<count-up-button />"
});
