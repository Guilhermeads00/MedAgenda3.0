<script setup>
defineProps(['nome', 'especialidade', 'iniciais'])
</script>

<template>
  <div class="card border-0 shadow-sm rounded-4 h-100 p-4 text-center card-medico-hover bg-white">
    <div class="card-body d-flex flex-column align-items-center justify-content-center p-0">
      
      <div class="avatar-medico shadow-sm mb-3">
        {{ iniciais }}
      </div>

      <h3 class="h5 fw-bold text-dark mb-1">{{ nome }}</h3>
      <p class="text-muted small mb-4">{{ especialidade }}</p>

      <div class="badge-atendimento w-100 py-2 rounded-3">
        <span class="small fw-semibold">Disponível para agendamento</span>
      </div>

    </div>
  </div>
</template>

<style scoped>
.card-medico-hover {
  border: 1px solid rgba(148, 163, 184, 0.2) !important;
  border-radius: 20px !important;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.card-medico-hover:hover {
  transform: translateY(-5px);
  box-shadow: 0 16px 35px rgba(6, 182, 212, 0.15) !important;
  border-color: rgba(6, 182, 212, 0.4) !important;
}

.avatar-medico {
  background: linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%);
  color: #fff;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 26px;
  font-weight: 800;
  box-shadow: 0 8px 20px rgba(6, 182, 212, 0.3);
}

.badge-atendimento {
  background-color: #f0fdfa;
  color: #0891b2;
  border: 1px solid #ccfbf1;
}
</style>