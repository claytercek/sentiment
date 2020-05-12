<script>
	import {percentNegative} from "./stores"; 
</script>

<style lang="scss">
	.legend {
		position: absolute;
		left: 10vw;
		bottom: calc(10vw - 30px);
		width: calc(100% - 20vw);
		background-color: white;
    height: 30px;
    color: $main-color;

		p {
			position: absolute;
			bottom: 0;
			left: 0;

			&#positive {
				right: 0;
				left: auto;
      }
      
      &#neutral {
        transform: translateX(-50%);
      }
		}
	}
	
</style>

<div class="legend">
	<p id="negative">negative</p>
	<p id="neutral" style={`left:${$percentNegative}%;`}>neutral</p>
	<p id="positive">positive</p>
</div>