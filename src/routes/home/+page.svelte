<script lang="ts">
	import { AppShell } from '@skeletonlabs/skeleton';
	import Sidebar from '../../components/Sidebar.svelte';
	import type { PageData, ActionData } from './$types';
	export let data: PageData;
	const teamsFromUser = data.userInTeam

	

	const teams = [
		{
			id: '121313-32434434-34343434-3434344',
			gender: 'm',
			ageClass: 'A',
			saison: '20/21'
		},
		{ id: '1276313-3267434-3434874-343344', gender: 'w', ageClass: 'B', saison: '20/21' },

		{ id: '1213sd13-32f4df434-34af34-34bcb34', gender: 'g', ageClass: 'E', saison: '21/21' },

		{ id: '1213dd3-3243fd434-34af3434-343bc4', gender: 'm', ageClass: 'Z', saison: '21/22' }
	];
</script>

<AppShell slotSidebarLeft="bg-surface-500/5 w-0 lg:w-64">
	<svelte:fragment slot="sidebarLeft">
		<select class="select">
			<option>--Select a Team--</option>
			{#each teams as Team}
				<option value={Team.id}>{Team.gender}{Team.ageClass} {Team.saison}</option>
			{/each}
		</select>
		<Sidebar />
	</svelte:fragment>
</AppShell>
