<template>
     <b-container fluid class="web gradient p-0">
        <b-navbar>
            <b-navbar-nav>
                <b-nav-item>
                    <div class="info-header">
                        <div class="logo">
                            <b-img :src="require('@/assets/img/logo.png')"></b-img>
                        </div>
                        <div class="description">
                            <div>PEMERINTAH KABUPATEN BOJONEGORO</div>
                            <div>BAGIAN KESEJAHTERAAN RAKYAT</div>
                        </div>
                    </div>
                </b-nav-item>
            </b-navbar-nav>
            <b-navbar-nav class="ml-auto">
                <b-button class="btn-login" @click="$router.push('/login')">Masuk</b-button>
            </b-navbar-nav>
        </b-navbar>
        <!-- Header section -->
        <b-container fluid>
            <b-row class="welcome-header bg-web">
                <b-col cols="12" lg="7" class="top-element">
                    <h1 class="header">SI Santi</h1>
                    <h5 class="sub-header">Sistem Informasi Santunan Kematian</h5>
                    <p>Mengajukan santunan kematian kini lebih efektif dan efisien karena dapat dilakukan secara online.</p>
                    <b-button @click="$router.push({ name: 'register' })" class="btn-cta">Daftar sekarang <eva-icon name="paper-plane-outline"></eva-icon></b-button>
                </b-col>
                <b-col cols="12" lg="5" class="top-element">
                    <b-img :src="require('@/assets/img/bupati.png')" fluid></b-img>
                </b-col>
                <div class="shape">
                    <div class="big-rectangle"></div>
                    <div class="rectangle"></div>
                    <div class="big-circle"></div>
                    <div class="circle"></div>
                </div>
            </b-row>
        </b-container>
        <!-- About section -->
        <b-container fluid class="about-section">
            <b-row>
                <b-col cols="12" lg="6">
                    <div class="box-card">
                        <b-img :src="require('@/assets/img/about-illustration-gradient.png')" fluid></b-img>
                    </div>
                </b-col>
                <b-col cols="12" lg="6">
                    <h1 class="header">Tentang</h1>
                    <p>
                        SI SANTI (Sistem Informasi Santunan Kematian) adalah sistem informasi pengajuan santunan kematian secara online untuk memudahkan warga bojonegoro dalam pengurusan administrasi serta dapat memotong birokrasi yang panjang guna mewujudkan pelayanan publik yang adil, mudah serta transparan.
                    </p>
                </b-col>
            </b-row>
        </b-container>
        <b-container fluid class="p-0 term-section">
            <b-container>
                <b-row>
                    <b-col cols="12" lg="6">
                        <h1 class="header">Syarat dan ketentuan</h1>
                        <ul>
                            <li>
                                <eva-icon name="checkmark-square-outline"></eva-icon> Upload Surat Keterangan Kematian
                            </li>
                            <li>
                                <eva-icon name="checkmark-square-outline"></eva-icon> Upload Surat Keterangan Tidak Mampu
                            </li>
                            <li>
                                <eva-icon name="checkmark-square-outline"></eva-icon> Upload Surat Keterangan Ahli Waris
                            </li>
                            <li>
                                <eva-icon name="checkmark-square-outline"></eva-icon> Upload foto KTP/KK/Akta Almarhum
                            </li>
                            <li>
                                <eva-icon name="checkmark-square-outline"></eva-icon> Upload foto KTP/KK/Akta Ahli Waris
                            </li>
                            <li>
                                <eva-icon name="checkmark-square-outline"></eva-icon> Upload foto rumah
                            </li>
                        </ul>
                    </b-col>
                    <b-col cols="12" lg="6" class="p-0">
                        <b-img :src="require('@/assets/img/term-illustration-gradient.png')" fluid></b-img>
                    </b-col>
                </b-row>
            </b-container>
            <div class="shape">
                <div class="circle"></div>
                <div class="rectangle"></div>
            </div>
        </b-container>
        <b-container fluid class="flow-section">
            <b-row>
                <b-col cols="12" lg="12" class="text-center mb-5">
                    <h1 class="header">Alur Mekanisme Pengajuan</h1>
                </b-col>
                <b-col cols="12" lg="4">
                    <div class="flow-box">
                        <div class="flow-header warning">
                            <eva-icon name="browser-outline"></eva-icon>
                        </div>
                        <div class="flow-number">1</div>
                        <div class="flow-body">
                            <h3 class="header">Pendaftaran</h3>
                            <p>Pemohon melakukan pendaftaran melalui situs web.</p>
                        </div>
                    </div>
                </b-col>
                <b-col cols="12" lg="4">
                    <div class="flow-box">
                        <div class="flow-header danger">
                            <eva-icon name="cloud-upload-outline"></eva-icon>
                        </div>
                        <div class="flow-number">2</div>
                        <div class="flow-body">
                            <h3 class="header">Upload persyaratan</h3>
                            <p>Upload berkas persyaratan yang dibutuhkan.</p>
                        </div>
                    </div>
                </b-col>
                <b-col cols="12" lg="4">
                    <div class="flow-box">
                        <div class="flow-header info">
                            <eva-icon name="checkmark-circle-outline"></eva-icon>
                        </div>
                        <div class="flow-number">3</div>
                        <div class="flow-body">
                            <h3 class="header">Verifikasi</h3>
                            <p>Petugas akan melakukan verifikasi berkas yang di upload.</p>
                        </div>
                    </div>
                </b-col>
                <b-col cols="12" lg="4">
                    <div class="flow-box">
                        <div class="flow-header default">
                            <eva-icon name="checkmark-circle-2-outline"></eva-icon>
                        </div>
                        <div class="flow-number">4</div>
                        <div class="flow-body">
                            <h3 class="header">Verifikasi lapangan</h3>
                            <p>Petugas akan melakukan verifikasi ke lokasi pemohon.</p>
                        </div>
                    </div>
                </b-col>
                <b-col cols="12" lg="4">
                    <div class="flow-box">
                        <div class="flow-header primary">
                            <eva-icon name="credit-card-outline"></eva-icon>
                        </div>
                        <div class="flow-number">5</div>
                        <div class="flow-body">
                            <h3 class="header">Penyaluran</h3>
                            <p>Jika sesuai dengan kriteria maka dana santunan akan dikirimkan.</p>
                        </div>
                    </div>
                </b-col>
            </b-row>
        </b-container>
        <b-container fluid class="footer-section">
            <h1 class="header text-white">Hubungi Kami</h1>
            <div class="contact">
                <div class="contact-group">
                    <div class="icon-contact">
                        <eva-icon name="facebook"></eva-icon>
                    </div>
                    <span>Lorem ipsum</span>
                </div>
                <div class="contact-group">
                    <div class="icon-contact">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50.327" class="eva" height="50.327" viewBox="0 0 50.327 50.327"><path d="M42.789,39.313A24.947,24.947,0,0,0,3.539,69.408L0,82.327l13.222-3.471a24.863,24.863,0,0,0,11.919,3.033h.011A24.78,24.78,0,0,0,42.789,39.313ZM25.152,77.687A20.691,20.691,0,0,1,14.592,74.8l-.753-.449L6,76.406l2.089-7.65-.494-.786a20.768,20.768,0,1,1,38.52-11.02A20.96,20.96,0,0,1,25.152,77.687ZM36.52,62.162c-.618-.315-3.685-1.82-4.258-2.022s-.989-.315-1.4.315-1.606,2.022-1.977,2.449-.73.472-1.348.157c-3.662-1.831-6.066-3.269-8.481-7.414-.64-1.1.64-1.022,1.831-3.4a1.155,1.155,0,0,0-.056-1.09c-.157-.315-1.4-3.381-1.921-4.628-.506-1.213-1.022-1.045-1.4-1.067-.359-.022-.775-.022-1.191-.022a2.308,2.308,0,0,0-1.663.775,7,7,0,0,0-2.179,5.2c0,3.067,2.235,6.032,2.539,6.448s4.392,6.706,10.649,9.414c3.954,1.708,5.5,1.854,7.482,1.561,1.2-.18,3.685-1.505,4.2-2.966A5.212,5.212,0,0,0,37.7,62.9C37.554,62.623,37.138,62.466,36.52,62.162Z" transform="translate(0 -32)" fill="#52bd76"/></svg>
                    </div>
                    <span>0811-1111-1111</span>
                </div>
                <div class="contact-group">
                    <div class="icon-contact">
                        <eva-icon name="email-outline"></eva-icon>
                    </div>
                    <span>loremipsum@gmail.com</span>
                </div>
            </div>
            <center class="footer-copy">
                &copy; Bojonegoro | 2020
            </center>
        </b-container>
     </b-container>
</template>

<script>
export default {
    name: 'web-2',
}
</script>