<script>
  import { percentNegative, hideData, data } from "./stores"; 
	import { quartInOut, cubicIn, cubicInOut } from 'svelte/easing';
  export let portrait;
  let w, h;

  $: showNegative = 90 < ($percentNegative / 100) *  (portrait ? h : w);
  $: showPositive = 90 < (1 - ($percentNegative / 100)) *  ( portrait ? h : w);
  $: display = !$hideData && $data.totalCount > 3;

  function slideIn(node, { delay = 0, duration = 600 }) {
    return {
      delay,
      duration,
      css: (t, u) => {
				const easedOffAxis = cubicInOut(u);
				if (portrait) {
          return `padding-left: ${30 * easedOffAxis}px;`
				} else { // landscape
					return `padding-top: ${30 * easedOffAxis}px;`
				}
      }
    };
  }

</script>

<style lang="scss">

  $dist: 12px;
  $lineOffset: 20px;

	.legend {
		position: absolute;
    left: 10vw;
    right: 10vw;
		bottom: calc(10vw - 30px);
    background-color: white;
    height: 30px;
    color: $main-color;
    overflow: hidden;
    
    &::before {
      content: "";
      position: absolute;
      left:0;
      top: $lineOffset;
      height: 2px;
      background-color: $main-color;
      right: 0;
      transform: scaleX(0);
      transform-origin: 100% 50%;
      transition: transform 0.7s cubic-bezier(0.895, 0.03, 0.685, 0.22);
    }

    &.showLegend::before {
      transform-origin: 0% 50%; 
      transform: scaleX(1);
    }

    @include portrait {
      writing-mode: vertical-rl;
      left: auto;
      height: auto;
      right: calc(10vw - 10px);
      bottom: 10vw;
      top: 10vw;
      width: 30px;

      &::before {
        left: $lineOffset - 3px;
        height: auto;
        top: 0;
        right: auto;
        bottom: 0;
        width: 2px;
        transform: scaleY(0);
        transform-origin: 50% 100%;
      }

      &.showLegend::before {
        transform-origin: 50% 0%; 
        transform: scaleY(1);
      }
    }

		p {
			position: absolute;
			top: $dist;
      left: 0;
      background-color: white;
      padding: 0 10px;
      font-weight: 500;
      
      @include portrait {
        top: 0;
        padding: 10px 0;
        left: $dist;
      }

			&#positive {
				right: 0;
        left: auto;

        @include portrait {
          right: auto;
          top: auto;
          bottom: 0;
          left: $dist;
        }
      }
      
      &#neutral {
        transform: translateX(-50%);
        left: var(--offset);

        @include portrait {
          top: var(--offset);
          left: $dist;
          transform: translateY(-50%);
        }
      }
    }
	}
	
</style>

<div class="legend" class:showLegend={display} bind:clientWidth={w} bind:clientHeight={h}>
  {#if display}
    {#if showNegative}
      <p transition:slideIn id="negative">negative</p>
    {/if}
    <p transition:slideIn="{{delay: 150}}" id="neutral" style="--offset: {$percentNegative}%">neutral</p>
    {#if showPositive}
      <p transition:slideIn="{{delay: 300}}" id="positive">positive</p>
    {/if}
  {/if}
</div>