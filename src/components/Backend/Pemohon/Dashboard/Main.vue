<template>
    <div>
        <b-alert class="welcome-text" show><strong>Halo Author,</strong> Selamat datang di sistem informasi santunan kematian online</b-alert>
        <b-row>
            <b-col cols="12" lg="5">
                <div class="box">
                    <p>Untuk mengajukan santunan anda bisa masuk ke Menu Pengajuan lalu klik tombol Ajukan santuan. Atau anda bisa langsung klik tombol dibawah ini.</p>
                    <center><router-link to="/pemohon/pengajuan/ajukan" class="btn btn-primary mt-3">Ajukan santunan</router-link></center>
                </div>
            </b-col>
            <b-col cols="12" lg="7">
                <div class="box">
                    <div class="box-icon"><eva-icon name="book-outline"></eva-icon></div>
                    <center><h3>Pengajuan</h3></center>
                    <ul class="graphic-info">
                        <li>
                            <span>Semua</span>
                            <span class="info">4</span>
                        </li>
                        <li>
                            <span>Pengajuan diproses</span>
                            <span class="info warning">1</span>
                        </li>
                        <li>
                            <span>Selesai</span>
                            <span class="info primary">3</span>
                        </li>
                    </ul>
                </div>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    export default {
        name: 'pemohon-dashboard'
    }
</script>