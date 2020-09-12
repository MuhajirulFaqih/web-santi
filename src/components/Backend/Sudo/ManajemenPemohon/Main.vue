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
                                tbody-tr-class="no-hover"
                                :busy.sync="isBusy"
                                :items="providerTable"
                                :fields="tableColumns"
                                :current-page="currentPage"
                                :per-page="perPage"
                                :filter="filter"
                                :sort-by.sync="sortBy"
                                :sort-desc.sync="sortDesc">
                                <template v-slot:cell(index)="data">
                                    {{ ((currentPage - 1) * perPage) + data.index + 1 }}
                                </template>
                                <template v-slot:cell(opsi)="data">
                                    <router-link :to="'manajemen-pemohon/edit/' + data.item.id" v-b-tooltip title="Edit data" class="btn btn-xs btn-info"><eva-icon name="edit-2-outline"></eva-icon></router-link>
                                    <a href="javascript:void(0);" @click="resetPassword(data.item.id)" v-b-tooltip title="Reset password" class="btn btn-xs btn-info"><eva-icon name="sync-outline"></eva-icon></a>
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
        <ModalResetPassword ref="modalResetPassword" />
    </div>
</template>
<script>
    import { debounce } from 'lodash'
    import spinner from 'vue-simple-spinner'
    import ModalResetPassword from '@/components/Backend/Sudo/ManajemenPemohon/Reset'
    export default {
        name: 'sudo-manajemen-pemohon',
        components: {
            spinner, ModalResetPassword
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
                    { key: 'nama', label: 'Nama', tdClass: 'main-text' },
                    { key: 'username', label: 'Username', tdClass: 'sub-text' },
                    { key: 'no_hp', label: 'No handphone', tdClass: 'description' },
                    { key: 'opsi', label: 'Opsi', tdClass: 'action' },
                ]
            }
        },
        computed: {
            firstRows() {
                let ceil = (this.currentPage * this.perPage) - this.perPage;
                return (ceil <= 0 ? 0 : ceil) + 1;
            }
        },
        methods: {
            providerTable() {
                return [
                    { id: 1, nama: 'Halo', username: 'halo', no_hp: '0856768765654' },
                    { id: 2, nama: 'Admin', username: 'admin', no_hp: '0856768765654' },
                    { id: 3, nama: 'Danu', username: 'danu', no_hp: '0856768765654' },
                    { id: 4, nama: 'Dani', username: 'dani', no_hp: '0856768765654' },
                ]
            },
            resetPassword(id) {
                this.$refs.modalResetPassword.showModal(id);
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