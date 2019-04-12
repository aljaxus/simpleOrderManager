<template>
	<v-snackbar
		v-model="showSnack"
		:timeout="0"
		bottom
		left
		class="snack"
	>
		New version is out!
		<v-spacer />
		<v-btn
      :loading="loadingSnack"
      :readonly="loadingSnack"
			color="#00f500"
			flat
			@click="refreshApp"
		>
			Update
		</v-btn>
	</v-snackbar>
</template>
<script>
import { setTimeout } from 'timers';

export default {
	data () {
		return {
			refreshing: false,
			registration: null,
      showSnack: false,
      loadingSnack: false,
		}
	},
	methods: {
		showRefreshUI (e) {
      this.registration = e.detail;
      this.showSnack = true;
    },
    refreshApp () {
      this.loadingSnack = true
      setTimeout(() => {
        this.showSnack = false
        if (!this.registration || !this.registration.waiting) return false
        this.registration.waiting.postMessage('skipWaiting')
      }, 550)
    }
	},
	created () {
    document.addEventListener('swUpdated', this.showRefreshUI, { once: true });
    
    if (navigator.serviceWorker) {
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        if (this.refreshing) return;
        this.refreshing = true;
        window.location.reload()
      })
    }
	}
}
</script>