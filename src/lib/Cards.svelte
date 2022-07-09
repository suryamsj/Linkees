<script>
  // @ts-nocheck

  export let title, description, url, image;
</script>

<a href={url} target="_blank">
  <div class="card">
    <div class="card-body">
      <img src={image} alt="Cover" />
      <h5 class="card-title">{title}</h5>
      <p class="card-text">
        {description}
      </p>
    </div>
  </div>
</a>
