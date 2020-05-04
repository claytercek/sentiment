<script>
  import {query, fetchData} from "./stores"; 

  const handleSubmit = (event) => {
    if (event.key === "Enter") {
      fetchData($query);
    }
  }
</script>

<style type="scss">
</style>

<input 
  bind:value={$query} 
  type="text" 
  name="query" 
  id="query" 
  placeholder="hashtag"
  on:keyup|preventDefault={handleSubmit}>