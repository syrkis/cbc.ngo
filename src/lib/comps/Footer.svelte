<div class="footer">
  <div class="column">
    <div class='address-details'>
      <h4>Address:</h4>
      <p>123 Main Street</p>
      <p>Cityville, Country</p>
    </div>
  </div>

  <div class="column">
    <div class='contact-details'>
      <h4>Contact Us:</h4>
      <p>Email: info@example.com</p>
      <p>Phone: +1 (123) 456-7890</p>
    </div>
  </div>

  <div class="column">
    <div class='social-media'>
      <h4>Follow Us:</h4>
      <a href='#'>Facebook</a>
      <a href='#'>Twitter</a>
      <a href='#'>Instagram</a>
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

<style>

.footer {
  height: 70vh;
  /*margin-top: calc(var(--nav-height) * 2); */
  width: 100%;
  color: white;
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

  a {
    color: inherit;
  }
</style>