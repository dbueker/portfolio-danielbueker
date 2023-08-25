<script setup>
import { ref, onBeforeUnmount, onMounted } from "vue"
import Button from "./Button.vue"

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
    <div class="group z-20 fixed top-6 right-6 rounded transition ease-in-out delay-75 duration-500" :class="scrolled && !open ? 'shadow-navbar' : '', scrolled ? 'scale-[103%]' : ''">
        <button @click="open = !open" class="rounded min-w-[100px] py-6 px-10 bg-lightmode-primary dark:bg-darkmode-primary text-button text-lightmode-on-primary dark:text-darkmode-on-primary hover:bg-accent hover:text-on-accent transition ease-in-out duration-200" :class="open ? 'bg-accent text-on-accent dark:bg-accent dark:text-on-accent' : ''" >{{ open ? 'Close' : 'Menu' }}</button>
    </div>
    <div>
        <Transition name="menu">
            <div v-if="open" @wheel.prevent @touchmove.prevent @scroll.prevent class="z-10 fixed top-0 w-screen h-screen bg-lightmode-primary dark:bg-darkmode-primary text-lightmode-on-primary dark:text-darkmode-on-primary text-title-mobile lg:text-title-desktop">
                <div class="grid grid-rows-4 gap-10 h-full w-full px-6 lg:mx-auto lg:max-w-screen-xl justify-items-center">
                    <NuxtLink to="/" @click="open = !open" class="group self-end row-start-2 hover:opacity-60 transition ease-in-out delay-75 duration-200" >Portfolio</NuxtLink>
                    <NuxtLink to="/about" @click="open = !open" class="group self-start row-start-3 hover:opacity-60 transition ease-in-out delay-75 duration-200" >About</NuxtLink>
                </div>
            </div>
        </Transition>
    </div>
</template>