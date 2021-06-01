
import Vue from "vue";
import Vuex from "vuex";
import Example from "./modules/example";
import Charts from "./modules/charts";
import Login from "./modules/login";

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        Example,
        Charts,
        Login
    }
})
