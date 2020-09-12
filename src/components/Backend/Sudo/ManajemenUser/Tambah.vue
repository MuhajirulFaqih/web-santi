<template>
    <div>
        <b-row>
            <b-col cols="12" lg="5">
                <div class="box">
                    <b-button @click="$router.go(-1)" class="btn btn-back"><eva-icon name="arrow-ios-back-outline"></eva-icon></b-button>
                    <b-form @submit.prevent="submitForm" class="form-horizontal">
                        <b-row>
                            <b-col cols="12" lg="12">
                                <b-form-group label="Nama">
                                    <b-form-input v-model.trim="singleForm.nama" />
                                </b-form-group>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col cols="12" lg="8">
                                <b-form-group label="Username">
                                    <b-form-input v-model.trim="singleForm.username" />
                                </b-form-group>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col cols="12" lg="12">
                                <b-form-group label="Kecamatan">
                                    <b-form-select v-model="singleForm.kecamatan" :options="kecamatanOptions" class="form-control"></b-form-select>
                                </b-form-group>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col cols="12" lg="9">
                                <b-form-group label="Password" class="password">
                                    <b-form-input type="password" v-model.trim="singleForm.password" />
                                    <eva-icon name="eye-outline" class="show active"></eva-icon>
                                    <eva-icon name="eye-off-2-outline" class="hide"></eva-icon>
                                </b-form-group>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col cols="12" lg="9">
                                <b-form-group label="Konfirmasi password" class="password">
                                    <b-form-input type="password" v-model.trim="singleForm.konfirmasiPassword" />
                                    <eva-icon name="eye-outline" class="show active"></eva-icon>
                                    <eva-icon name="eye-off-2-outline" class="hide"></eva-icon>
                                </b-form-group>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col cols="12" class="mt-3">
                                <b-button variant="primary" type="submit" class="float-right">Simpan data</b-button>
                            </b-col>
                        </b-row>
                    </b-form>
                </div>
            </b-col>
        </b-row>
    </div>
</template>
<script>
    export default {
        name: 'sudo-manajemen-user-tambah',
        data() {
            return {
                singleForm: {
                    nama: null,
                    username: null,
                    kecamatan: null,
                    password: null,
                    konfirmasiPassword: null,
                },
                kecamatanOptions: [
                    { value: null, text: '- Silahkan memilih -' },
                    { value: 1, text: 'Kecamatan balen' },
                ]
            }
        },
        methods: {
            submitForm() {
                this.$router.push({ name: 'sudo-manajemen-user' })
                this.$noty.success('Data user berhasil ditambah');
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