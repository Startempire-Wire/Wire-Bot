<script>
  import '../../styles/app.css';
  import { onMount } from 'svelte';

  async function closeSidePanel() {
    try {
      await chrome.sidePanel.setOptions({ enabled: false });
    } catch (err) {
      console.error('Failed to close side panel:', err);
    }
  }

  onMount(() => {
    console.log('Sidepanel mounted');
  });
</script>

<div class="app p-4">
  <button 
    class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    on:click={closeSidePanel}
  >
    Close Panel
  </button>

  <hr class="divider my-4" />

  <p class="title text-xl font-semibold text-center">
    🌐<br>Startempire Wire Network is Ready!
  </p>
  
  <p class="subtitle text-gray-600 dark:text-gray-300 text-center mt-2">
    Startempire Wire Network is your destination for connecting with the Startempire Wire community, 
    discovering new opportunities / resources, and sharing your own!
  </p>

  <hr class="divider my-4" />

  <div class="p-6 max-w-sm mx-auto bg-white dark:bg-gray-700 rounded-xl shadow-lg" 
       id="messageContainer">
  </div>

  <hr class="divider my-4" />

  <p class="title text-xl font-semibold text-center">
    🚀<br>Get Started
  </p>
</div> 