require('./bootstrap');


import VueRouter from 'vue-router';
import Index from './index';
import router from './routes';
import moment from 'moment';
import Vuex from 'vuex';
import FatalError from './shared/components/FatalError';
import Success from "./shared/components/Success";
import StarRating from './shared/components/StarRating';
import ValidationErrors from "./shared/components/ValidationErrors";
import storeDefinition from "./store";

window.Vue = require('vue');
Vue.use(VueRouter);
Vue.use(Vuex);

Vue.filter("fromNow", value => moment(value).fromNow());

Vue.component("star-rating", StarRating);
Vue.component("fatal-error", FatalError);
Vue.component("v-errors", ValidationErrors);
Vue.component("success", Success);

const store = new Vuex.Store(storeDefinition)

const app = new Vue({
    el: '#app',
    router,
    store,
    components: {
        "index": Index
    },
    beforeCreate() {
        this.$store.dispatch("loadStoredState")
    }
});
