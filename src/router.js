import Vue from 'vue'
import Router from 'vue-router'
import Web from './components/Frontend/Web'
import WebGradient from './components/Frontend/WebGradient'
import Login from './components/Frontend/Login'
import LoginPanel from './components/Frontend/LoginPanel'
import Register from './components/Frontend/Register'
import Component from './components/Frontend/Component'
import Frame from './components/Backend/Frame'

import SudoMenu from './components/Backend/Sudo/Menu'
import SudoDashboard from './components/Backend/Sudo/Dashboard/Main'
import SudoPengajuan from './components/Backend/Sudo/Pengajuan/Main'
import SudoPengajuanDetail from './components/Backend/Sudo/Pengajuan/Detail'
import SudoManajemenUser from './components/Backend/Sudo/ManajemenUser/Main'
import SudoManajemenUserTambah from './components/Backend/Sudo/ManajemenUser/Tambah'
import SudoManajemenUserEdit from './components/Backend/Sudo/ManajemenUser/Edit'
import SudoManajemenPemohon from './components/Backend/Sudo/ManajemenPemohon/Main'
import SudoManajemenPemohonEdit from './components/Backend/Sudo/ManajemenPemohon/Edit'
import SudoProfil from './components/Backend/Sudo/Profil/Main'
import SudoUbahPassword from './components/Backend/Sudo/UbahPassword/Main'
import SudoPengaturan from './components/Backend/Sudo/Pengaturan/Main'

import AdminMenu from './components/Backend/Admin/Menu'
import AdminDashboard from './components/Backend/Admin/Dashboard/Main'
import AdminPengajuan from './components/Backend/Admin/Pengajuan/Main'
import AdminPengajuanDetail from './components/Backend/Admin/Pengajuan/Detail'
import AdminProfil from './components/Backend/Admin/Profil/Main'
import AdminUbahPassword from './components/Backend/Admin/UbahPassword/Main'

