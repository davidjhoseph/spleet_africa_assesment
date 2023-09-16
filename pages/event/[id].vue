<template>
    <div class="lg:px-12 md:px-10">
        <div class="h-[300px] flex items-center justify-center" v-if="loading">
            <div role="status">
                <svg aria-hidden="true" class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                </svg>
                <span class="sr-only">Loading...</span>
            </div>
        </div>
        <template v-else>
            <div class="h-[500px] md:rounded-lg overflow-clip">
                <img :src="event.imageUrl" class="object-cover w-full h-full">
            </div>
            <div class="px-4 mt-12 md:px-0 md:flex md:space-x-10 lg:space-x-12">
                <div class="flex-1">
                    <div class="text-xl font-semibold">{{event.title}}</div>
                    <div class="mt-4">
                        <div class="flex items-center space-x-4">
                            <div class="flex items-center space-x-1">
                                <IconsCalendar class="w-4 h-4 text-purple-20" />
                                <div class="font-light text-[16px]">{{dConvert(event.date)}}</div>
                            </div>
                            <div class="flex items-center space-x-1">
                                <IconsTime class="w-4 h-4 text-purple-20" />
                                <div class="font-light text-[16px]">{{ tConvert(event.time) }}</div>
                            </div>
                        </div>
                        <div class="flex items-center mt-2 space-x-1">
                            <IconsLocation class="w-4 h-4 text-purple-20" />
                            <div class="font-light text-[16px]">{{event.address}}</div>
                        </div>
                        <div class="flex items-center mt-2 space-x-1">
                            <IconsUser class="w-4 h-4 text-purple-20" />
                            <div class="font-light text-[16px]">{{event.organizer.name}}</div>
                        </div>
                    </div>
                    <div class="font-semibold text-[16px] mt-10">Event description</div>
                    <div class="font-light text-[16px]">{{ event.description }}</div>
                    <div class="font-semibold text-[16px] mt-12">Tickets Pricing</div>
                    <div class="flex items-center mt-4 space-x-16">
                        <div>
                            <div class="text-[20px]">Single</div>
                            <div class="mt-2 text-[16px] font-semibold text-purple-20" v-if="event.price !== 0">{{currencyString}}</div>
                            <div class="mt-2 text-[16px] font-semibold text-purple-20" v-else>FREE</div>
                        </div>
                        <div v-show="event.price !== 0">
                            <div class="text-[20px]">Pair</div>
                            <div class="mt-2 text-[16px] font-semibold text-purple-20">{{currencyString}}</div>
                        </div>
                    </div>
                    <BaseButton class="mt-10">Buy now</BaseButton>
                </div>
                <div class="mt-12 md:w-1/3 md:mt-0">
                    <div class="font-semibold text-[16px]">Contact organizers</div>
                    <div class="flex items-center mt-4 space-x-5">
                        <a :href="`mailto:${event.organizer.email}`">
                            <img src="@/assets/icons/email.svg" alt="">
                        </a>
                        <a :href="event.organizer.twitterUrl">
                            <img src="@/assets/icons/twitter.svg" alt="">
                        </a>
                        <a :href="event.organizer.instagram">
                            <img src="@/assets/icons/instagram.svg" alt="">
                        </a>
                    </div>
                    <div class="font-semibold text-[16px] mt-12 mb-6">Directions</div>
                    <EventGoogleMap :data="{lat: event.lat, long: event.long}"/>
                </div>
            </div>
        </template>
        
    </div>
</template>
<script setup>
import { useMainStore } from '@/store'
import { tConvert, dConvert } from '@/helpers/general'

const store = useMainStore();
const event = computed(() => store.getSingleEvent);
const { currencyString } = useUtils(event.value.price)
const route = useRoute();
    onMounted(() => {
        store.fetchEventById(route.params.id);
    })
const loading = computed(() => store.loading);
</script>