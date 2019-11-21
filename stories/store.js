import { Store } from "vuex";

const requireContext = require.context("../store", true, /\.js$/);
const keys = requireContext.keys();
const storeObject = { modules: {} };

const addModules = (root, key, subModule) => {
  const slashIndex = key.indexOf("/");
  if (slashIndex === -1) {
    // 末代のモジュール
    root[key] = { namespaced: true, ...subModule };
    return;
  }

  // 子を持つモジュール
  const parentModule = key.substring(0, slashIndex);
  const childModule = key.substring(slashIndex + 1);
  if (!root[parentModule]) {
    root[parentModule] = { namespaced: true, modules: {} };
  }
  addModules(root[parentModule].modules, childModule, subModule);
};

keys.forEach(key => {
  const moduleKey = key.replace("./", "").replace(".js", ""); // ./hogehoge.ts の形になってるからhogehogeにする
  addModules(storeObject.modules, moduleKey, requireContext(key));
});

const store = new Store(storeObject);

export default store;
