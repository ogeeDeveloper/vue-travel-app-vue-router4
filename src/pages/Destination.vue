<template>
    <div class="destination">
        <h1>{{ getDestination?.name }}</h1>
        <div class="destination-details">
            <img :src="`/images/${getDestination?.image}`" :alt="getDestination?.name" >
        </div>
    </div>
</template>

<script setup lang="ts">
    import { computed, ref, watch } from 'vue';
    import sourceData from '@/data.json';
    import { useRoute } from 'vue-router';

    const route = useRoute();
    const id = ref<number>(parseInt(route.params.id as string));

    // Watch for changes to the route's params.id and update the id ref
    watch(() => route.params.id, (newId) => {
        id.value = parseInt(newId as string);
    });
    
    const getDestinationID = computed(() => {
        return id.value;
    });

    const getDestination  = computed(() => {
        return sourceData.destinations.find(destination => destination.id === getDestinationID.value)
    });
</script>