import { writable } from 'svelte/store';

export const authStore = writable({
  isAuthenticated: false,
  user: null,
  membershipLevel: null,
  wpAuthToken: null
});

export const auth = {
  async initialize() {
    const stored = await chrome.storage.local.get(['auth']);
    if (stored.auth) {
      authStore.set(stored.auth);
    }
  },

  async login() {
    try {
      // Get WordPress OAuth token
      const token = await chrome.identity.getAuthToken({ 
        interactive: true,
        scopes: ['https://startempirewire.com/wp-json/']
      });

      // Validate with WordPress
      const response = await fetch('https://startempirewire.com/wp-json/startempire-wire-network/v1/auth/validate', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      const userData = await response.json();
      
      // Store auth data
      const authData = {
        isAuthenticated: true,
        user: userData.user,
        membershipLevel: userData.membership_level,
        wpAuthToken: token
      };

      await chrome.storage.local.set({ auth: authData });
      authStore.set(authData);

    } catch (error) {
      console.error('Auth error:', error);
      throw error;
    }
  },

  async logout() {
    await chrome.storage.local.remove(['auth']);
    authStore.set({
      isAuthenticated: false,
      user: null,
      membershipLevel: null,
      wpAuthToken: null
    });
  }
}; 