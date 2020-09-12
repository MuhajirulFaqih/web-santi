<template>
    <div>
        <ul class="menu">
            <li class="header">
                <a>SI Santi</a>
            </li>
            <li @click="toggleActive" :class="$route.meta.title.parent == 'Dashboard' ? 'active' : ''">
                <router-link to="/pemohon/dashboard">
                    <eva-icon name="pie-chart-outline"></eva-icon>
                    Dashboard
                </router-link>
            </li>
            <li @click="toggleActive" :class="$route.meta.title.parent == 'Pengajuan' ? 'active' : ''">
                <router-link to="/pemohon/pengajuan">
                    <eva-icon name="book-outline"></eva-icon>
                    Pengajuan
                </router-link>
            </li>
            <li @click="toggleActive" :class="$route.meta.title.parent == 'Update profil' ? 'active' : ''">
                <router-link to="/pemohon/profil">
                    <eva-icon name="person-outline"></eva-icon>
                    Update profil
                </router-link>
            </li>
            <li @click="toggleActive" :class="$route.meta.title.parent == 'Ubah password' ? 'active' : ''">
                <router-link to="/pemohon/ubah-password">
                    <eva-icon name="lock-outline"></eva-icon>
                    Ubah password
                </router-link>
            </li>
            <li>
                <a href="javascript:void(0);" @click="logout">
                    <eva-icon name="log-out-outline"></eva-icon>
                    Logout
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'menu-pemohon',
        methods: {
            toggleActive () {
                this.$parent.active = ''
            },
            logout() {
                this.$router.push({ name: 'login' })
            }
        }
    }
</script>