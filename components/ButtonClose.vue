<script setup>
import { ref, onBeforeUnmount, onMounted } from "vue"
import Close from "../assets/Close.svg"

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
    <button class="rounded-full h-[56px] w-[56px] grid grid-cols-1 justify-items-center items-center bg-lightmode-primary dark:bg-darkmode-primary lg:hover:bg-accent lg:hover:text-on-accent lg:hover:border-accent transition ease-out delay-75 duration-200" :class="scrolled ? 'scale-[103%] shadow-navbar' : ''"><img :src=Close alt="Close"></button>
</template>