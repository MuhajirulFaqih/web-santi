<template>
    <div>
        <b-row>
            <b-col cols="12" lg="5">
                <div class="box">
                    <b-form @submit.prevent="submitForm" class="form-horizontal">
                        <b-row>
                            <b-col cols="12" lg="8">
                                <b-form-group label="Username">
                                    <b-form-input v-model.trim="singleForm.username" />
                                </b-form-group>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col cols="12" lg="12">
                                <b-form-group label="Nama">
                                    <b-form-input v-model.trim="singleForm.nama" />
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
        name: 'sudo-profil',
        data() {
            return {
                singleForm: {
                    username: 'sudo',
                    nama: 'Sudo',
                }
            }
        },
        methods: {
            submitForm() {
                this.$noty.success('Data profil berhasil diupdate');
            }
        }
    }
</script>