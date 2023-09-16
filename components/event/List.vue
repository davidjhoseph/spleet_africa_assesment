<template>
    <div class="my-12">
        <div class="flex items-center justify-between">
            <div class="text-[32px]">Trending events</div>
            <button class="flex items-center space-x-1">
                <div class="text-purple">View all trending events</div>
                <IconsArrowCurve class="w-4 h-4 text-purple"/>
            </button>
        </div>
        <div class="grid gap-4 mt-12 md:grid-cols-2 lg:grid-cols-3">
            <Event v-for="(d) in 3" :key="d" />
        </div>
    </div>
</template>