<template>
    <div class="home">
        <h1>Travel Destinations</h1>
        <div class="destinations">
            <router-link 
                v-for="destination in destinations"
                :key="destination.id"
                :to="destination.slug"
            >
                <h2>{{ destination.name }}</h2>
                <img :src="`/images/${destination.image}`" :alt="destination.name" >
       </router-link>
        </div>
    </div>
</template>

<script setup lang="ts">
    import sourceData from '../data.json'
    const destinations = sourceData.destinations;
</script>

<style scoped>

</style>