<template>
    <div class="destination">
        <h1>{{ getDestination?.name }}</h1>
        <div class="destination-details">
            <img :src="`/images/${getDestination?.image}`" :alt="getDestination?.name" >
        </div>
    </div>
</template>

<script setup lang="ts">
    import { computed, ref } from 'vue';
    import sourceData from '@/data.json';
    import { useRoute } from 'vue-router';

    const route = useRoute();
    const id = ref(route.params.id);

    const getDestinationID = computed(() => {
        return parseInt(id.value);
    });

    const getDestination  = computed(() => {
        return sourceData.destinations.find(destination => destination.id === getDestinationID.value)
    });
</script>