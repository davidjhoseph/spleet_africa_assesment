<template>
    <GoogleMap :api-key="config.public.google_api_key" style="width: 100%; height: 500px" :center="center" :zoom="15">
        <Marker :options="{ position: center }" />
    </GoogleMap>
</template>
  
<script setup lang="ts">
import { defineComponent } from "vue";
import { GoogleMap, Marker } from "vue3-google-map";
const props = defineProps({
    data: {
        type: Object as Proptype<{lat: number, long: number}>,
        required: true
    }
})
const center = { lat: +props.data.lat, lng: +props.data.long };
const config = useRuntimeConfig();
</script>