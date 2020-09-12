<template>
    <div>
        <ul class="side-menu">
            <li class="header">
                <a>SI Santi</a>
            </li>
            <li :class="$route.meta.title.parent == 'Dashboard' ? 'active' : ''">
                <router-link to="/sudo/dashboard">
                    <eva-icon name="pie-chart-outline"></eva-icon>
                    Dashboard
                </router-link>
            </li>
            <li :class="$route.meta.title.parent == 'Pengajuan' ? 'active' : ''">
                <span class="notification">2</span>
                <router-link to="/sudo/pengajuan">
                    <eva-icon name="book-outline"></eva-icon>
                    Pengajuan
                </router-link>
            </li>
            <li :class="$route.meta.title.parent == 'Manajemen user' ? 'active' : ''">
                <router-link to="/sudo/manajemen-user">
                    <eva-icon name="people-outline"></eva-icon>
                    Manajemen user
                </router-link>
            </li>
            <li :class="$route.meta.title.parent == 'Pemohon' ? 'active' : ''">
                <router-link to="/sudo/manajemen-pemohon">
                    <eva-icon name="people-outline"></eva-icon>
                    Pemohon
                </router-link>
            </li>
            <li :class="$route.meta.title.parent == 'Update profil' ? 'active' : ''">
                <router-link to="/sudo/profil">
                    <eva-icon name="person-outline"></eva-icon>
                    Update profil
                </router-link>
            </li>
            <li :class="$route.meta.title.parent == 'Ubah password' ? 'active' : ''">
                <router-link to="/sudo/ubah-password">
                    <eva-icon name="lock-outline"></eva-icon>
                    Ubah password
                </router-link>
            </li>
            <li :class="$route.meta.title.parent == 'Pengaturan' ? 'active' : ''">
                <router-link to="/sudo/pengaturan">
                    <eva-icon name="settings-2-outline"></eva-icon>
                    Pengaturan
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
        name: 'sudo-pemohon',
        methods: {
            logout() {
                this.$router.push({ name: 'login' })
            }
        }        
    }
</script>