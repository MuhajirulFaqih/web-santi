<template>
    <div>
        <b-row>
            <b-col cols="12" lg="12">
                <div class="box">
                    <div class="d-block">
                        <b-row>
                            <b-col cols="12" lg="6" md="6">
                                <label class="sorting">
                                    Tampilkan
                                    <select v-model="perPage" class="per-page" id="">
                                        <option value="10">10</option>
                                        <option value="50">50</option>
                                        <option value="100">100</option>
                                    </select>
                                    Data
                                </label>
                            </b-col>
                            <b-col cols="12" offset="0" lg="4" md="6" offset-lg="2">
                                <b-form-input
                                    class="float-right"
                                    v-model="filterDebounced"
                                    placeholder="Masukkan kata kunci..."/>
                            </b-col>
                        </b-row>

                        <div class="position-relative mt-4">
                            <b-table responsive
                                class="main-table"
                                ref="tabel"
                                :busy.sync="isBusy"
                                :items="providerTable"
                                :fields="tableColumns"
                                :current-page="currentPage"
                                :per-page="perPage"
                                :filter="filter"
                                :sort-by.sync="sortBy"
                                :sort-desc.sync="sortDesc"
                                @row-clicked="detail">
                                <template v-slot:cell(index)="data">
                                    {{ ((currentPage - 1) * perPage) + data.index + 1 }}
                                </template>
                                <template v-slot:cell(status)="data">
                                    <span v-if="data.item.status == 'diproses-verifikasi-online'">
                                        <span class="circle warning"></span> Diproses (Verifikasi online) 
                                    </span>
                                    <span v-else-if="data.item.status == 'persyaratan-kurang-verifikasi-online'">
                                        <span class="circle danger"></span> Persyaratan kurang (Verifikasi online) 
                                        <small class="d-block text-form" v-if="data.item.status == 'persyaratan-kurang-verifikasi-online'">Lengkapi data agar pengajuan dapat diproses kembali</small>
                                    </span>
                                    <span v-else-if="data.item.status == 'diproses-verifikasi-lapangan'">
                                        <span class="circle warning"></span> Diproses (Verifikasi lapangan) 
                                    </span>
                                    <span v-else-if="data.item.status == 'berhak-menerima-verifikasi-lapangan'">
                                        <span class="circle info"></span> Berhak menerima (Verifikasi lapangan) 
                                        <small class="d-block text-form" v-if="data.item.no_rekening == null">Segera update data rekening melalui tombol orange disamping</small>
                                    </span>
                                    <span v-else-if="data.item.status == 'tidak-berhak-menerima-verifikasi-lapangan'">
                                        <span class="circle danger"></span> Tidak berhak menerima (Verifikasi lapangan) 
                                    </span>
                                    <span v-else-if="data.item.status == 'menunggu-penyaluran'">
                                        <span class="circle"></span> Menunggu penyaluran bantuan 
                                    </span>
                                    <span v-else><span class="circle primary"></span> Selesai </span>
                                </template>
                                <template v-slot:cell(opsi)="data">
                                    <router-link :to="'pengajuan/edit/' + data.item.id" class="btn btn-xs btn-info" v-b-tooltip title="Edit data pengajuan">
                                        <eva-icon name="edit-2-outline"></eva-icon>
                                    </router-link>
                                    <router-link v-if="data.item.status == 'berhak-menerima-verifikasi-lapangan'" :to="'pengajuan/rekening/' + data.item.id" class="btn btn-xs btn-warning" v-b-tooltip title="Edit data rekening">
                                        <eva-icon name="credit-card-outline"></eva-icon>
                                    </router-link>
                                </template>
                            </b-table>
                            <div class="loading" v-show="isBusy">
                                <spinner :speed=".4" :size="30" />
                            </div>
                        </div>

                        <b-row>
                            <b-col cols="12" lg="4" class="text-center-sm">
                                Menampilkan {{ firstRows }} ke {{ viewRows }} dari {{ totalRows }} data
                            </b-col>
                            <b-col cols="12" lg="8" class="text-center-sm">
                                <b-pagination
                                    class="float-right"
                                    :total-rows="totalRows"
                                    v-model="currentPage"
                                    :per-page="perPage" />
                            </b-col>
                        </b-row>
                    </div>
                </div>
            </b-col>
        </b-row>
    </div>
