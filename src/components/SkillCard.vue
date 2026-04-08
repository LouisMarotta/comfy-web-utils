<template>
    <Card>
        <CardHeader>
            <h2 class="font-bold">{{ props.title }}</h2>
        </CardHeader>

        <CardContent>
            <p>{{ props.description }}</p>
        </CardContent>

        <CardFooter>
            <RouterLink :to="props.route">
                <Button>Try now</Button>
            </RouterLink>
        </CardFooter>
    </Card>
</template>
<script setup>
import Card from '@/components/ui/card/Card.vue';
import CardHeader from './ui/card/CardHeader.vue';
import CardContent from './ui/card/CardContent.vue';
import CardFooter from './ui/card/CardFooter.vue';
import Button from './ui/button/Button.vue';
import { RouterLink } from 'vue-router';


const props = defineProps({
    title: String,
    description: String,
    route: String
});
</script>