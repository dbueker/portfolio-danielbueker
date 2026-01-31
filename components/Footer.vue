<template>
    <div class="bg-surface-variant w-full pb-4 pt-20">
        <div class="px-6 space-y-12 mb-16 max-w-screen-lg mx-auto text-on-surface-variant">
          <p class="text-body md:w-2/3">I love to team up for improving or designing new things from scratch. If you are curious about what we could do together, feel free to reach out!</p>
          <div class="w-full flex flex-wrap gap-8">
            <a href="https://www.linkedin.com/in/danielbueker/" target="_blank"><Button color="onLight" text="Contact" /></a>
            <ButtonBackToTop />
          </div>
        </div>
        <Divider color="onDark"/>
        <div class="px-6 flex flex-row space-x-4 max-w-screen-lg mx-auto text-body-small py-10 text-on-surface-variant">
            <p>© 2026 Daniel Büker</p>
            <NuxtLink to="/legal-notice" class="md:hover:text-on-surface-variant/70 md:active:scale-[98%] transition ease-in-out duration-150">Legal notice</NuxtLink>
        </div>
    </div>
</template>