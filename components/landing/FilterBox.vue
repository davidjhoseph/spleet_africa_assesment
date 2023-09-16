<template>
    <div class="flex items-center justify-between p-6 bg-white rounded-xl">
        <div class="flex items-center pr-3 space-x-2 border-r-2 border-gray-50 text-gray-20">
            <IconsSearch class="w-5 h-5"/>
            <input class="py-2 font-light text-[16px] border-0 placeholder:text-gray-20 focus:outline-0 focus:ring-0 placeholder:font-light placeholder:text-[16px]" placeholder="Search for an event"/>
        </div>
        <select class="px-4 font-light focus:outline-0 text-[16px] focus:ring-0 text-gray-20">
            <option value="" disabled selected hidden>Categories</option>
            <option>Hello</option>
            <option>Hello</option>
            <option>Hello</option>
        </select>
        <BaseButton class="ml-5">Search</BaseButton>
    </div>
</template>