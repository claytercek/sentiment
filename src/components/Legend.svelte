<script>
	import {percentNegative} from "./stores"; 
</script>

<style lang="scss">
	.legend {
		position: absolute;
    left: 10vw;
    right: 10vw;
		bottom: calc(10vw - 30px);
		background-color: white;
    height: 30px;
    color: $main-color;

    @include portrait {
      writing-mode: vertical-rl;
      left: auto;
      height: auto;
      right: calc(10vw - 10px);
      bottom: 10vw;
      top: 10vw;
      width: 30px;
    }

		p {
			position: absolute;
			bottom: 0;
      left: 0;
      
      @include portrait {
        left: auto;
        bottom: auto;
        top: 0;
      }

			&#positive {
				right: 0;
        left: auto;

        @include portrait {
          right: auto;
          top: auto;
          bottom: 0;
        }
      }
      
      &#neutral {
        transform: translateX(-50%);
        left: var(--offset);

        @include portrait {
          left: auto;
          top: var(--offset);
          transform: translateY(-50%);
        }
      }
		}
	}
	
</style>

<div class="legend">
	<p id="negative">negative</p>
	<p id="neutral" style="--offset: {$percentNegative}%">neutral</p>
	<p id="positive">positive</p>
</div>