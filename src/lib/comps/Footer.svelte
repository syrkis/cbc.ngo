<!-- Footer.svelte -->
<script>
    export let socials = {
      facebook: "https://www.facebook.com/centroclima/",
      instagram: "https://www.instagram.com/centroclima/",
      twitter: "https://twitter.com/centroclima",
      youtube: "https://www.youtube.com/channel/UC4QX6Z2Q4X6X6Z2Q4X6X6Z2Q",
      linkedin: "https://www.linkedin.com/company/centroclima/",
    };
  </script>
  
  <footer class="fixed-footer">
    <div class="social-links">
      {#each Object.entries(socials) as [social, link]}
      <!--font awesome icons for brands-->
        <a href={link} target="_blank" rel="noopener noreferrer">
            <i class="fab fa-{social}"></i>
        </a>
      {/each}
    </div>
  </footer>
  
  <style>
    .copyright {
        text-align: center;
        width: 100%;
        position: absolute;
    }
    .fixed-footer {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      color: #A3CC59;
      display: flex;
      justify-content: space-between;
      padding: 10px 20px;
      align-items: center;
    }

    .social-links {
      display: flex;
    }
  
    .social-links a {
      font-size: 18px;
      margin-right: 10px;
       color: #A3CC59;
    }
  
  </style>
  