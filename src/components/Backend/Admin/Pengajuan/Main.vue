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
                                :tbody-tr-class="rowClass"
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
                                <template v-slot:cell(pemohon)="data">
                                    {{ data.item.namaPemohon }}
                                    <small class="d-lg-block">({{ data.item.nikPemohon }})</small>
                                </template>
                                <template v-slot:cell(status)="data">
                                    <span v-if="data.item.status == 'diproses-verifikasi-online'">
                                        <span class="circle warning"></span> Diproses (Verifikasi online) 
                                    </span>
                                    <span v-else-if="data.item.status == 'persyaratan-kurang-verifikasi-online'">
                                        <span class="circle danger"></span> Persyaratan kurang (Verifikasi online) 
                                    </span>
                                    <span v-else-if="data.item.status == 'diproses-verifikasi-lapangan'">
                                        <span class="circle warning"></span> Diproses (Verifikasi lapangan) 
                                    </span>
                                    <span v-else-if="data.item.status == 'berhak-menerima-verifikasi-lapangan'">
                                        <span class="circle info"></span> Berhak menerima (Verifikasi lapangan) 
                                    </span>
                                    <span v-else-if="data.item.status == 'tidak-berhak-menerima-verifikasi-lapangan'">
                                        <span class="circle danger"></span> Tidak berhak menerima (Verifikasi lapangan) 
                                    </span>
                                    <span v-else-if="data.item.status == 'menunggu-penyaluran'">
                                        <span class="circle"></span> Menunggu penyaluran bantuan 
                                    </span>
                                    <span v-else><span class="circle primary"></span> Selesai </span>
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
        name: 'admin-pengajuan',
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
                    { key: 'pemohon', label: 'Pemohon', tdClass: 'main-text' },
                    { key: 'nik', label: 'NIK almarhum', tdClass: 'description' },
                    { 
                        key: 'tanggal',
                        label: 'Tanggal pengajuan', 
                        formatter: v => { return format(parseISO(v), 'd MMMM yyyy', {locale: id}) },
                        tdClass: 'sub-text'
                    },
                    { key: 'status', label: 'Status pengajuan', tdClass: 'description' },
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
                    { id: 1, nikPemohon: 3567654356782651, namaPemohon: 'Author', nik: 3567654356782654, tanggal: '2020-08-20 15:43:11', status: 'diproses-verifikasi-online', 'no_rekening': null, unread: true },
                    { id: 2, nikPemohon: 3567654356782651, namaPemohon: 'Author', nik: 3567654356782653, tanggal: '2020-08-20 15:43:11', status: 'persyaratan-kurang-verifikasi-online', 'no_rekening': null, unread: true },
                    { id: 3, nikPemohon: 3567654356782651, namaPemohon: 'Author', nik: 3567654356782662, tanggal: '2020-08-20 15:43:11', status: 'diproses-verifikasi-lapangan', 'no_rekening': null },
                    { id: 4, nikPemohon: 3567654356782651, namaPemohon: 'Author', nik: 3567654356782664, tanggal: '2020-08-20 15:43:11', status: 'diproses-verifikasi-lapangan', 'no_rekening': null },
                    { id: 5, nikPemohon: 3567654356782651, namaPemohon: 'Author', nik: 3567654356782674, tanggal: '2020-08-20 15:43:11', status: 'berhak-menerima-verifikasi-lapangan', 'no_rekening': null },
                    { id: 6,nikPemohon: 3567654356782651, namaPemohon: 'Author', nik: 3567654356782654, tanggal: '2020-08-20 15:43:11', status: 'diproses-verifikasi-online', 'no_rekening': null },
                    { id: 7, nikPemohon: 3567654356782651, namaPemohon: 'Author', nik: 3567654356782653, tanggal: '2020-08-20 15:43:11', status: 'persyaratan-kurang-verifikasi-online', 'no_rekening': null },
                    { id: 8, nikPemohon: 3567654356782651, namaPemohon: 'Author', nik: 3567654356782662, tanggal: '2020-08-20 15:43:11', status: 'diproses-verifikasi-lapangan', 'no_rekening': null },
                    { id: 9, nikPemohon: 3567654356782651, namaPemohon: 'Author', nik: 3567654356782664, tanggal: '2020-08-20 15:43:11', status: 'diproses-verifikasi-lapangan', 'no_rekening': null },
                    { id: 10, nikPemohon: 3567654356782651, namaPemohon: 'Author', nik: 3567654356782674, tanggal: '2020-08-20 15:43:11', status: 'berhak-menerima-verifikasi-lapangan', 'no_rekening': null }

                ]
            },
            detail(row) {
                this.$router.push({ name: 'admin-pengajuan-detail', params: { id: row.id } })
            },
            rowClass (item, type) {
                if (type === 'row') {
                    return item.unread == true ? 'unread' : ''
                }
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