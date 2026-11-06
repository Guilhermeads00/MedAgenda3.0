<script setup>
import {
  medicos, nomePaciente, medicoSelecionado, dataConsulta, horarioConsulta,
  mensagemErro, mostrarSucesso, formatarData, formatarHorario,
  confirmarAgendamento, novoAgendamento
} from '../agenda.js'
</script>

<template>
  <section class="pagina pagina-agendamento" id="agendamento">
    <div class="container-xl">
      <div v-if="!mostrarSucesso" class="formulario shadow-sm rounded-4 p-4 p-md-5 bg-white">
        <h1>Agendamento de consulta</h1>
        <p class="subtitulo-formulario">Preencha os dados abaixo para confirmar sua consulta.</p>
        <form @submit.prevent="confirmarAgendamento" novalidate>
          <div class="mb-3">
            <label for="paciente" class="form-label">Nome do paciente:</label>
            <input id="paciente" class="form-control" type="text" v-model="nomePaciente" placeholder="Digite seu nome" autocomplete="name" />
          </div>
          <div class="mb-3">
            <label for="medico" class="form-label">Escolha o médico:</label>
            <select id="medico" class="form-select" v-model="medicoSelecionado">
              <option value="">Selecione um médico</option>
              <option v-for="medico in medicos" :key="medico.id" :value="medico.nome">{{ medico.nome }} - {{ medico.especialidade }}</option>
            </select>
          </div>
          <div class="row g-3 mb-3">
            <div class="col-12 col-md-6">
              <label for="data" class="form-label">Data da consulta:</label>
              <input id="data" class="form-control" type="text" v-model="dataConsulta" @input="formatarData" placeholder="DD/MM/AAAA" maxlength="10" inputmode="numeric" />
            </div>
            <div class="col-12 col-md-6">
              <label for="horario" class="form-label">Horário:</label>
              <input id="horario" class="form-control" type="text" v-model="horarioConsulta" @input="formatarHorario" placeholder="HH:MM" maxlength="5" inputmode="numeric" />
            </div>
          </div>
          <p v-if="mensagemErro" class="alert alert-danger rounded-3" role="alert">{{ mensagemErro }}</p>
          <button type="submit" class="btn btn-principal w-100 py-3 mt-2">Confirmar agendamento</button>
        </form>
      </div>
      <div v-else class="confirmacao shadow-sm rounded-4 p-4 p-md-5 bg-white">
        <div class="icone-sucesso">✓</div>
        <h1>Consulta agendada com sucesso!</h1>
        <p class="text-muted">Seu agendamento foi registrado e guardado. Você pode acompanhar os detalhes na seção Minhas consultas.</p>
        <div class="botoes-confirmacao d-grid gap-3 mt-4">
          <RouterLink to="/consultas" class="btn btn-principal py-3">Ver minhas consultas</RouterLink>
          <button class="btn btn-outline-info py-3 fw-semibold rounded-3" @click="novoAgendamento">Agendar outra consulta</button>
        </div>
      </div>
    </div>
  </section>
</template>