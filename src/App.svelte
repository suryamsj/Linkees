<script>
  /*
   * If the image link is broken, you can upload the image in assets folder
   * Edit your link in link.json
   */

  // Photo
  import photo from "./assets/profile.jpg";

  // Component
  import Cards from "./lib/Cards.svelte";

  // JSON
  import data from "./data/link.json";

  // Data
  let Profiles = {
    nama: data.name,
    status: data.status,
    link: data.link,
  };
</script>

<section class="py-5">
  <div class="container">
    <div class="row text-center">
      <img class="profile-img" src={photo} alt="Foto Profile" />
      <h1 class="title">{Profiles.nama}</h1>
      <p class="sub-title">{Profiles.status}</p>
    </div>
    <div class="row">
      {#each Profiles.link as links}
        <div class="col-lg-4">
          <Cards
            title={links.title}
            url={links.url}
            description={links.description}
            image={links.image}
          />
        </div>
      {/each}
    </div>
  </div>
</section>
