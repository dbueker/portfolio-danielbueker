<template>
    <div class="bg-surface-variant w-full pb-4 pt-20">
        <div class="px-6 space-y-16 mb-16 max-w-screen-lg mx-auto text-on-surface-variant">
          <p class="text-body-large">If you are curious about what we could do together, feel free to say hi!</p>
          <div class="w-full flex flex-wrap gap-8 items-center">
            <a href="https://www.linkedin.com/in/danielbueker/" target="_blank"><Button color="onLight" text="Contact" /></a>
            <ButtonBackToTop />
          </div>
        </div>
        <Divider color="onDark"/>
        <div class="px-6 flex flex-row items-center space-x-4 max-w-screen-lg mx-auto text-body-small py-10 text-on-surface-variant">
            <p>© 2026 Daniel Büker</p>
            <NuxtLink to="/legal-notice" class="group relative overflow-hidden px-2 py-1 transition ease-in-out md:active:scale-[98%]">
                <span class="absolute inset-0 bg-on-surface-variant md:group-hover:bg-background translate-x-[-100%] md:group-hover:translate-x-0 transition duration-[0.25s] ease-in-out"></span>
                <span class="text-body-small relative z-10 text-on-surface-variant md:group-hover:text-on-background transition duration-[0.25s] ease-in-out">Legal notice</span>
            </NuxtLink>
          </div>
    </div>
</template>