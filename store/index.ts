export const useMainStore = defineStore({
    id: 'main',
    state: () => {
        return {
            events: [],
        }
    },
    getters: {
        getEvents: (state) => state.events
    },
    actions: {
        async fetchEvents()  {
            const response = await fetch('https://rendezvous-events.onrender.com/events');
            console.log(response);
        },
    },
    persist: true
})