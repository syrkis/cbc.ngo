<!-- Footer.svelte -->
<script>
  import { page } from "$app/stores";
  let isTop = false;
  $: isTop = $page.route.id === "/";
  
  const contact = 'info@cbc.ngo';
  const address = [
    "Av. José Silva de Azevedo Neto",
    "200 Bloco 4, Sala 104", 
    "Barra da Tijuca, CEP: 22775-056", 
    "Rio de Janeiro – RJ – Brasil"
];
  const socialMediaLinks = {
      'facebook': '#',
      'twitter': '#',
      'linkedin': '#',
      'instagram': '#'
  };
  const currentYear = new Date().getFullYear();
</script>

{#if !isTop}
<div class='footer'>
  <div class="column">
    <div class='address-details'>
      <h4>Address:</h4>
      {#each address as line}
        <p>{line}</p>
      {/each}
    </div>
  </div>
  <div class="column">
    <div class='contact-details'>
      <h4>Contact Us:</h4>
      <p>Email: {contact}</p>
    </div>
  </div>
  <div class="column">
    <div class='social-media'>
      <h4>Follow Us:</h4>
      {#each Object.entries(socialMediaLinks) as [media, link]}
        <a href={link}>{media}</a>
      {/each}
    </div>
  </div>
  <div class="column">
    <div class='footer-navigation'>
      <h4>Navigation:</h4>
      <a href='/'>Home</a>
      <a href='/about'>About</a>
      <a href='/contact'>Contact</a>
      <a href='/our-team'>Our Team</a>
      <a href='/donate'>Donate</a>
    </div>
  </div>
</div>
{/if}

<style>
.footer {
  margin-top: 30vh;
  width: 100%;
  color: white;
  bottom: 0;
  font-family: sans-serif;
  background-color: black;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: 20px;
  box-sizing: border-box;
  align-items: start;
}

.column {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 20px;
}

.column h4 {
  margin-bottom: 10px;
}

.contact-details, .address-details, .social-media, .footer-navigation {
  margin-bottom: 15px;
}

.footer-navigation a, .social-media a {
  display: block;
  color: white;
  text-decoration: none;
  margin-bottom: 5px;
}

@media (max-width: 800px) {
  .footer {
    grid-template-columns: 1fr 1fr;
    padding: 20px;
    font-size: 1em;
  }
}


</style>
