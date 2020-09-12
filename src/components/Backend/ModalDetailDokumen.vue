<template>
	<b-modal ref="modalDetailDokumen"
			title-tag="h4"
			size="lg"
			hide-footer
			header-bg-variant="white"
			title="Dokumen">
		<div>
			<h4>Nama dokumen</h4>
            <iframe src="" class="file-viewer" frameborder="0"></iframe>
		</div>
	</b-modal>
</template>

<script>
	export default {
		name: 'modal-detail-dokumen',
		data () {
			return {
				file: null
			}
		},
		methods : {
			showModal (file) {
                this.file = file
				this.$refs.modalDetailDokumen.show()
			}
		}
	}
</script>