<script>
  import { colors } from "./stores";
  export let tweets;
  export let val;

</script>

<style>
  li {
    width: 10px;
    overflow: hidden;
    min-height: 300px;
  }
</style>

<li style={`flex: ${tweets.length}; order: ${val}; background-color:${$colors[val]}`}>
</li>