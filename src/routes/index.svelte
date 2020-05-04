<script>
	import Search from "../components/Search.svelte"
	import Column from "../components/Column.svelte"

  import {data} from "../components/stores"; 
</script>

<style lang="scss">
	.col-wrapper {
		display: flex;
		flex-direction: row;

		list-style-type: none;
		padding: 0;
	}
	
</style>

<Search />
<ul class="col-wrapper">
	{#each [...$data.groups] as col}
		<Column tweets={col.tweets} val={col.val}/>
	{/each}
</ul>
