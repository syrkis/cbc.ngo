<script>
  import { fade } from 'svelte/transition';
  import { createEventDispatcher } from 'svelte';
  import { language, dictionary, setLang } from '$lib/stores';
  import { tick } from 'svelte';
  import { page } from '$app/stores';

  let dispatch = createEventDispatcher();

  let inputMessage = "";
  let messages = [$dictionary['lila_intro']];
  let isBotTyping = false;


  function closeBot() {
    dispatch('close');
  }
  
  async function handleSendMessage() {
    const trimmedMessage = inputMessage.trim();
    if (trimmedMessage !== "") {
        messages = [...messages, `You: ${trimmedMessage}`];
        messages = [...messages, "Lila: "]; // Bot's message will be filled gradually
        inputMessage = "";
        isBotTyping = true;
        await tick(); // Forces the UI to update and scroll to bottom
        let botMessageCharacters = `You said "${trimmedMessage}"`.split('');
        for (let character of botMessageCharacters) {
            messages[messages.length - 1] += character;
            await new Promise(resolve => setTimeout(resolve, 100)); // Delay for typing effect
        }
        isBotTyping = false;
    }
}
</script>

<div class="blur-overlay" in:fade={{duration: 500}} out:fade={{duration: 500}}></div>
<div class="bot-container" in:fade={{duration: 500}} out:fade={{duration: 500}}>
  <div class="chat-area">
    {#each messages as message (message)}
      <p class="chat-message">{message}</p>
    {/each}
  </div>
  <div class="message-box">
    {#if $page.route.id != '/lila'}
      <button class="close-button" on:click={closeBot}>X</button>
    {/if}
    <input class="message-input"
           bind:value={inputMessage} 
           on:keydown={(e) => e.key === 'Enter' && handleSendMessage()} 
           placeholder="Ask away...."
           disabled={isBotTyping} />
  </div>
  <span class="disclaimer">
    Lila is a work in progress. She is not yet able to answer your questions.
  </span>
</div>


<style>

  .disclaimer {
    font-size: 0.75rem;
    color: white;
    margin: 1rem 0;
  }

.blur-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(20px);
    transition: backdrop-filter 0.5s ease;
    background-color: rgba(0, 0, 0, 0.05);
    z-index: 10;
}

.bot-container {
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   padding: 2rem;
   color: white;
   cursor: pointer;
   z-index: 20;
}

.chat-message {
    font-size: 1.5em;
    line-height: 2em;
    margin: 0.5rem 0;
    color: white; 
   
  }
  
  .chat-area {
   width: 800px;
   max-width: 95%;
   margin: auto;
   overflow: auto;
   box-sizing: border-box;
   padding: 2rem 20px;
}

 .message-box {
    display: flex;
    justify-content: space-between;
  }

  .close-button {
    margin-right: 10px;
  }
  
  .message-input {
    flex-grow: 1;
    margin: auto;
    padding: 10px;
    width: 400px;
    max-width: 80%;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
    border: none;
    color: white;
    font-size: 1.25rem;
    overflow: auto;
    outline: none; /* Add this line to remove the default browser outline */
    outline: none;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.4); /* Add a soft glow when input is focused */
}

/* Add these blocks to change the placeholder text color and remove default browser focus ring */
.message-input::placeholder {
    color: white;
    opacity: 0.7; /* Adjust to your liking */
}

  .bot-container {
    /* Other attributes */
    margin:0;
    padding:0;
  }

  .close-button {
    position: absolute;
    top: 10px;
    left: 10px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: none;
    background-color: white; 
    color: #a3CC59;
    font-size: large;
    font-weight: bold;
    cursor: pointer;
}





</style>
