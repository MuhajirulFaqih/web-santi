<template>
    <div>
        <b-row>
            <b-col cols="12" lg="5">
                <div class="box">
                    <b-form @submit.prevent="submitForm" class="form-horizontal">
                        <b-row>
                            <b-col cols="12" lg="8">
                                <b-form-group label="Nama aplikasi">
                                    <b-form-input v-model.trim="singleForm.nama" />
                                </b-form-group>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col cols="12" lg="12">
                                <b-form-group label="Password default" class="password">
                                    <b-form-input type="password" v-model.trim="singleForm.password" />
                                    <eva-icon name="eye-outline" class="show active"></eva-icon>
                                    <eva-icon name="eye-off-2-outline" class="hide"></eva-icon>
                                </b-form-group>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col cols="12" class="mt-3">
                                <b-button variant="primary" type="submit" class="float-right">Edit data</b-button>
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
        name: 'sudo-pengaturan',
        data() {
            return {
                singleForm: {
                    nama: 'Santi',
                    password: 'santi2020',
                }
            }
        },
        methods: {
            submitForm() {
                this.$noty.success('Data pengaturan berhasil diupdate');
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