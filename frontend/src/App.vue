<template>
  <main>
    <h1>My Portfolio</h1>
    <button @click="fetchProfile">Load Profile</button>
    <pre>{{ profile }}</pre>
  </main>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";

const profile = ref(null);

async function fetchProfile() {
  try {
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/profile`);
    profile.value = data;
  } catch (err) {
    console.error(err);
  }
}
</script>
