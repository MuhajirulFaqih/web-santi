<template>
    <div>
        <b-row>
            <b-col cols="12" lg="12">
                <div class="box">
                    <b-button @click="$router.go(-1)" class="btn btn-back"><eva-icon name="arrow-ios-back-outline"></eva-icon></b-button>
                    <b-form @submit.prevent="submitForm" class="form-horizontal">
                        <b-row>
                            <b-col cols="12" lg="4">
                                <b-form-group label="NIK almarhum">
                                    <b-form-input v-model.trim="singleForm.nik" />
                                </b-form-group>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col cols="12" lg="4">
                                <b-form-group label="Kecamatan">
                                    <b-form-select v-model="singleForm.kecamatan" :options="kecamatanOptions" class="form-control"></b-form-select>
                                </b-form-group>
                            </b-col>
                            <b-col cols="12" lg="4">
                                <b-form-group label="Desa">
                                    <b-form-select v-model="singleForm.desa" :options="desaOptions" class="form-control"></b-form-select>
                                </b-form-group>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col cols="6" lg="2">
                                <b-form-file
                                    class="picture"
                                    placeholder="Surat keterangan kematian"
                                    v-model="singleForm.suratKeteranganKematian"
                                ></b-form-file>
                            </b-col>
                            <b-col cols="6" lg="2">
                                <b-form-file
                                    class="picture"
                                    placeholder="Surat keterangan tidak mampu"
                                    v-model="singleForm.suratKeteranganTidakMampu"
                                ></b-form-file>
                            </b-col>
                            <b-col cols="6" lg="2">
                                <b-form-file
                                    class="picture"
                                    placeholder="Surat keterangan ahli waris"
                                    v-model="singleForm.suratKeteranganAhliWaris"
                                ></b-form-file>
                            </b-col>
                            <b-col cols="6" lg="2">
                                <b-form-file
                                    class="picture"
                                    placeholder="Foto KTP/KK/Akta almarhum"
                                    v-model="singleForm.fotoKTPKKAktaAlmarhum"
                                ></b-form-file>
                            </b-col>
                            <b-col cols="6" lg="2">
                                <b-form-file
                                    class="picture"
                                    placeholder="Foto KTP/KK/Akta ahli waris"
                                    v-model="singleForm.fotoKTPKKAktaAhliWaris"
                                ></b-form-file>
                            </b-col>
                            <b-col cols="6" lg="2">
                                <b-form-file
                                    class="picture"
                                    placeholder="Foto rumah"
                                    v-model="singleForm.fotoRumah"
                                ></b-form-file>
                            </b-col>
                            <b-col cols="12" class="mt-3">
                                <span>*) Klik icon untuk mengupload file anda</span>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col cols="12" class="mt-3">
                                <b-button variant="primary" type="submit" class="float-right">Kirim data</b-button>
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
        name: 'pemohon-pengajuan-ajukan',
        data() {
            return {
                singleForm: {
                    nik: null,
                    kecamatan: null,
                    desa: null,
                    suratKeteranganKematian: null,
                    suratKeteranganTidakMampu: null,
                    suratKeteranganAhliWaris: null,
                    fotoKtpKKAktaAlmarhum: null,
                    fotoKtpKKAktaAhliWaris: null,
                    fotoRumah: null,
                },
                kecamatanOptions: [
                    { value: null, text: '- Silahkan memilih -' },
                    { value: 1, text: 'Kecamatan bojonegoro' },
                ],
                desaOptions: [
                    { value: null, text: '- Silahkan memilih -' },
                    { value: 1, text: 'Desa klangon' },
                ]
            }
        },
        methods: {
            submitForm() {
                this.$noty.success('Data pengajuan berhasil di simpan');
                this.$router.push({ name: 'pemohon-pengajuan' })
            }
        }
    }
</script>