<script>
  import {query, fetchData, hideData} from "./stores"; 

  let ref;

  const handleSubmit = (event) => {
    if (event.key === "Enter") {
      fetchData($query);
      ref.blur();
    }
  }

  const handleChange = (event) => {
    hideData.set(true);
  }

  const focusInput = (event) => {
    if (ref == document.activeElement) 
      return;

    var listen = /^[A-z0-9]+$/i;
    var key = String.fromCharCode( event.keyCode );
    if (key.match(listen)) {
      query.set("");
      ref.focus();
      hideData.set(true);
    }
  }
</script>

<style type="scss">
  input {
    font-family: $font-stack;
  }
</style>

<svelte:window on:keydown={focusInput}/>

<input 
  bind:value={$query} 
  name="query" 
  id="query" 
  placeholder="hashtag"
  bind:this={ref}
  on:keyup|preventDefault={handleSubmit}
  on:input={handleChange}
  type="search">