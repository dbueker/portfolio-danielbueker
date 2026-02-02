<script setup>

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
}
</script>

<template>
    <button @click="scrollToTop" class="group h-10 relative overflow-hidden px-2 py-1 transition ease-in-out md:active:scale-[98%]">
        <span class="absolute inset-0 bg-on-surface-variant md:group-hover:bg-background translate-x-[-100%] md:group-hover:translate-x-0 transition duration-[0.25s] ease-in-out"></span>
        <span class="text-button relative z-10 text-on-surface-variant md:group-hover:text-on-background transition duration-[0.25s] ease-in-out">Back to top</span>
    </button>
</template>