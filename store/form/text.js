export const state = () => ({ value: "" });

export const mutations = {
  setValue(state, { value }) {
    state.value = value
  }
};
