<template>
    <b-container fluid>
        <header class="header">halo</header>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla distinctio temporibus vitae autem. Voluptas eaque doloremque cumque, iusto, cum eum, eos hic saepe accusamus dolores placeat. Ullam dicta minus praesentium.</p>
        <button class="btn btn-cta">Daftar sekarang <span data-eva="paper-plane-outline"></span></button>
        <button class="btn btn-login">Masuk</button>
        <button class="btn btn-primary">Kirim data</button>
        <button class="btn btn-info"><eva-icon name="edit-2-outline"></eva-icon></button>
        <button class="btn btn-warning"><eva-icon name="credit-card-outline"></eva-icon></button>
        <br/><br/>
        <input type="text" class="form-control" value="Lorem ipsum">
        <br/>
        <select name="" class="form-control" id="">
            <option value="">Data</option>
            <option value="">Data</option>
            <option value="">Data</option>
        </select>
        <br/>
        <b-form-checkbox
        id="checkbox-1"
        name="checkbox-1"
        value="accepted"
        unchecked-value="not_accepted"
        >
            I accept the terms and use
        </b-form-checkbox>
        <br/>
        <b-form-group label="Individual radios">
            <b-form-radio name="some-radios" value="A">Option A</b-form-radio>
            <b-form-radio name="some-radios" value="B">Option B</b-form-radio>
        </b-form-group>
        <br/>
         <b-form-file
            placeholder="Choose a file or drop it here..."
            drop-placeholder="Drop file here..."
        ></b-form-file>
        <br/><br/>
        <b-form-file
            class="picture"
            placeholder="Foto buku rekening"
        >
        </b-form-file>
        <br/>
        <br/>
        <br/>
        <div>
            <div class="d-block">
                <b-row>
                    <b-col cols="4">
                        <label>
                            Tampilkan
                            <select name="" class="form-control per-page" id="">
                                <option value="10">10</option>
                                <option value="50">50</option>
                                <option value="100">100</option>
                            </select>
                            Data
                        </label>
                    </b-col>
                    <b-col cols="4"></b-col>
                    <b-col cols="4">
                        <b-form-input
                            align="right"
                            v-model="filterDebounced"
                            placeholder="Cari nama pengirim, waktu..."/>
                    </b-col>
                </b-row>

                <div class="position-relative mt-4">
                    <b-table responsive
                        class="main-table"
                        ref="tabel"
                        :items="items"
                        :current-page="currentPage"
                        :per-page="perPage"
                        :filter="filter"
                        :sort-by.sync="sortBy"
                        :sort-desc.sync="sortDesc"
                        @row-clicked="detail">
                    </b-table>
                </div>

                <b-row>
                    <b-col cols="4">
                        Menampilkan {{ currentPage }} ke {{ perPage }} dari {{ totalRows }} data
                    </b-col>
                    <b-col cols="8">
                        <b-pagination
                            align="right"
                            :total-rows="totalRows"
                            v-model="currentPage"
                            :per-page="perPage" />
                    </b-col>
                </b-row>
            </div>
        </div>
        <br/>
        <ul class="menu">
            <li class="header">
                <a>SI Santi</a>
            </li>
            <li class="active">
                <router-link to="/" :class="$route.name == 'Dashboard' ? 'active' : ''">
                    <eva-icon name="pie-chart-outline"></eva-icon>
                    Dashboard
                </router-link>
            </li>
            <li>
                <router-link to="/" :class="$route.name == 'Dashboard' ? 'active' : ''">
                    <eva-icon name="book-outline"></eva-icon>
                    Pengajuan
                </router-link>
            </li>
            <li>
                <router-link to="/" :class="$route.name == 'Dashboard' ? 'active' : ''">
                    <eva-icon name="person-outline"></eva-icon>
                    Update profil
                </router-link>
            </li>
        </ul>
        <br/>
        <br/>
        <div class="col-md-3">
            <div class="infographic default">
                <h4>Pengajuan</h4>
                <span>Semua</span>
                <span class="total">90</span>
            </div>
        </div>
    </b-container>
</template>

<script>
export default {
    name: 'component',
    components: {

    },
    data () {
        return {
            totalRows: 100,
            perPage: 10,
            currentPage: 1,
            filter: '',
            filterDebounced: '',
            isBusy: false,
            sortBy: 'id',
            sortDesc: true,
            items: [
                { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
                { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
                {
                    age: 89,
                    first_name: 'Geneva',
                    last_name: 'Wilson',
                },
                {
                    age: 40,
                    first_name: 'Thor',
                    last_name: 'MacDonald'
                },
                { age: 29, first_name: 'Dick', last_name: 'Dunlap' }
            ]
        }
    },
    methods: {
        detail(record) {
            console.log(record.age);
        }
    }
}
</script>