import { ref } from 'vue';

export const medicos = [
  {
    id: 1,
    nome: 'Dra. Ana Souza',
    especialidade: 'Cardiologia',
    iniciais: 'AS',
  },
  {
    id: 2,
    nome: 'Dr. André Neto',
    especialidade: 'Dermatologia',
    iniciais: 'AN',
  },
  {
    id: 3,
    nome: 'Dra. Mariana Costa',
    especialidade: 'Clínica Geral',
    iniciais: 'MC',
  },
];

export const nomePaciente = ref('');
export const medicoSelecionado = ref('');
export const dataConsulta = ref('');
export const horarioConsulta = ref('');

// Carrega as consultas salvas no navegador ao iniciar, se existirem
const consultasSalvas =
  JSON.parse(localStorage.getItem('medagenda_consultas')) || [];
export const consultas = ref(consultasSalvas);

export const mensagemErro = ref('');
export const mostrarSucesso = ref(false);

// Função auxiliar para salvar no localStorage
function salvarNoStorage() {
  localStorage.setItem('medagenda_consultas', JSON.stringify(consultas.value));
}

export function selecionarMedico(nome) {
  medicoSelecionado.value = nome;
  mostrarSucesso.value = false;
  mensagemErro.value = '';
}

export function novoAgendamento() {
  mostrarSucesso.value = false;
  mensagemErro.value = '';
}

export function formatarData() {
  const numeros = dataConsulta.value.replace(/\D/g, '').slice(0, 8);
  if (numeros.length > 4) {
    dataConsulta.value =
      numeros.slice(0, 2) + '/' + numeros.slice(2, 4) + '/' + numeros.slice(4);
  } else if (numeros.length > 2) {
    dataConsulta.value = numeros.slice(0, 2) + '/' + numeros.slice(2);
  } else {
    dataConsulta.value = numeros;
  }
}

export function formatarHorario() {
  const numeros = horarioConsulta.value.replace(/\D/g, '').slice(0, 4);
  horarioConsulta.value =
    numeros.length > 2 ? numeros.slice(0, 2) + ':' + numeros.slice(2) : numeros;
}

export function validarData() {
  if (!/^\d{2}\/\d{2}\/\d{4}$/.test(dataConsulta.value)) return false;
  const [dia, mes, ano] = dataConsulta.value.split('/').map(Number);
  if (ano < 1000 || mes < 1 || mes > 12 || dia < 1) return false;
  const data = new Date(ano, mes - 1, dia);
  if (
    data.getFullYear() !== ano ||
    data.getMonth() !== mes - 1 ||
    data.getDate() !== dia
  )
    return false;
  const hoje = new Date();
  hoje.setHours(0, 0, 0, 0);
  return data >= hoje;
}

export function validarHorario() {
  if (!/^\d{2}:\d{2}$/.test(horarioConsulta.value)) return false;
  const [horas, minutos] = horarioConsulta.value.split(':').map(Number);
  return horas >= 0 && horas <= 23 && minutos >= 0 && minutos <= 59;
}

export function confirmarAgendamento() {
  if (
    !nomePaciente.value.trim() ||
    !medicoSelecionado.value ||
    !dataConsulta.value ||
    !horarioConsulta.value
  ) {
    mensagemErro.value = 'Preencha todos os campos para continuar.';
    return;
  }
  if (!validarData()) {
    mensagemErro.value = 'Informe uma data válida que não esteja no passado.';
    return;
  }
  if (!validarHorario()) {
    mensagemErro.value = 'Informe um horário válido entre 00:00 e 23:59.';
    return;
  }

  consultas.value.push({
    nome: nomePaciente.value.trim(),
    medico: medicoSelecionado.value,
    data: dataConsulta.value,
    horario: horarioConsulta.value,
  });

  salvarNoStorage();

  nomePaciente.value = '';
  medicoSelecionado.value = '';
  dataConsulta.value = '';
  horarioConsulta.value = '';
  mensagemErro.value = '';
  mostrarSucesso.value = true;
}

// Nova função para remover/cancelar uma consulta
export function cancelarConsulta(index) {
  if (confirm('Tens a certeza que pretendes cancelar esta consulta?')) {
    consultas.value.splice(index, 1);
    salvarNoStorage();
  }
}
