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
          url="https://suryamsj.netlify.app/"
          description="Lihat project saya"
          image={website}
        />
      </div>
      <div class="col-lg-4">
        <Cards
          title="Github"
          url="https://github.com/suryamsj"
          description="@suryamsj | Project open source"
          image={github}
        />
      </div>
      <div class="col-lg-4">
        <Cards
          title="Instagram"
          url="https://www.instagram.com/suryaaamsj/"
          description="@suryaaamsj"
          image={instagram}
        />
      </div>
      <div class="col-lg-4">
        <Cards
          title="Linkedin"
          url="https://www.linkedin.com/in/suryamsj/"
          description="Lihat profile saya"
          image={linkedin}
        />
      </div>
      <div class="col-lg-4">
        <Cards
          title="Youtube"
          url="https://www.youtube.com/channel/UCyLXAx2zineeQ9VzgqjFqJA"
          description="Saya juga sering membuat vidio tutorial"
          image={youtube}
        />
      </div>
      <div class="col-lg-4">
        <Cards
          title="Telegram"
          url="https://telegram.me/suryaamsj"
          description="@suryaaamsj | Chat dengan saya"
          image={telegram}
        />
      </div>
      <div class="col-lg-4">
        <Cards
          title="Trakteer"
          url="https://trakteer.id/suryamsj"
          description="Trakteer saya sebuah Teh Online"
          image={trakteer}
        />
      </div>
    </div>
  </div>
</section>
