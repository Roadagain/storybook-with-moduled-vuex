import Vue from "vue";
import Vuex from "vuex";
import { configure } from "@storybook/vue";

Vue.use(Vuex);

configure(require.context("../stories", true, /\.stories\.js$/), module);
