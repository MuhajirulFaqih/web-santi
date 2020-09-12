<template>
    <div class="wrapper">
        <div :class="'sidebar ' + active">
            <router-view name="menu"></router-view>
        </div>
        <div class="content">
            <div class="top-bar">
                <button :class="'btn toggle ' + this.active" @click="toggleSidebar">
                    <eva-icon name="menu"></eva-icon>
                </button>
                 <span class="profile float-right">
                    <b-dropdown>
                        <template v-slot:button-content>
                            <eva-icon name="person-outline"></eva-icon>
                        </template>
                        <b-dropdown-item href="#">Muhajirul faqih</b-dropdown-item>
                    </b-dropdown>
                </span>
            </div>
            <div class="content-body">
                <b-jumbotron class="p-0 bg-transparent">
                    <div class="info-header">
                        <h1 class="header">{{ $route.meta.title.parent }}</h1>
                        <router-link name="button" :to="$route.meta.title.buttonUrl" v-if="$route.meta.title.buttonUrl" class="btn btn-primary"> 
                            {{ $route.meta.title.buttonText }}
                        </router-link>
                        <h5>{{ $route.meta.title.child }}</h5>
                    </div>
                </b-jumbotron>
                <router-view name="content"></router-view>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'frame',
        data () {
            return {
                active: ''
            }
        },
        methods: {
            toggleSidebar() {
                this.active = this.active == '' ? 'active' : ''
            }
        }
    }
</script>