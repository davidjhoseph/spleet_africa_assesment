import axios from "axios";
export default defineNuxtPlugin((nuxtApp) => {
//   const defaultUrl = "<https://localhost:5001>";

  let api = axios.create({
    baseURL: 'https://rendezvous-events.onrender.com',
    headers: {
      common: {},
    },
  });
return {
    provide: {
      api: api,
    },
  };
});