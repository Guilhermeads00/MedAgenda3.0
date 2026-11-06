<script setup>
import ListaConsultas from '../components/ListaConsultas.vue';
import { consultas } from '../agenda.js';
</script>

<template>
  <ListaConsultas :consultas="consultas" />
</template>
