<template>
    <nav class="flex justify-between px-6 py-4 items-center">
        <div className="flex items-center gap-4">
            <RouterLink to="/">
                <span>Comfy Web Utils</span>
            </RouterLink>
        </div>

        <div class="flex items-center gap-3">
            <ThemeToggle />
            <Button as="a" href="https://github.com/louismarotta/comfy-web-utils">Contribute <SimpleIcon logo="github" /> </Button>
            <Button class="bg-[#FF6433]" as="a" href="https://ko-fi.com/louismarotta">Donate <SimpleIcon logo="kofi" /> </Button>
        </div>
    </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import ThemeToggle from './ThemeToggle.vue';
import Button from './ui/button/Button.vue';
import SimpleIcon from './SimpleIcon.vue';

</script>
