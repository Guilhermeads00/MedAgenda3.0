<script setup>
import { cancelarConsulta } from '../agenda.js'
defineProps(['consultas'])
</script>

<template>
  <section class="py-5 bg-light min-vh-75" id="consultas">
    <div class="container-xl">
      <div class="mb-4">
        <h2 class="fw-bold text-dark">Minhas consultas</h2>
        <p class="text-muted">Acompanhe seus agendamentos em um só lugar.</p>
      </div>

      <div v-if="consultas.length === 0" class="card border-0 shadow-sm rounded-4 p-5 text-center bg-white">
        <div class="card-body">
          <div class="rounded-circle bg-info bg-opacity-10 text-info d-flex align-items-center justify-content-center mx-auto mb-3" style="width: 60px; height: 60px; font-size: 26px;">
            📅
          </div>
          <h3 class="h5 fw-bold text-dark">Nenhuma consulta agendada</h3>
          <p class="text-muted small mb-0">Seus próximos agendamentos aparecerão aqui.</p>
        </div>
      </div>

      <div v-else class="row g-4">
        <div v-for="(consulta, index) in consultas" :key="index" class="col-12 col-md-6 col-lg-4">
          <div class="card border-0 shadow-sm rounded-4 h-100 p-3 bg-white">
            <div class="card-body d-flex flex-column justify-content-between">
              <div>
                <div class="mb-3">
                  <span class="badge bg-info bg-opacity-10 text-info px-3 py-2 rounded-pill fw-semibold">
                    ✓ Consulta agendada
                  </span>
                </div>

                <div class="d-flex align-items-center gap-3 mb-4">
                  <div class="rounded-circle bg-info bg-opacity-10 text-info fw-bold d-flex align-items-center justify-content-center flex-shrink-0" style="width: 48px; height: 48px; font-size: 18px;">
                    Dr
                  </div>
                  <div>
                    <h3 class="h6 fw-bold text-dark mb-1">{{ consulta.medico }}</h3>
                    <p class="text-muted small mb-0">Paciente: <strong class="text-dark">{{ consulta.nome }}</strong></p>
                  </div>
                </div>
              </div>

              <div>
                <div class="row g-2 border-top pt-3 mb-3">
                  <div class="col-6">
                    <div class="p-2 rounded-3 bg-light">
                      <span class="d-block text-muted" style="font-size: 11px;">Data</span>
                      <strong class="text-dark small">{{ consulta.data }}</strong>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="p-2 rounded-3 bg-light">
                      <span class="d-block text-muted" style="font-size: 11px;">Horário</span>
                      <strong class="text-dark small">{{ consulta.horario }}</strong>
                    </div>
                  </div>
                </div>

                <button @click="cancelarConsulta(index)" class="btn btn-outline-danger btn-sm w-100 py-2 rounded-3 fw-semibold">
                  Cancelar Consulta
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>