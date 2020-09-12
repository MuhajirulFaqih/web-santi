<template>
	<b-modal ref="modalUpdateStatus"
            title-tag="h4"
			hide-footer
			header-bg-variant="white"
			title="Update status"
            modal-class="pl-2 pr-2"
            body-class="pl-4 pr-4">
		<div>
            <b-form @submit.prevent="submitForm" class="form-horizontal">
                <b-row class="mt-4">
                    <b-col cols="12">
                        <b-form-radio-group
                            v-model="selected"
                            :options="options"
                        ></b-form-radio-group>
                    </b-col>
                </b-row>
                <b-row class="mt-3">
                    <b-col cols="12">
                        <b-button variant="primary" type="submit" class="float-right">Update status</b-button>
                    </b-col>
                </b-row>
            </b-form>
		</div>
	</b-modal>
</template>

<script>
	export default {
		name: 'modal-update-status',
		data () {
			return {
                selected: null,
                options: [
                    { value: '2', html: '<span class="circle danger"></span> Persyaratan kurang (Verifikasi online) ' },
                    { value: '3', html: '<span class="circle info"></span> Persyaratan tercukupi (Verifikasi online)' },
                    { value: '7', html: '<span class="circle default"></span> Menunggu penyaluran bantuan' },
                    { value: '8', html: '<span class="circle primary"></span> Selesai' },
                ]
            }
		},
		methods : {
			showModal () {
				this.$refs.modalUpdateStatus.show()
            },
            submitForm() {
				this.$refs.modalUpdateStatus.hide()
                this.$noty.success('Data status berhasil diupdate');
            },
		}
	}
</script>