<template>
    <Navbar />

    <div class="page mx-auto max-w-5xl p-3">

        <div class="grid grid-cols-3 gap-4">
            <SkillCard v-for="skill in skills"
                :title="skill.title"
                :description="skill.description"
                :route="skill.route" />
        </div>
    </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue';
import SkillCard from '@/components/SkillCard.vue';

let skills = [
    {
        title: 'Prompt Reader',
        description: 'Extract metadata from ComfyUI PNGs',
        route: '/skill/prompt-reader'
    }
]

</script>

<style>
</style>