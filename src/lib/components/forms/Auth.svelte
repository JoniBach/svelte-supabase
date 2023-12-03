<script>
	import user from '$lib/api/user';

	let value = '';
</script>

<input placeholder="email" bind:value />
<button on:click={() => user.signIn(value)}> submit </button>
