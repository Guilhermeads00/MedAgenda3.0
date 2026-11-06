<script setup>
import CardMedico from '../components/CardMedico.vue'
import { medicos, selecionarMedico } from '../agenda.js'
</script>

<template>
  <section class="pagina py-5" id="medicos">
    <div class="container-xl">
      <h1 class="fw-bold text-dark">Encontre seu especialista</h1>
      <p class="descricao-medicos text-muted mb-4">Conheça nossos profissionais disponíveis para agendamento.</p>
      <div class="row g-4">
        <div v-for="medico in medicos" :key="medico.id" class="col-12 col-md-6 col-lg-4">
          <div class="item-medico h-100 d-flex flex-column">
            <CardMedico :nome="medico.nome" :especialidade="medico.especialidade" :iniciais="medico.iniciais" />
            <RouterLink to="/agendar" @click="selecionarMedico(medico.nome)" class="btn btn-principal w-100 mt-3 py-2">Agendar consulta</RouterLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>