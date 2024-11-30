<script>
  import '../../styles/app.css';
  
  let isPanelOpen = false;

  async function toggleSidePanel() {
    try {
      const window = await chrome.windows.getCurrent();
      await chrome.sidePanel.setOptions({ enabled: true });
      
      if (!isPanelOpen) {
        await chrome.sidePanel.open({ windowId: window.id });
      } else {
        await chrome.sidePanel.setOptions({ enabled: false });
      }
      isPanelOpen = !isPanelOpen;
    } catch (err) {
      console.error('Failed to toggle side panel:', err);
    }
  }
</script>

<main class="w-80 h-96 bg-white dark:bg-gray-800 p-4">
  <button 
    class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    on:click={toggleSidePanel}
  >
    {isPanelOpen ? 'Close' : 'Open'} Side Panel
  </button>
</main>

<style lang="postcss">
  /* Component-specific styles here */
</style> 