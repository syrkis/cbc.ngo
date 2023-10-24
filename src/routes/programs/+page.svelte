<script>
  let programs = [
    {
      title: "Program 1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, amet? Inventore beatae saepe vel a necessitatibus cumque, possimus sunt nesciunt sapiente numquam cum, aperiam sit magnam laudantium, assumenda ipsa animi?"
    },
    {
      title: "Program 2",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, amet? Inventore beatae saepe vel a necessitatibus cumque, possimus sunt nesciunt sapiente numquam cum, aperiam sit magnam laudantium, assumenda ipsa animi?"
    },
    {
      title: "Program 3",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, amet? Inventore beatae saepe vel a necessitatibus cumque, possimus sunt nesciunt sapiente numquam cum, aperiam sit magnam laudantium, assumenda ipsa animi?"
    },
    {
      title: "Program 4",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, amet? Inventore beatae saepe vel a necessitatibus cumque, possimus sunt nesciunt sapiente numquam cum, aperiam sit magnam laudantium, assumenda ipsa animi?"
    },
  ]
</script>

<div>
  <div class="header">
      ————
    <h2>
      Programs
    </h2>
    <span>
      Our programs are designed to help you get the most out of your time with us.
    </span>
  </div>
  <div>
  </div>
  <div class="programs-grid">
    {#each programs as program}
      <div class="program">
        <h3>{program.title}</h3>
        <p>{program.description}</p>
      </div>
    {/each}
  </div>
</div>

<style>

  h3 {
    text-transform: uppercase;
    font-size: 2em;
    text-align: center;
  }

  .program {
    padding: 5vh 2vw;
    font-size: 1.5em;
    text-align: justify;
    text-align-last: center;
  }

.programs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

@media (max-width: 600px) {
  .programs-grid {
    grid-template-columns: 1fr; 
  }
}

@media (min-width: 600px) and (max-width: 1000px) {
  .programs-grid {
    grid-template-columns: 1fr 1fr;
  }
} 

@media (min-width: 1000px) {
  .programs-grid {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}
h2{
  font-size: 4em;
  text-transform: uppercase;
}
.header {
  background-color: var(--green);
  text-align: center;
}

  div{
    background-color: var(--green);
    color: white;
  }
</style>