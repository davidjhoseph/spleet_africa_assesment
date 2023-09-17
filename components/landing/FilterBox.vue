<template>
    <div class="bg-white rounded-xl">
        <div
            class="flex flex-col flex-wrap items-center justify-center p-6 space-y-4 sm:space-y-0 sm:flex-row sm:justify-between">
            <div class="flex items-center pr-3 space-x-2 sm:border-r-2 border-gray-50 text-gray-20">
                <IconsSearch class="w-5 h-5" />
                <input v-model="search"
                    class="py-2 font-light text-[16px] border-0 placeholder:text-gray-20 focus:outline-0 focus:ring-0 placeholder:font-light placeholder:text-[16px]"
                    placeholder="Search for an event" />
            </div>
            <select v-model="category" class="px-4 font-light focus:outline-0 text-[16px] focus:ring-0 text-gray-20">
                <option :value="null" disabled selected hidden>Categories</option>
                conference others summit musical fundraising fitness meetup others
                <option v-for="(c, i) in categories" :key="i" class="uppercase" :value="c">{{ c }}</option>
            </select>
            <BaseButton class="ml-5" @click="setFilter">Search</BaseButton>
        </div>
        <div class="flex justify-end px-4 pb-4" v-if="isFilterUp">
            <button class="text-sm text-purple" @click="clearFilter">Clear filter</button>
        </div>
    </div>
</template>
<script setup>
import { categories } from '@/helpers/general';
import { useMainStore } from '@/store';

const store = useMainStore();
const category = ref(null);
const search = ref('');
const setFilter = () => {
    store.setFilter({ category: category.value, search: search.value })
}

const isFilterUp = computed(() => store.filter.search.length || store.filter.category)

const clearFilter = () => {
    search.value = '';
    category.value = null;
    store.setFilter({ category: null, search: '' });
}

</script>