</template>
<script>
    import { debounce } from 'lodash'
    import spinner from 'vue-simple-spinner'
    import id from 'date-fns/locale/id';
    import { format, parseISO } from 'date-fns'
    export default {
        name: 'pemohon-pengajuan',
        components: {
            spinner
        },
        data() {
            return {
                totalRows: 100,
                viewRows: 10,
                perPage: 10,
                currentPage: 1,
                filter: '',
                filterDebounced: '',
                isBusy: false,
                sortBy: 'id',
                sortDesc: true,
                tableColumns: [
                    { key: 'index', label: 'No', tdClass: 'number' },
                    { key: 'nik', label: 'NIK almarhum', tdClass: 'main-text' },
                    { 
                        key: 'tanggal',
                        label: 'Tanggal pengajuan', 
                        formatter: v => { return format(parseISO(v), 'd MMMM yyyy', {locale: id}) },
                        tdClass: 'sub-text'
                    },
                    { key: 'status', label: 'Status pengajuan', tdClass: 'description' },
                    { key: 'opsi', label: 'Opsi', tdClass: 'action' },
                ]
            }
        },
        computed: {
            firstRows() {
                let ceil = (this.currentPage * this.perPage) - this.perPage;
                return (ceil <= 0 ? 0 : ceil) + 1;
            },
        },
        methods: {
            providerTable() {
                //  let payload = {
                //     page: ctx.currentPage,
                //     filter: ctx.filter === '' ? null : ctx.filter,
                //     sort: sortBy + ':' + (ctx.sortDesc ? 'desc' : 'asc'),
                // }

                // return axios.get(baseUrl + 'list', { params: payload })
                //     .then(({ data: { data, meta: { pagination }}}) => {
                //         this.totalRows = pagination.total
                //         this.perPage = pagination.per_page
                //         this.currentPage = pagination.current_page
                //         this.viewRows = pagination.count
                //         return data
                //     }).catch(error => {
                //         this.totalRows = 0

                //         return []
                //     })
                return [
                    { id: 1,nik: 3567654356782654, tanggal: '2020-08-20 15:43:11', status: 'diproses-verifikasi-online', 'no_rekening': null },
                    { id: 2, nik: 3567654356782653, tanggal: '2020-08-20 15:43:11', status: 'persyaratan-kurang-verifikasi-online', 'no_rekening': null },
                    { id: 3, nik: 3567654356782662, tanggal: '2020-08-20 15:43:11', status: 'diproses-verifikasi-lapangan', 'no_rekening': null },
                    { id: 4, nik: 3567654356782664, tanggal: '2020-08-20 15:43:11', status: 'diproses-verifikasi-lapangan', 'no_rekening': null },
                    { id: 5, nik: 3567654356782674, tanggal: '2020-08-20 15:43:11', status: 'berhak-menerima-verifikasi-lapangan', 'no_rekening': null },
                    { id: 6,nik: 3567654356782654, tanggal: '2020-08-20 15:43:11', status: 'diproses-verifikasi-online', 'no_rekening': null },
                    { id: 7, nik: 3567654356782653, tanggal: '2020-08-20 15:43:11', status: 'persyaratan-kurang-verifikasi-online', 'no_rekening': null },
                    { id: 8, nik: 3567654356782662, tanggal: '2020-08-20 15:43:11', status: 'diproses-verifikasi-lapangan', 'no_rekening': null },
                    { id: 9, nik: 3567654356782664, tanggal: '2020-08-20 15:43:11', status: 'diproses-verifikasi-lapangan', 'no_rekening': null },
                    { id: 10, nik: 3567654356782674, tanggal: '2020-08-20 15:43:11', status: 'berhak-menerima-verifikasi-lapangan', 'no_rekening': null }

                ]
            },
            detail(row) {
                this.$router.push({ name: 'pemohon-pengajuan-detail', params: { id: row.id } })
            },
            debounceFilter: debounce(function () {
                this.filter = this.filterDebounced
                this.currentPage = 1
            }, 500),
        },
        watch: {
            filterDebounced () {
                this.debounceFilter()
            },
        },
    }
</script>