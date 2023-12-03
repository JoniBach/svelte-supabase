<script>
	import handleUsers, { mountUser } from '$lib/api/user';
	import Auth from '$lib/components/forms/Auth.svelte';
	import { onMount } from 'svelte';

	let user = handleUsers.user;

	onMount(async () => {
		mountUser();
	});
</script>

{#if $user}
	<button on:click={() => handleUsers.signOut()}> sign out </button>
	<slot />
{:else}
	<Auth />
{/if}
