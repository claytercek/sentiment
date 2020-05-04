<script>
  import { colors, data } from "./stores";
  export let tweets;
  export let val;
</script>

<style>
  li {

    transform: scaleY(0%);
    width: 10px;
    overflow: hidden;
    height: 100%;
    animation: slidein 0.5s forwards;
    margin: 0;
    border: none;
  }

  @keyframes slidein {
  from {
    transform: scaleY(0%);
  }

  to {
    transform: scaleY(100%);
  }
}
</style>

<li style={
   `flex: ${tweets.length};
    order: ${val}; 
    background-color:${$colors[val]};
    animation-delay:${(val - $data.range.min) * 0.1}s`
  }>
</li>