<template>
    <div>
        <b-row>
            <b-col cols="12" lg="12">
                <div class="box">
                    <b-button @click="$router.go(-1)" class="btn btn-back"><eva-icon name="arrow-ios-back-outline"></eva-icon></b-button>
                    <b-row>
                        <b-col cols="12" lg="6" class="border-right mb-4">
                            <h5><b>Data</b></h5>
                            <b-row class="mt-4">
                                <b-col cols="12" lg="4">
                                    <h6>NIK almarhum :</h6>
                                </b-col>
                                <b-col cols="12" lg="8">
                                    <h6><b>{{ singleForm.nik }}</b></h6>
                                </b-col>
                            </b-row>
                            <b-row class="mt-2">
                                <b-col cols="12" lg="4">
                                    <h6>Tanggal pengajuan :</h6>
                                </b-col>
                                <b-col cols="12" lg="8">
                                    <h6><b>{{ humanDate(singleForm.tanggal) }}</b></h6>
                                </b-col>
                            </b-row>
                            <b-row class="mt-2">
                                <b-col cols="12" lg="4">
                                    <h6>Kecamatan :</h6>
                                </b-col>
                                <b-col cols="12" lg="8">
                                    <h6><b>{{ singleForm.kecamatan }}</b></h6>
                                </b-col>
                            </b-row>
                            <b-row class="mt-2">
                                <b-col cols="12" lg="4">
                                    <h6>Desa :</h6>
                                </b-col>
                                <b-col cols="12" lg="8">
                                    <h6><b>{{ singleForm.desa }}</b></h6>
                                </b-col>
                            </b-row>
                            <b-row class="mt-2">
                                <b-col cols="6" lg="4">
                                    <div class="picture-box">
                                        <label>Surat keterangan kematian</label>
                                    </div>
                                    <center v-if="singleForm.suratKeteranganKematian"><a href="javascript:void(0);" @click="detailDokumen(singleForm.suratKeteranganKematian)" class="picture-view-box">Lihat dokumen</a></center>
                                </b-col>
                                <b-col cols="6" lg="4">
                                    <div class="picture-box">
                                        <label>Surat keterangan tidak mampu</label>
                                    </div>
                                    <center v-if="singleForm.suratKeteranganTidakMampu"><a href="javascript:void(0);" @click="detailDokumen(singleForm.suratKeteranganTidakMampu)" class="picture-view-box">Lihat dokumen</a></center>
                                </b-col>
                                <b-col cols="6" lg="4">
                                    <div class="picture-box">
                                        <label>Surat keterangan ahli waris</label>
                                    </div>
                                    <center v-if="singleForm.suratKeteranganAhliWaris"><a href="javascript:void(0);" @click="detailDokumen(singleForm.suratKeteranganAhliWaris)" class="picture-view-box">Lihat dokumen</a></center>
                                </b-col>
                                <b-col cols="6" lg="4">
                                    <div class="picture-box">
                                        <label>Foto KTP/KK/Akta almarhum</label>
                                    </div>
                                    <center v-if="singleForm.fotoKtpKKAktaAlmarhum"><a href="javascript:void(0);" @click="detailDokumen(singleForm.fotoKtpKKAktaAlmarhum)" class="picture-view-box">Lihat dokumen</a></center>
                                </b-col>
                                <b-col cols="6" lg="4">
                                    <div class="picture-box">
                                        <label>Foto KTP/KK/Akta ahli waris</label>
                                    </div>
                                    <center v-if="singleForm.fotoKtpKKAktaAhliWaris"><a href="javascript:void(0);" @click="detailDokumen(singleForm.fotoKtpKKAktaAhliWaris)" class="picture-view-box">Lihat dokumen</a></center>
                                </b-col>
                                <b-col cols="6" lg="4">
                                    <div class="picture-box">
                                        <label>Foto rumah</label>
                                    </div>
                                    <center v-if="singleForm.fotoRumah"><a href="javascript:void(0);" @click="detailDokumen(singleForm.fotoRumah)" class="picture-view-box">Lihat dokumen</a></center>
                                </b-col>
                            </b-row>
                            <b-row class="mt-4">
                                <b-col cols="12" lg="4">
                                    <h6>No rekening :</h6>
                                </b-col>
                                <b-col cols="12" lg="8">
                                    <h6><b>{{ singleForm.noRekening }}</b></h6>
                                </b-col>
                            </b-row>
                            <b-row>
                               <b-col cols="6" lg="4">
                                    <div class="picture-box">
                                        <label>Foto buku rekening</label>
                                    </div>
                                    <center v-if="singleForm.fotoBukuRekening"><a href="javascript:void(0);" @click="detailDokumen(singleForm.fotoBukuRekening)" class="picture-view-box">Lihat dokumen</a></center>
                                </b-col>
                            </b-row>
                        </b-col>
                        <b-col cols="12" lg="6" class="left-spacing">
                            <h5><b>Riwayat status</b></h5>
                            <ul class="timeline-status">
                                <li class="primary">
                                    <span>Selesai</span>
                                    <small>05 September 2010 19:05</small>
                                </li>
                                <li>
                                    <span>Menunggu penyaluran bantuan</span>
                                    <small>04 September 2010 17:05</small>
                                </li>
                                <li class="info">
                                    <span>Berhak menerima (verifikasi lapangan)</span>
                                    <small>03 September 2010 17:05</small>
                                </li>
                                <li class="warning">
                                    <span>Diproses (verifikasi lapangan)</span>
                                    <small>02 September 2010 17:05</small>
                                </li>
                                <li class="warning">
                                    <span>Diproses (verifikasi online)</span>
                                    <small>01 September 2010 17:05</small>
                                </li>
                                <li class="danger">
                                    <span>Persyaratan kurang (verifikasi online)</span>
                                    <small>01 September 2010 14:05</small>
                                </li>
                                <li class="warning">
                                    <span>Diproses (verifikasi online)</span>
                                    <small>01 September 2010 12:05</small>
                                </li>
                            </ul>
                        </b-col>
                    </b-row>
                </div>
            </b-col>
        </b-row>
        <ModalDetailDokumen ref="modal" />
    </div>
</template>
<script>
    import ModalDetailDokumen from '@/components/Backend/ModalDetailDokumen'
    import id from 'date-fns/locale/id';
    import { format, parseISO } from 'date-fns'
    export default {
        name: 'pemohon-pengajuan-ajukan-detail',
        components: {
            ModalDetailDokumen
        },
        data() {
            return {
                singleForm: {
                    nik: 3567654356782654,
                    tanggal: '2020-08-20',
                    kecamatan: 'Kecamatan bojonegoro',
                    desa: 'Desa klangon',
                    suratKeteranganKematian: 'document.pdf',
                    suratKeteranganTidakMampu: 'document.pdf',
                    suratKeteranganAhliWaris: 'document.pdf',
                    fotoKtpKKAktaAlmarhum: 'document.pdf',
                    fotoKtpKKAktaAhliWaris: 'document.pdf',
                    fotoRumah: 'document.pdf',
                    noRekening: 896896876,
                    fotoBukuRekening: 'document.pdf',
                }
            }
        },
        methods: {
            detailDokumen(file) {
                this.$refs.modal.showModal(file);
            },
            humanDate (tanggal) {
                return format(parseISO(tanggal), 'd MMMM yyyy', {locale: id})
            }
        }
    }
</script>