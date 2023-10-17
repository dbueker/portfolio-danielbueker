<script setup>
import { ref, onBeforeUnmount, onMounted } from "vue";

//Shadow on scroll
const scrolled = ref(false);
let open = ref(false);
function onScroll() {
    if (open.value===false) {
        if (document.documentElement.scrollTop > 30) {
        scrolled.value = true;
        } 
        else {
        scrolled.value = false;
        }
    }
}

onMounted(() => {
    window.addEventListener('scroll', onScroll)
})

onBeforeUnmount(() => {
    window.removeEventListener('scroll', onScroll)
})
</script>

<template>
    <button class="rounded-full h-[56px] w-[56px] grid grid-cols-1 justify-items-center items-center bg-lightmode-primary dark:bg-darkmode-primary md:hover:bg-primary md:hover:text-on-primary md:hover:border-primary transition ease-out delay-75 duration-150" :class="scrolled ? 'scale-[103%] shadow-navbar' : ''">Back to top</button>
</template>