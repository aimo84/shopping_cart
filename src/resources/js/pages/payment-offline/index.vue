<template>
    <div class="page-container">
        <router-view/>
    </div>
</template>

<script>
	import Loading from '@components/loading'
	export default {
		name: 'Payment-Offline',
		components: {
			'loading-element': Loading
		},
		data: () => ({
		})
	}
</script>
