<script>
	import {data} from "./stores"; 
	import { quartInOut, cubicIn, quartOut } from 'svelte/easing';
	import { fade } from 'svelte/transition';
  import { colors } from "./stores";

  function grow(node, { delay = 0, duration = 500 }) {
    const w = parseInt(getComputedStyle(node).width);
    return {
      delay,
      duration,
      css: t => {
        const easedY = quartInOut(t);
        const easedX = cubicIn(t);
        return `
          transform: scaleY(${easedY});
          width: ${easedX * w};
        `
      }
    };
	}
	
	function shrink(node, { delay = 0, duration = 200 }) {
    const w = parseInt(getComputedStyle(node).width);
    return {
      delay,
      duration,
      css: (t) => {
        const easedY = cubicIn(t);
        return `
          transform: scaleY(${easedY});
        `
      }
    };
  }
	
</script>

<style lang="scss">
	.col-wrapper {
		display: flex;
		flex-direction: row;
		justify-content: center;

		list-style-type: none;
		padding: 10vw;
		height: calc(100%);
	}
	
</style>

<ul class="col-wrapper">
	{#each [...$data.groups] as col, i (col.val)}
		<li 
			style={`
				background-color:${$colors[col.val]};
				width:${(col.tweets.length / $data.totalCount) * 100}%;`}
			in:grow="{{delay: i * 50}}"
			out:shrink="{{delay: i * 20}}"
		/>
	{/each}
</ul>
