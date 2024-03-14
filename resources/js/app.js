require('./bootstrap');


import VueRouter from 'vue-router';
import Index from './index';
import router from './routes';
import moment from 'moment';
import FatalError from './shared/components/FatalError';
import Success from "./shared/components/Success";
import StarRating from './shared/components/StarRating';
import ValidationErrors from "./shared/components/ValidationErrors";

window.Vue = require('vue');
Vue.use(VueRouter);

Vue.filter("fromNow", value => moment(value).fromNow());

Vue.component("star-rating", StarRating);
Vue.component("fatal-error", FatalError);
Vue.component("v-errors", ValidationErrors);
Vue.component("success", Success);

const app = new Vue({
    el: '#app',
    router,
    components: {
        "index": Index
    }
});