import PemohonMenu from './components/Backend/Pemohon/Menu'
import PemohonDashboard from './components/Backend/Pemohon/Dashboard/Main'
import PemohonPengajuan from './components/Backend/Pemohon/Pengajuan/Main'
import PemohonPengajuanAjukan from './components/Backend/Pemohon/Pengajuan/Ajukan'
import PemohonPengajuanEdit from './components/Backend/Pemohon/Pengajuan/Edit'
import PemohonPengajuanDetail from './components/Backend/Pemohon/Pengajuan/Detail'
import PemohonPengajuanEditRekening from './components/Backend/Pemohon/Pengajuan/EditRekening'
import PemohonProfil from './components/Backend/Pemohon/Profil/Main'
import PemohonUbahPassword from './components/Backend/Pemohon/UbahPassword/Main'

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            name: 'web',
            path: '/',
            component: Web,
            meta: {
                title: { parent: 'Beranda', child: null },
            }
        },
        {
            name: 'web-gradient',
            path: '/web',
            component: WebGradient,
            meta: {
                title: { parent: 'Beranda', child: null },
            }
        },
        {
            name: 'login',
            path: '/login',
            component: Login,
            meta: {
                title: { parent: 'Login', child: null },
            }
        },
        {
            name: 'auth',
            path: '/auth',
            component: LoginPanel,
            meta: {
                title: { parent: 'Login', child: null },
            }
        },
        {
            name: 'register',
            path: '/register',
            component: Register,
            meta: {
                title: { parent: 'Mendaftar', child: null },
            }
        },
        {
            path: '/component',
            component: Component,
            meta: {
                title: { parent: 'Komponen', child: null },
            }
        },
        // Route sudo
        {
            path: '/sudo',
            component: Frame,
            children: [
                {
                    name: 'sudo-dashboard',
                    path: 'dashboard',
                    meta: {
                        title: { parent: 'Dashboard', child: null },
                    },
                    components: {
                        menu: SudoMenu,
                        content: SudoDashboard,
                    }
                },
                {
                    name: 'sudo-pengajuan',
                    path: 'pengajuan',
                    meta: {
                        title: { 
                            parent: 'Pengajuan', child: null,
                        },
                    },
                    components: {
                        menu: SudoMenu,
                        content: SudoPengajuan,
                    }
                },
                {
                    name: 'sudo-pengajuan-detail',
                    path: 'pengajuan/detail/:id',
                    meta: {
                        title: { parent: 'Pengajuan', child: 'Detail pengajuan' },
                    },
                    components: {
                        menu: SudoMenu,
                        content: SudoPengajuanDetail,
                    }
                },
                {
                    name: 'sudo-manajemen-user',
                    path: 'manajemen-user',
                    meta: {
                        title: { 
                            parent: 'Manajemen user', child: null,
                            buttonUrl: '/sudo/manajemen-user/tambah', buttonText: 'Tambah user',  
                        },
                    },
                    components: {
                        menu: SudoMenu,
                        content: SudoManajemenUser,
                    }
                },
                {
                    name: 'sudo-manajemen-user-tambah',
                    path: 'manajemen-user/tambah',
                    meta: {
                        title: { parent: 'Manajemen user', child: 'Tambah user' },
                    },
                    components: {
                        menu: SudoMenu,
                        content: SudoManajemenUserTambah,
                    }
                },
                {
                    name: 'sudo-manajemen-user-edit',
                    path: 'manajemen-user/edit/:id',
                    meta: {
                        title: { parent: 'Manajemen user', child: 'Edit user' },
                    },
                    components: {
                        menu: SudoMenu,
                        content: SudoManajemenUserEdit,
                    }
                },
                {
                    name: 'sudo-manajemen-pemohon',
                    path: 'manajemen-pemohon',
                    meta: {
                        title: { 
                            parent: 'Pemohon', child: null,
                        },
                    },
                    components: {
                        menu: SudoMenu,
                        content: SudoManajemenPemohon,
                    }
                },
                {
                    name: 'sudo-manajemen-pemohon-edit',
                    path: 'manajemen-pemohon/edit/:id',
                    meta: {
                        title: { parent: 'Pemohon', child: 'Edit user' },
                    },
                    components: {
                        menu: SudoMenu,
                        content: SudoManajemenPemohonEdit,
                    }
                },
                {
                    name: 'sudo-profil',
                    path: 'profil',
                    meta: {
                        title: { parent: 'Update profil', child: null },
                    },
                    components: {
                        menu: SudoMenu,
                        content: SudoProfil,
                    }
                },
                {
                    name: 'sudo-ubah-password',
                    path: 'ubah-password',
                    meta: {
                        title: { parent: 'Ubah password', child: null },
                    },
                    components: {
                        menu: SudoMenu,
                        content: SudoUbahPassword,
                    }
                },
                {
                    name: 'sudo-pengaturan',
                    path: 'pengaturan',
                    meta: {
                        title: { parent: 'Pengaturan', child: null },
                    },
                    components: {
                        menu: SudoMenu,
                        content: SudoPengaturan,
                    }
                },
            ]
        },
        // Route admin
        {
            path: '/admin',
            component: Frame,
            children: [
                {
                    name: 'admin-dashboard',
                    path: 'dashboard',
                    meta: {
                        title: { parent: 'Dashboard', child: null },
                    },
                    components: {
                        menu: AdminMenu,
                        content: AdminDashboard,
                    }
                },
                {
                    name: 'admin-pengajuan',
                    path: 'pengajuan',
                    meta: {
                        title: { 
                            parent: 'Pengajuan', child: null,
                        },
                    },
                    components: {
                        menu: AdminMenu,
                        content: AdminPengajuan,
                    }
                },
                {
                    name: 'admin-pengajuan-detail',
                    path: 'pengajuan/detail/:id',
                    meta: {
                        title: { parent: 'Pengajuan', child: 'Detail pengajuan' },
                    },
                    components: {
                        menu: AdminMenu,
                        content: AdminPengajuanDetail,
                    }
                },
                {
                    name: 'admin-profil',
                    path: 'profil',
                    meta: {
                        title: { parent: 'Update profil', child: null },
                    },
                    components: {
                        menu: AdminMenu,
                        content: AdminProfil,
                    }
                },
                {
                    name: 'admin-ubah-password',
                    path: 'ubah-password',
                    meta: {
                        title: { parent: 'Ubah password', child: null },
                    },
                    components: {
                        menu: AdminMenu,
                        content: AdminUbahPassword,
                    }
                },
            ]
        },
        // Route pemohon
        {
            path: '/pemohon',
            component: Frame,
            children: [
                {
                    name: 'pemohon-dashboard',
                    path: 'dashboard',
                    meta: {
                        title: { parent: 'Dashboard', child: null },
                    },
                    components: {
                        menu: PemohonMenu,
                        content: PemohonDashboard,
                    }
                },
                {
                    name: 'pemohon-pengajuan',
                    path: 'pengajuan',
                    meta: {
                        title: { 
                            parent: 'Pengajuan', child: null,
                            buttonUrl: '/pemohon/pengajuan/ajukan', buttonText: 'Ajukan santunan', 
                        },
                    },
                    components: {
                        menu: PemohonMenu,
                        content: PemohonPengajuan,
                    }
                },
                {
                    name: 'pemohon-pengajuan-ajukan',
                    path: 'pengajuan/ajukan',
                    meta: {
                        title: { parent: 'Pengajuan', child: 'Ajukan santunan' },
                    },
                    components: {
                        menu: PemohonMenu,
                        content: PemohonPengajuanAjukan,
                    }
                },
                {
                    name: 'pemohon-pengajuan-edit',
                    path: 'pengajuan/edit/:id',
                    meta: {
                        title: { parent: 'Pengajuan', child: 'Edit pengajuan' },
                    },
                    components: {
                        menu: PemohonMenu,
                        content: PemohonPengajuanEdit,
                    }
                },
                {
                    name: 'pemohon-pengajuan-detail',
                    path: 'pengajuan/detail/:id',
                    meta: {
                        title: { parent: 'Pengajuan', child: 'Detail pengajuan' },
                    },
                    components: {
                        menu: PemohonMenu,
                        content: PemohonPengajuanDetail,
                    }
                },
                {
                    name: 'pemohon-pengajuan-edit-rekening',
                    path: 'pengajuan/rekening/:id',
                    meta: {
                        title: { parent: 'Pengajuan', child: 'Edit data rekening' },
                    },
                    components: {
                        menu: PemohonMenu,
                        content: PemohonPengajuanEditRekening,
                    }
                },
                {
                    name: 'pemohon-profil',
                    path: 'profil',
                    meta: {
                        title: { parent: 'Update profil', child: null },
                    },
                    components: {
                        menu: PemohonMenu,
                        content: PemohonProfil,
                    }
                },
                {
                    name: 'pemohon-ubah-password',
                    path: 'ubah-password',
                    meta: {
                        title: { parent: 'Ubah password', child: null },
                    },
                    components: {
                        menu: PemohonMenu,
                        content: PemohonUbahPassword,
                    }
                },
            ]
        },
    ]
});

router.beforeEach((to, from, next) => {
    document.title = (to.meta.title.child == null ? '' : to.meta.title.child + ' | ' ) + to.meta.title.parent + ' | Santi'
    next()
})

export default router