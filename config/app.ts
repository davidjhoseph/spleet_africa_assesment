import axios from 'axios';

export const BASE_URL = 'https://rendezvous-events.onrender.com';


axios.defaults.baseURL = BASE_URL;
export const api = axios;

export const ENDPOINTS = {
	GET_EVENTS: '/events',
	GET_EVENT_BY_ID: (eventId: string | number) => `events/${eventId}`
}
