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
			color="#00f500"
			flat
			@click="refreshApp"
		>
			Update
		</v-btn>
	</v-snackbar>
</template>
<script>
export default {
	data () {
		return {
			refreshing: false,
			registration: null,
      showSnack: false
		}
	},
	methods: {
		showRefreshUI (e) {
      this.registration = e.detail;
      this.showSnack = true;
    },
    refreshApp () {
      this.showSnack = false;
      if (!this.registration || !this.registration.waiting) { return; }
      this.registration.waiting.postMessage('skipWaiting');
    }
	},
	created () {
    document.addEventListener('swUpdated', this.showRefreshUI, { once: true });
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (this.refreshing) return;
      this.refreshing = true;
      window.location.reload()
    });
	}
}
</script>