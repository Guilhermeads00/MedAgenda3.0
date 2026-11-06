<script setup>
import Cabecalho from './components/Cabecalho.vue'
import Rodape from './components/Rodape.vue'
</script>

<template>
  <Cabecalho />
  <!-- RouterView troca a página sem recarregar a aplicação. -->
  <main class="conteudo-principal">
    <RouterView />
  </main>
  <Rodape />
</template>
