<script>
	import { data } from "./stores"; 
	import { quartInOut, cubicIn, quartOut } from 'svelte/easing';
	import { fade } from 'svelte/transition';
	import { colors } from "./stores";
	import Legend from "./Legend.svelte";

	let innerWidth, innerHeight;

  function grow(node, { delay = 0, duration = 500 }) {
		const percent = node.dataset.percent
		const w = percent * parseInt(getComputedStyle(node.parentElement).width);
		const h = percent * parseInt(getComputedStyle(node.parentElement).height);

		return {
			delay,
			duration,
			css: t => {
				const easedOffAxis = quartInOut(t);
				const easedMainAxis = cubicIn(t);

				if (innerWidth < innerHeight) { //portrait
					return `
						transform: scaleX(${easedOffAxis});
						height: ${easedMainAxis * h};
					`
				} else { // landscape
					return `
						transform: scaleY(${easedOffAxis});
						width: ${easedMainAxis * w};
					`
				}
			}
		};
	}
	
	function shrink(node, { delay = 0, duration = 200 }) {
    const w = parseInt(getComputedStyle(node).width);
    return {
      delay,
      duration,
      css: (t) => {
				const easedOffAxis = cubicIn(t);
				if (innerWidth < innerHeight) { //portrait
					return `transform: scaleX(${easedOffAxis});`
				} else { // landscape
					return `transform: scaleY(${easedOffAxis});`
				}
      }
    };
  }
	
</script>

<style lang="scss">
	div {
		padding: 10vw;
		height: 100%;
		position: relative;
	}

	.col-wrapper {
		display: flex;
		flex-direction: row;
		justify-content: center;

		list-style-type: none;
		height: 100%;

		@include portrait {
			flex-direction: column;

			li {
				width: 100%;
				height: auto;
			}
		}

		li {
			height: 100%;
		}
	}
</style>

<svelte:window bind:innerWidth={innerWidth} bind:innerHeight={innerHeight}/>

<div>
	<ul class="col-wrapper">
		{#each [...$data.groups] as col, i (col.val)}
			<li 
				style={`
					background-color:${$colors[col.val]};
					${innerWidth < innerHeight ? "height" : "width"}: ${(col.tweets.length / $data.totalCount) * 100}%;
				`}
				in:grow="{{delay: i * 50}}"
				out:shrink="{{delay: i * 20}}"
				data-percent={(col.tweets.length / $data.totalCount)}
			/>
		{/each}
	</ul>
	<Legend />
</div>