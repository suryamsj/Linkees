<script>
  // Image
  import profile from "./assets/profile.jpg";
  import website from "./assets/cover/website.png";
  import github from "./assets/cover/github.png";
  import linkedin from "./assets/cover/linkedin.jpg";
  import instagram from "./assets/cover/instagram.png";
  import youtube from "./assets/cover/youtube.jpg";
  import telegram from "./assets/cover/telegram.png";
  import trakteer from "./assets/cover/trakteer.png";

  // Component
  import Cards from "./lib/Cards.svelte";
</script>

<section class="py-5">
  <div class="container">
    <div class="row text-center">
      <img class="profile-img" src={profile} alt="Foto Profile" />
      <h1 class="title">Muhammad Surya J</h1>
      <p class="sub-title">sit dolor amet ipsum</p>
    </div>
    <div class="row">
      <div class="col-lg-4">
        <Cards
          title="Website"
          url="#"
          description="Lihat project saya"
          image={website}
        />
      </div>
      <div class="col-lg-4">
        <Cards
          title="Github"
          url="#"
          description="@suryamsj | Project open source"
          image={github}
        />
      </div>
      <div class="col-lg-4">
        <Cards
          title="Instagram"
          url="#"
          description="@suryaaamsj"
          image={instagram}
        />
      </div>
      <div class="col-lg-4">
        <Cards
          title="Linkedin"
          url="#"
          description="Lihat profile saya"
          image={linkedin}
        />
      </div>
      <div class="col-lg-4">
        <Cards
          title="Youtube"
          url="#"
          description="Saya juga sering membuat vidio tutorial"
          image={youtube}
        />
      </div>
      <div class="col-lg-4">
        <Cards
          title="Telegram"
          url="#"
          description="@suryaaamsj | Chat dengan saya"
          image={telegram}
        />
      </div>
      <div class="col-lg-4">
        <Cards
          title="Trakteer"
          url="#"
          description="Trakteer saya sebuah Teh Online"
          image={trakteer}
        />
      </div>
    </div>
  </div>
</section>
