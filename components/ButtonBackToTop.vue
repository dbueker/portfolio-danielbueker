<script setup>

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
}
</script>

<template>
    <button @click="scrollToTop" class="whitespace-nowrap min-w-[80px] py-4 text-button text-on-surface-variant md:hover:text-on-surface-variant/70 md:active:scale-[96%] transition ease-in-out duration-200">Scroll to top</button>
</template>