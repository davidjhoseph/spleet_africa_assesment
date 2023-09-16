import { IEvent, Filter } from './../types/index';
import { api, BASE_URL, ENDPOINTS } from "../config/app";


export const useMainStore = defineStore({
    id: 'main',
    state: () => {
        return {
            events: [],
            singleEvent: {} as IEvent,
            loading: false,
            filter: {
                category: null,
                search: ''
            } as Filter
        }
    },
    getters: {
        getEvents: (state) => {
            if(!state.filter.search.length && !state.filter.category) return state.events;
            if(state.filter.search.length){
                return state.events.filter((e: IEvent) => {
                    return e.title.toLowerCase().includes(state.filter.search.toLowerCase()) ||  e.description.toLowerCase().includes(state.filter.search.toLowerCase());
                });
            }
            if(state.filter.category){
                return state.events.filter((e: IEvent) => {
                    return e.category.toLowerCase() === state.filter.category?.toLowerCase();
                });
            }
        },
        getSingleEvent: (state) => {
            return state.singleEvent;
        }
    },
    actions: {
        async fetchEvents()  {
            this.loading = true;
            try {
				const eventResponse = await api.get(ENDPOINTS.GET_EVENTS);
				const res = eventResponse.data.data;
                this.events = res.allEvents;
			} catch (e: any) {
				console.log(e);
				throw e;
			} finally {
                this.loading = false;
            }
        },
        async fetchEventById(id: string)  {
            this.loading = true;
            try {
				const eventResponse = await api.get(ENDPOINTS.GET_EVENT_BY_ID(id));
				const res = eventResponse.data.data;
                this.singleEvent = res.event;
			} catch (e: any) {
				console.log(e);
				throw e;
			} finally {
                this.loading = false;
            }
        },
        setFilter(filter: { category: string | null, search: string})  {
            this.filter = {
                category: filter.category ? filter.category : null,
                search: filter.search
            }
        },
    },
    persist: true
})