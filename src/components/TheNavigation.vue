<template>
    <div id="nav">
        <router-link id="logo" to="/">Home</router-link>
      <router-link 
        v-for="destination in destinations"
          :key="destination.id"
          :to="{name: 'DestinationPage', params:{id: destination.id, slug: destination.slug}}"
      >
        {{ destination.name }}
       </router-link>
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