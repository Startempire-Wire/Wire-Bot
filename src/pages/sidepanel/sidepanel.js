import '../../styles/app.css';
import Sidepanel from './Sidepanel.svelte';

console.log('Initializing sidepanel...');

const app = new Sidepanel({
  target: document.getElementById('app')
});

console.log('Sidepanel app created:', app);
console.log('DOM element:', document.getElementById('app'));

export default app; 