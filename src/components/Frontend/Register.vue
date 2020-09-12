<template>
    <b-container fluid class="web web-login p-0">
        <b-navbar>
            <b-navbar-nav>
                <b-nav-item @click="$router.push('/')">
                    <div class="info-header">
                        <div class="logo">
                            <b-img :src="require('@/assets/img/logo.png')"></b-img>
                        </div>
                        <div class="description">
                            <div class="text-white">PEMERINTAH KABUPATEN BOJONEGORO</div>
                            <div class="text-white">BAGIAN KESEJAHTERAAN RAKYAT</div>
                        </div>
                    </div>
                </b-nav-item>
            </b-navbar-nav>
        </b-navbar>
        <!-- Header section -->
        <b-container fluid>
            <b-row class="welcome-header login-header">
                <b-col cols="12" lg="5" class="bg-web">
                    <h1 class="header text-white">SI Santi</h1>
                    <h5 class="sub-header text-white">Sistem Informasi Santunan Kematian</h5>
                    <div class="shape">
                        <div class="big-rectangle"></div>
                        <div class="rectangle"></div>
                        <div class="big-circle"></div>
                        <div class="circle"></div>
                    </div>
                </b-col>
                <b-col class="bg-login bg-register" cols="12" lg="7">
                    <div class="box">
                        <h5 class="header">Daftar</h5>
                        <h5>Silahkan lengkapi form untuk mendaftar</h5>
                        <b-form @submit.prevent="submitForm" class="form-horizontal mt-3">
                            <b-row>
                                <b-col cols="12">
                                    <b-form-group label="">
                                        <b-form-input v-model.trim="singleRegister.nik" placeholder="Nik" />
                                    </b-form-group>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col cols="12">
                                    <b-form-group label="">
                                        <b-form-input v-model.trim="singleRegister.nama" placeholder="Nama" />
                                    </b-form-group>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col cols="12">
                                    <b-form-group label="">
                                        <b-form-input v-model.trim="singleRegister.no_hp" placeholder="Nomor handphone" />
                                    </b-form-group>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col cols="12">
                                    <b-form-group label="" class="password">
                                        <b-form-input v-model.trim="singleRegister.password" placeholder="Password" />
                                        <eva-icon name="eye-outline" class="show active"></eva-icon>
                                        <eva-icon name="eye-off-2-outline" class="hide"></eva-icon>
                                    </b-form-group>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col cols="12">
                                    <b-form-group label="" class="password">
                                        <b-form-input v-model.trim="singleRegister.konfirmasiPassword" placeholder="Konfirmasi password" />
                                        <eva-icon name="eye-outline" class="show active"></eva-icon>
                                        <eva-icon name="eye-off-2-outline" class="hide"></eva-icon>
                                    </b-form-group>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col cols="12">
                                    <b-button variant="primary" type="submit" class="btn-block">Mendaftar</b-button>
                                </b-col>
                            </b-row>
                            <b-row class="mt-3">
                                <b-col cols="12">
                                    <span class="float-right">Sudah punya akun? <router-link to="/login" class="text-success">Login disini</router-link></span>
                                </b-col>
                            </b-row>
                        </b-form>
                    </div>
                    <b-row class="mt-4">
                        <b-col cols="12">
                            <center>&copy; Bojonegoro | 2020</center>
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
        </b-container>
    </b-container>
</template>

<script>
    export default {
        name: 'login',
        data() {
            return {
                singleRegister: {
                    nik: null, 
                    nama: null, 
                    no_hp: null, 
                    password: null,
                    konfirmasiPassword: null,
                },
            }
        },
        methods: {
            submitForm () {
                this.$router.push('/login')
            },
        },
        mounted() {
            var icon = window.$('.password .eva-hover')
            icon.click(function() {
                var element = window.$(this)
                var div = element.parent()
                if(div.find('.form-control').attr('type') == 'text') {
                    div.find('.form-control').attr('type', 'password')
                    div.find('.show').addClass('active')
                    div.find('.hide').removeClass('active')
                } else {
                    div.find('.form-control').attr('type', 'text')
                    div.find('.show').removeClass('active')
                    div.find('.hide').addClass('active')
                }
            })
        }
    }
</script>