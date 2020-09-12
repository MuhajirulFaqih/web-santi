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
                                <center v-if="singleForm.suratKeteranganKematianData"><a href="javascript:void(0);" @click="detailDokumen(singleForm.suratKeteranganKematianData)" class="picture-view-box">Lihat dokumen</a></center>
                            </b-col>
                            <b-col cols="6" lg="2">
                                <b-form-file
                                    class="picture"
                                    placeholder="Surat keterangan tidak mampu"
                                    v-model="singleForm.suratKeteranganTidakMampu"
                                ></b-form-file>
                                <center v-if="singleForm.suratKeteranganTidakMampuData"><a href="javascript:void(0);" @click="detailDokumen(singleForm.suratKeteranganTidakMampuData)" class="picture-view-box">Lihat dokumen</a></center>
                            </b-col>
                            <b-col cols="6" lg="2">
                                <b-form-file
                                    class="picture"
                                    placeholder="Surat keterangan ahli waris"
                                    v-model="singleForm.suratKeteranganAhliWaris"
                                ></b-form-file>
                                <center v-if="singleForm.suratKeteranganAhliWarisData"><a href="javascript:void(0);" @click="detailDokumen(singleForm.suratKeteranganAhliWarisData)" class="picture-view-box">Lihat dokumen</a></center>
                            </b-col>
                            <b-col cols="6" lg="2">
                                <b-form-file
                                    class="picture"
                                    placeholder="Foto KTP/KK/Akta almarhum"
                                    v-model="singleForm.fotoKtpKKAktaAlmarhum"
                                ></b-form-file>
                                <center v-if="singleForm.fotoKtpKKAktaAlmarhumData"><a href="javascript:void(0);" @click="detailDokumen(singleForm.fotoKtpKKAktaAlmarhumData)" class="picture-view-box">Lihat dokumen</a></center>
                            </b-col>
                            <b-col cols="6" lg="2">
                                <b-form-file
                                    class="picture"
                                    placeholder="Foto KTP/KK/Akta ahli waris"
                                    v-model="singleForm.fotoKTPKKAktaAhliWaris"
                                ></b-form-file>
                                <center v-if="singleForm.fotoKtpKKAktaAhliWarisData"><a href="javascript:void(0);" @click="detailDokumen(singleForm.fotoKtpKKAktaAhliWarisData)" class="picture-view-box">Lihat dokumen</a></center>
                            </b-col>
                            <b-col cols="6" lg="2">
                                <b-form-file
                                    class="picture"
                                    placeholder="Foto rumah"
                                    v-model="singleForm.fotoRumah"
                                ></b-form-file>
                                <center v-if="singleForm.fotoRumahData"><a href="javascript:void(0);" @click="detailDokumen(singleForm.fotoRumahData)" class="picture-view-box">Lihat dokumen</a></center>
                            </b-col>
                            <b-col cols="12" class="mt-3">
                                <span>*) Upload hanya jika dokumen ingin di update</span>
                                <br/>
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
        <ModalDetailDokumen ref="modal" />
    </div>
</template>
<script>
    import ModalDetailDokumen from '@/components/Backend/ModalDetailDokumen'
    export default {
        name: 'pemohon-pengajuan-ajukan-edit',
        data() {
            return {
                singleForm: {
                    nik: 3567654356782654,
                    kecamatan: 1,
                    desa: 1,
                    suratKeteranganKematianData: 'document.pdf',
                    suratKeteranganTidakMampuData: 'document.pdf',
                    suratKeteranganAhliWarisData: 'document.pdf',
                    fotoKtpKKAktaAlmarhumData: 'document.pdf',
                    fotoKtpKKAktaAhliWarisData: 'document.pdf',
                    fotoRumahData: 'document.pdf',
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
        components: {
            ModalDetailDokumen
        },
        methods: {
            submitForm() {
                this.$noty.success('Data pengajuan berhasil di edit');
                this.$router.push({ name: 'pemohon-pengajuan' })
            },
            detailDokumen(file) {
                this.$refs.modal.showModal(file);
            }
        }
    }
</script>