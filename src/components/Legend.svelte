<script>
  import { percentNegative, hideData } from "./stores"; 
	import { quartInOut } from 'svelte/easing';
  
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

    &.showLegend p {
      padding-top: 0;

      @include portrait {
        padding-top: 10px;
        padding-left: 0;
      }
    }

		p {
			position: absolute;
			top: $dist;
      left: 0;
      background-color: white;
      padding: 0 10px;
      padding-top: 30px;
      transition: padding-top 0.6s cubic-bezier(0.77, 0, 0.175, 1);
      font-weight: 500;
      
      @include portrait {
        top: 0;
        padding: 10px 0;
        padding-left: 30px;
        left: $dist;
        transition: padding-left 0.6s cubic-bezier(0.77, 0, 0.175, 1);
      }

			&#positive {
				right: 0;
        left: auto;
        transition-delay: 0.3s;

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
        transition-delay: 0.15s;

        @include portrait {
          top: var(--offset);
          left: $dist;
          transform: translateY(-50%);
        }
      }
    }
	}
	
</style>

<div class="legend" class:showLegend={!$hideData}>
	<p id="negative">negative</p>
	<p id="neutral" style="--offset: {$percentNegative}%">neutral</p>
	<p id="positive">positive</p>
</div>