<script setup>
</script>

<template>
    <div>
    <div v-if="$route.path === '/'" class="px-6 py-8 gap-x-4 md:gap-x-10 flex justify-end mx-auto text-menu">
        <NuxtLink to="/" class="group relative overflow-hidden px-2 py-1 transition ease-in-out md:active:scale-[98%]">
            <span class="absolute inset-0 bg-surface-variant"></span>
            <span class="relative z-10 text-on-surface-variant">Home</span>
        </NuxtLink>
        <NuxtLink to="/about" class="group relative overflow-hidden px-2 py-1 transition ease-in-out md:active:scale-[98%]">
            <span class="absolute inset-0 bg-background md:group-hover:bg-surface-variant translate-x-[-100%] md:group-hover:translate-x-0 transition duration-[0.25s] ease-in-out"></span>
            <span class="relative z-10 text-on-background md:group-hover:text-on-surface-variant transition duration-[0.25s] ease-in-out">About</span>
        </NuxtLink>
        <a href="https://www.linkedin.com/in/danielbueker/" target="_blank" class="group relative overflow-hidden px-2 py-1 transition ease-in-out md:active:scale-[98%]">
            <span class="absolute inset-0 bg-background md:group-hover:bg-surface-variant translate-x-[-100%] md:group-hover:translate-x-0 transition duration-[0.25s] ease-in-out"></span>
            <span class="relative z-10 text-on-background md:group-hover:text-on-surface-variant transition duration-[0.25s] ease-in-out">LinkedIn ↗</span>
        </a>
    </div>

    <div v-else-if="$route.path === '/about'" class="px-6 py-8 gap-x-4 md:gap-x-10 flex justify-end mx-auto text-menu">
        <NuxtLink to="/" class="group relative overflow-hidden px-2 py-1 transition ease-in-out md:active:scale-[98%]">
            <span class="absolute inset-0 bg-background md:group-hover:bg-surface-variant translate-x-[-100%] md:group-hover:translate-x-0 transition duration-[0.25s] ease-in-out"></span>
            <span class="relative z-10 text-on-background md:group-hover:text-on-surface-variant transition duration-[0.25s] ease-in-out">Home</span>
        </NuxtLink>
        <NuxtLink to="/about" class="group relative overflow-hidden px-2 py-1 transition ease-in-out md:active:scale-[98%]">
            <span class="absolute inset-0 bg-surface-variant"></span>
            <span class="relative z-10 text-on-surface-variant">About</span>
        </NuxtLink>
        <a href="https://www.linkedin.com/in/danielbueker/" target="_blank" class="group relative overflow-hidden px-2 py-1 transition ease-in-out md:active:scale-[98%]">
            <span class="absolute inset-0 bg-background md:group-hover:bg-surface-variant translate-x-[-100%] md:group-hover:translate-x-0 transition duration-[0.25s] ease-in-out"></span>
            <span class="relative z-10 text-on-background md:group-hover:text-on-surface-variant transition duration-[0.25s] ease-in-out">LinkedIn ↗</span>
        </a>
    </div>

    <div v-else class="px-6 py-8 gap-x-4 md:gap-x-10 flex justify-end mx-auto text-menu">
        <NuxtLink to="/" class="group relative overflow-hidden px-2 py-1 transition ease-in-out md:active:scale-[98%]">
            <span class="absolute inset-0 bg-background md:group-hover:bg-surface-variant translate-x-[-100%] md:group-hover:translate-x-0 transition duration-[0.25s] ease-in-out"></span>
            <span class="relative z-10 text-on-background md:group-hover:text-on-surface-variant transition duration-[0.25s] ease-in-out">Home</span>
        </NuxtLink>
        <NuxtLink to="/about" class="group relative overflow-hidden px-2 py-1 transition ease-in-out md:active:scale-[98%]">
            <span class="absolute inset-0 bg-background md:group-hover:bg-surface-variant translate-x-[-100%] md:group-hover:translate-x-0 transition duration-[0.25s] ease-in-out"></span>
            <span class="relative z-10 text-on-background md:group-hover:text-on-surface-variant transition duration-[0.25s] ease-in-out">About</span>
        </NuxtLink>
        <a href="https://www.linkedin.com/in/danielbueker/" target="_blank" class="group relative overflow-hidden px-2 py-1 transition ease-in-out md:active:scale-[98%]">
            <span class="absolute inset-0 bg-background md:group-hover:bg-surface-variant translate-x-[-100%] md:group-hover:translate-x-0 transition duration-[0.25s] ease-in-out"></span>
            <span class="relative z-10 text-on-background md:group-hover:text-on-surface-variant transition duration-[0.25s] ease-in-out">LinkedIn ↗</span>
        </a>
    </div>
    </div>
</template>
