<template>
    <div>
        <b-row>
            <b-col cols="12" lg="5">
                <div class="box">
                    <b-button @click="$router.go(-1)" class="btn btn-back"><eva-icon name="arrow-ios-back-outline"></eva-icon></b-button>
                    <b-form @submit.prevent="submitForm" class="form-horizontal">
                        <b-row>
                            <b-col cols="12" lg="10">
                                <b-form-group label="Nomor rekening">
                                    <b-form-input v-model.trim="singleForm.noRekening" />
                                </b-form-group>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col cols="12" lg="5">
                                <b-form-file
                                    class="picture"
                                    placeholder="Foto buku rekening"
                                    v-model="singleForm.fotoBukuRekening"
                                ></b-form-file>
                            </b-col>
                            <b-col cols="12">
                                <span>*) Klik icon untuk mengupload file anda</span>
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
        name: 'pemohon-profil',
        data() {
            return {
                singleForm: {
                    noRekening: null,
                    fotoBukuRekening: null,
                }
            }
        },
        methods: {
            submitForm() {
                this.$router.push({ name: 'pemohon-pengajuan' })
                this.$noty.success('Data rekening berhasil diupdate');
            }
        }
    }
</script>