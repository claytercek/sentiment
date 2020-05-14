<script>
  let title = "sympathize"
  let description = "Visualize current public sentiment of any topic by analyzing recent tweets."
  let url = "https://sympathize.herokuapp.com"
  let image = url + "/card.png"
  let keywords = [
    "twitter",
    "sentiment",
    "analysis",
    "datavis"
  ]

</script>
<svelte:head>
  <title>{title}</title>
  <meta name="description" content="{description}" />
  <meta name="keywords" content="{keywords.join(", ")}"/>

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="{url}">
  <meta property="og:title" content="{title}">
  <meta property="og:description" content="{description}">
  <meta property="og:image" content="{image}">

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image">
  <meta property="twitter:url" content="{url}">
  <meta property="twitter:title" content="{title}">
  <meta property="twitter:description" content="{description}">
  <meta property="twitter:image" content="{image}">
</svelte:head>