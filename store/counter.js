export const state = () => ({ count: 0 });

export const mutations = {
  countUp(state) {
    state.count++;
  }
};
