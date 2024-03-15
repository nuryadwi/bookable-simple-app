<template>
    <div>
        <nav class="navbar bg-white border-bottom navbar-light">
            <router-link class="navbar-brand mr-auto" :to="{name: 'home'}">Home</router-link>
            <router-link class="btn nav-button" :to="{name: 'second'}">Second</router-link>
        </nav>
        <div class="container">
            <div class="row justify-content-center pt-4">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
    data() {
        return {
            lastSearch: this.$store.state.lastSearch
        }
    },
    computed: {
        ...mapState({
            lastSearchComputed: "lastSearch"
        }),
        somethingElse(){
            return 1+2;
        }
    }

}
</script>