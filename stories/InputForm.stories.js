import InputForm from "../app/components/InputForm.vue";
import store from "./store";

export default { title: "Form" };

export const inputForm = () => ({
  components: { InputForm },
  store,
  template: "<input-form />"
});
