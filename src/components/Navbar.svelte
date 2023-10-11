<script lang="ts">
	import { signOut } from '@auth/sveltekit/client';
	import { AppBar } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';
</script>

<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
	<svelte:fragment slot="lead"
		><img
			class="h-8 aspect-auto"
			src="handball-analyser-low-resolution-logo-white-on-transparent-background.png"
			alt="Logo: Handball-Analyser"
		/></svelte:fragment
	>
	<svelte:fragment slot="trail">
		{#if $page.data.session}
			<a href="/home"
				><button on:click={() => signOut()} class="btn variant-filled">Logout</button></a
			>
		{:else}
			<a href="/auth/signin"><button class="btn variant-filled">Login</button></a>
		{/if}
	</svelte:fragment>
</AppBar>

<style lang="postcss">
</style>
