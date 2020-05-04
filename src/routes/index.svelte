<script>
	import Search from "../components/Search.svelte"
	import Column from "../components/Column.svelte"

  import {data} from "../components/stores"; 
</script>

<style>
</style>

<Search />
<div>
	{#each [...$data.groups] as col}
		<Column tweets={col.tweets} val={col.val} />
	{/each}
</div>
