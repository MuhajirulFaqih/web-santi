<template>
	<b-modal ref="modalResetPassword"
            title-tag="h4"
			hide-footer
			header-bg-variant="white"
			title="Reset password"
            modal-class="pl-2 pr-2">
		<div>
            <b-form @submit.prevent="submitForm" class="form-horizontal">
                <b-row class="mt-3">
                    <b-col cols="12" class="text-center">
                        Password akan di reset ke password default
                    </b-col>
                </b-row>
                <b-row class="mt-3">
                    <b-col cols="12" class="text-center">
                        <b-button variant="primary" type="submit"> Reset password</b-button>
                        <b-button variant="default" class="ml-2" type="button" @click="$refs.modalResetPassword.hide()"> Batal</b-button>
                    </b-col>
                </b-row>
            </b-form>
		</div>
	</b-modal>
</template>

<script>
    export default {
        name: 'modal-reset-password',
		data () {
			return {
                id: null,
            }
		},
		methods : {
			showModal (id) {
                this.id = id
				this.$refs.modalResetPassword.show()
            },
            submitForm() {
                this.$refs.modalResetPassword.hide()
                this.$noty.success('Data password berhasil direset');
            },
		}
	}
</script>