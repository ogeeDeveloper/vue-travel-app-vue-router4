<template>
    <div class="home">
        <h1>Travel Destinations</h1>
        <div class="destinations">
            <router-link 
                v-for="destination in destinations"
                :key="destination.id"
                :to="{name: 'DestinationPage', params:{id: destination.id}}"
            >
                <h2>{{ destination.name }}</h2>
                <img :src="`/images/${destination.image}`" :alt="destination.name" >
       </router-link>
        </div>
    </div>
</template>

<script setup lang="ts">
    import sourceData from '../data.json'

    interface Experience {
    name: string;
    slug: string;
    image: string;
    description: string;
    }

    interface Destination {
    name: string;
    slug: string;
    image: string;
    id: number;
    description: string;
    experiences: Experience[];
    }

    const destinations: Destination[] = sourceData.destinations;
</script>

<style scoped>

</style>