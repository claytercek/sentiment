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
  textarea {
    font-family: $font-stack;
    border: none;
    position: fixed;
    max-width: 80vw;
    top: 2vw;
    left: 6vw;
    font-size: 10vw;
    font-weight: 700 !important;
    z-index: 100;
    background-color: transparent;
    mix-blend-mode: overlay;
    resize:none;
  }
</style>

<svelte:window on:keydown={focusInput}/>

<textarea 
  bind:value={$query} 
  name="query" 
  id="query" 
  placeholder="hashtag"
  bind:this={ref}
  on:keydown={handleSubmit}
  on:input={handleChange}
  type="search" />