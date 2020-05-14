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
  div {
    position: fixed;
    max-width: 75vw;
    top: 2vw;
    left: 6vw;
    font-size: 10vw;
    font-weight: 600 !important;
    z-index: 100;
    color: $main-color;
  }

  textarea {
    font-size: inherit;
    font-family: $font-stack;
    font-weight: inherit;
    border: none;
    background-color: transparent;
    resize:none;
    width: 100%;

    &::placeholder {
      opacity: 0.6;
      color: inherit;
    }
    &:focus {
      border: none;
      box-shadow: none;
      outline: none;
    }

    &:invalid {
      border: none !important;
      box-shadow: none;
      outline: none;

      ~ span {
        display: block;
      }
    }
  }

  span {
    position: absolute;
    display: none;

    &:nth-of-type(1) {
      top: 1.6em;
      opacity: 0.5;
    }
    
    &:nth-of-type(2) {
      top: 2.8em;
      opacity: 0.35;
    }
  }
</style>

<svelte:window on:keydown={focusInput}/>

<div>
  <textarea 
    bind:value={$query} 
    name="query" 
    id="query" 
    placeholder='Type any phrase'
    bind:this={ref}
    on:keydown={handleSubmit}
    on:input={handleChange}
    minlength="1"
    type="search"
    enterkeyhint="go"
    required
    autocomplete="off" 
    autocorrect="off" 
    autocapitalize="off" 
    spellcheck="false" />

  <span>or "#hashtag"</span>
  <span>or "@username"</span>
</div>