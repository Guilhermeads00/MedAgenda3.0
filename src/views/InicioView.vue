<template>
<section class="pagina pagina-inicio py-5" id="inicio">
  <div class="container-xl">
    <div class="row align-items-center g-5">
      
      <!-- Coluna da Esquerda: Textos (Ocupa 6 colunas) -->
      <div class="col-12 col-lg-6 text-start">
        <p class="etiqueta text-info fw-bold mb-2" style="font-size: 13px; letter-spacing: 1.5px;">CUIDADO E PRATICIDADE EM UM SÓ LUGAR</p>
        <h1 class="fw-extrabold display-5 text-dark mb-3">Sua saúde merece atenção sem complicação.</h1>
        <p class="text-muted fs-6 mb-4">Encontre especialistas e agende suas consultas de maneira simples, rápida e organizada.</p>
        <div class="mb-3">
          <RouterLink to="/agendar" class="btn btn-principal px-4 py-3 shadow-sm">Agendar minha consulta</RouterLink>
        </div>
        <p class="text-muted small mt-3">✔ Simples &nbsp;&nbsp; ⚡ Rápido &nbsp;&nbsp; 📅 Organizado</p>
      </div>

      <!-- Coluna da Direita: Imagem do Hospital Responsiva (Ocupa 6 colunas) -->
      <div class="col-12 col-lg-6">
        <div class="position-relative">
          <img src="/src/assets/hospital-corredor.jpg" alt="Corredor de hospital moderno" class="img-fluid rounded-4 shadow-lg border border-white border-3 w-100 object-fit-cover" style="max-height: 400px;" />
        </div>
      </div>

    </div>
  </div>
</section>

<!-- Painel de Passos / Resumo -->
<section class="area-resumo container-xl py-4">
  <div class="row g-4 align-items-stretch">
    
    <!-- Painel Informativo de Passos -->
    <div class="col-12 col-lg-6">
      <div class="painel-informativo shadow-sm rounded-4 p-4 bg-white h-100">
        <div class="painel-titulo d-flex align-items-center gap-3 mb-3">
          <div class="icone-painel bg-info bg-opacity-10 text-info rounded-3 d-flex align-items-center justify-content-center fw-bold" style="width: 45px; height: 45px; font-size: 20px;">+</div>
          <div>
            <h3 class="h6 fw-bold text-dark mb-0">Agendamento simples</h3>
            <p class="text-muted small mb-0">Três passos para sua próxima consulta</p>
          </div>
        </div>
        <div class="passo d-flex align-items-center gap-3 mt-3">
          <span class="rounded-circle bg-info bg-opacity-10 text-info fw-bold d-flex align-items-center justify-content-center" style="width: 30px; height: 30px; font-size: 13px;">1</span>
          <p class="mb-0 small text-dark fw-medium">Escolha um médico</p>
        </div>
        <div class="passo d-flex align-items-center gap-3 mt-2">
          <span class="rounded-circle bg-info bg-opacity-10 text-info fw-bold d-flex align-items-center justify-content-center" style="width: 30px; height: 30px; font-size: 13px;">2</span>
          <p class="mb-0 small text-dark fw-medium">Informe a data e o horário</p>
        </div>
        <div class="passo d-flex align-items-center gap-3 mt-2">
          <span class="rounded-circle bg-info bg-opacity-10 text-info fw-bold d-flex align-items-center justify-content-center" style="width: 30px; height: 30px; font-size: 13px;">3</span>
          <p class="mb-0 small text-dark fw-medium">Confirme sua consulta</p>
        </div>
      </div>
    </div>

    <!-- Card de Ação Rápida para Médicos -->
    <div class="col-12 col-lg-6">
      <div class="d-flex flex-column justify-content-center bg-white p-4 rounded-4 shadow-sm border border-light h-100">
        <h2 class="h5 fw-bold text-dark mb-2">Encontre seu especialista</h2>
        <p class="text-muted small mb-3">Conheça nossos profissionais disponíveis para agendamento imediato.</p>
        <div>
          <RouterLink to="/medicos" class="btn btn-outline-info px-4 py-2 fw-semibold rounded-3">Ver médicos disponíveis</RouterLink>
        </div>
      </div>
    </div>

  </div>
</section>
</template>