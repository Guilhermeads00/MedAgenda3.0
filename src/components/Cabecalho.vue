<template>
<header class="cabecalho shadow-sm">
  <div class="cabecalho-interior container-xl d-flex align-items-center justify-content-between gap-3">
    <RouterLink to="/" class="marca" aria-label="Voltar ao início do MedAgenda">
      <img src="/logo-medagenda.png" alt="MedAgenda" class="logo-imagem" />
    </RouterLink>
    <nav class="menu d-flex align-items-center flex-wrap gap-2 gap-md-3" aria-label="Menu principal">
      <RouterLink to="/" class="link-menu">Início</RouterLink>
      <RouterLink to="/medicos" class="link-menu">Médicos</RouterLink>
      <RouterLink to="/consultas" class="link-menu">Minhas consultas</RouterLink>
      <RouterLink to="/agendar" class="btn btn-agendar px-3 py-2">Agendar</RouterLink>
    </nav>
  </div>
</header>
</template>

<style scoped>
.cabecalho {
background: rgba(255, 255, 255, 0.95);
backdrop-filter: blur(10px);
border-bottom: 1px solid rgba(226, 232, 240, 0.8);
position: sticky;
top: 0;
z-index: 1000;
}

.cabecalho-interior {
min-height: 82px;
padding-top: 12px;
padding-bottom: 12px;
}

.marca {
flex: 0 0 auto;
display: flex;
align-items: center;
}

.logo-imagem {
width: clamp(160px, 23vw, 235px);
height: auto;
max-height: 60px;
object-fit: contain;
display: block;
}

.menu {
justify-content: flex-end;
}

.link-menu {
color: #334155;
font-size: 14px;
font-weight: 700;
text-decoration: none;
white-space: nowrap;
transition: color 0.2s;
}

.link-menu:hover, .link-menu.router-link-active {
color: #06b6d4;
}

.btn-agendar {
background: linear-gradient(135deg, #06b6d4 0%, #0ea5e9 100%);
color: white;
border: none;
border-radius: 10px;
font-size: 14px;
font-weight: 700;
white-space: nowrap;
box-shadow: 0 4px 12px rgba(6, 182, 212, 0.25);
transition: all 0.2s;
}

.btn-agendar:hover, .btn-agendar.router-link-active {
background: linear-gradient(135deg, #0891b2 0%, #0284c7 100%);
color: white;
transform: translateY(-1px);
}

@media (max-width: 650px) {
.cabecalho-interior { flex-direction: column; justify-content: center !important; gap: 6px !important; }
.menu { justify-content: center; gap: 10px 13px !important; }
.link-menu, .btn-agendar { font-size: 12px; }
.logo-imagem { width: 195px; max-height: 48px; }
}
</style>