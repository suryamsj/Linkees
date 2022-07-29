<script>
  // Image | If image link is broken, you can upload this image instead of the broken image link in the source.
  import profile from "./assets/profile.jpg";
  // import website from "./assets/cover/website.png";
  // import github from "./assets/cover/github.png";
  // import linkedin from "./assets/cover/linkedin.jpg";
  // import instagram from "./assets/cover/instagram.png";
  // import youtube from "./assets/cover/youtube.jpg";
  // import telegram from "./assets/cover/telegram.png";
  // import trakteer from "./assets/cover/trakteer.png";

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
      <img class="profile-img" src={profile} alt="Foto Profile" />
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
