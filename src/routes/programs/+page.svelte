<script>
  let programs = [
    {
      title: "Climate Politics",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, amet? Inventore beatae saepe ",
      logo: "/logo.svg"
    },
    {
      title: "Climate Studies",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, amet? Inventore beatae saepe ",
      logo: "/logo.svg"
    },
    {
      title: "Decarbonization",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, amet? Inventore beatae saepe ",
      logo: "/logo.svg"
    },
    {
      title: "Project Lab",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, amet? Inventore beatae saepe ",
      logo: "/logo.svg"
    },
    {
      title: "Analyzing Amazonia",
      description: "Our ongoing and openended data scientific exploration of the Amazon. The projects main intention is to be educational.",
      logo: "/logo.svg"
    },
  ]
</script>

<div class='container'>
  <div class="programs">
    <div class="programs-grid">
      {#each programs as program}
        <div class="program">
          <h3>{program.title}</h3>
          <p>{program.description}</p>
          <div class="logo">
            <img src={program.logo} alt="Center for Brazilian Climate logo">
          </div>
        </div>
      {/each}
    </div>
</div>

</div>

<style>

  .logo {
    width: 100%;
    max-width: 200px;
    margin: auto;
  }

  img {
    height: auto;
    margin: auto;
  }

.programs {
  padding: 20vh 0;
  width: 1200px;
  max-width: 95%;
  margin: auto;
}


.program {
  font-size: 1.5em;
  width: 100%;
  max-width: 500px;
  margin: auto;
}

h3 {
  font-size: 1.5em;
  margin-bottom: 10px; 
}

p {
  text-align: justify;
  text-align-last: center;
}

/* grid */
/* Grid */
.programs-grid {
  display: grid;
  gap: 15vh;
  grid-template-columns: 1fr 1fr;
}

@media (max-width: 1100px) {
  .programs-grid {
    grid-template-columns: 1fr;
  }
}

  .container{
    background-color: var(--green);
    color: white;
  }
</style>