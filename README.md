# 🩺 MedAgenda — Sistema de Agendamento de Consultas Médicas

## Sobre o projeto

O MedAgenda é uma aplicação front-end desenvolvida com Vue.js, com o objetivo de simular o agendamento de consultas médicas de maneira simples e organizada.

O projeto foi desenvolvido como atividade avaliativa da disciplina de Front-End Frameworks, do curso de Análise e Desenvolvimento de Sistemas.

Nossa proposta foi criar uma interface na qual o usuário pudesse visualizar os médicos disponíveis, escolher um profissional, preencher os dados necessários e acompanhar suas consultas agendadas.

Durante o desenvolvimento, procuramos aplicar os conceitos estudados em sala, principalmente componentização, props, diretivas, eventos e reatividade.

## Funcionalidades

- Visualização dos médicos e suas especialidades.
- Seleção de médicos diretamente pelos cards.
- Formulário para agendamento de consultas.
- Seleção de data e horário.
- Validação dos campos obrigatórios.
- Exibição das consultas agendadas.
- Menu com navegação entre quatro páginas usando Vue Router, sem recarga completa.
- Interface adaptada para computadores e celulares.

## Tecnologias utilizadas

- **Vue.js 3:** desenvolvimento da interface e dos componentes.
- **JavaScript:** funções, variáveis e interações.
- **HTML:** organização dos elementos.
- **CSS:** estilização e responsividade.
- **Vue Router 4:** navegação SPA entre quatro rotas.
- **Bootstrap 5:** layout responsivo e estilização de formulários, cards, menu e botões.
- **Vite:** ambiente de desenvolvimento.
- **StackBlitz:** desenvolvimento e testes da aplicação.

A primeira versão foi desenvolvida sem Vue Router e sem framework CSS. A versão 3.0 incorpora Vue Router 4 e Bootstrap 5, mantendo os componentes originais.

## Organização dos componentes

O projeto foi dividido em quatro componentes principais:

| Componente | Função |
|---|---|
| `Cabecalho.vue` | Exibe a identidade do sistema e o menu. |
| `CardMedico.vue` | Apresenta os médicos e suas especialidades. |
| `ListaConsultas.vue` | Exibe as consultas agendadas. |
| `Rodape.vue` | Apresenta as informações finais do projeto. |

O `App.vue` exibe o cabeçalho, o `RouterView` e o rodapé. As páginas estão em `src/views`, a configuração das rotas está em `src/router/index.js` e o estado compartilhado das consultas está em `src/agenda.js`.

### Conceitos de Vue utilizados

**Props:** utilizadas para passar informações entre os componentes, como o nome e a especialidade de cada médico.

**ref():** utilizado para criar variáveis reativas, armazenar os dados do formulário e atualizar a lista de consultas.

**v-model:** utilizado para conectar os campos do formulário às variáveis.

**v-if:** utilizado para controlar a exibição do formulário e das mensagens de validação.

**v-for:** utilizado para mostrar os médicos e as consultas a partir de listas.

**@click:** utilizado para executar funções quando o usuário clica nos botões.

### Reutilização de componentes

Um dos principais exemplos de reutilização está no `CardMedico.vue`.

Criamos apenas um componente para representar um médico, mas o utilizamos para apresentar diferentes profissionais. As informações são recebidas através de props, evitando a repetição de código.

## Como executar o projeto

É necessário ter o Node.js e o npm instalados.

1. Baixe ou clone este repositório.
2. Abra a pasta do projeto em um terminal.
3. Instale as dependências:

```bash
npm install
```

4. Inicie o ambiente de desenvolvimento:

```bash
npm run dev
```

5. Abra no navegador o endereço indicado pelo terminal.

## Uso de inteligência artificial

Durante o desenvolvimento, utilizamos o ChatGPT como ferramenta de apoio para compreender conceitos, organizar os componentes, corrigir erros e melhorar a interface.

A IA também auxiliou na adaptação de exemplos de Vue.js ao tema de consultas médicas.

Abaixo estão alguns dos principais prompts utilizados, com a indicação das etapas em que foram empregados.

### 1. Planejamento e divisão dos componentes

**Prompt:**

> "O tema da minha equipe é consultas médicas. me auxilie no desenvolvimento de uma aplicação Vue.js One Page, utilizando apenas os conteúdos ensinados pelo professor, sem Vue Router e sem bibliotecas externas."

**Etapa:** planejamento da aplicação e definição dos componentes.

### 2. Análise dos conteúdos estudados

**Prompt:**

> "Isso foi tudo o que foi passado durante as aulas dele. Preciso que você identifique tudo o que foi passado para minimizar comandos não vistos em sala."

**Etapa:** revisão das cinco aulas de Front-End Frameworks e definição dos recursos permitidos.

### 3. Configuração do projeto

**Prompt:**

> "Me auxicilie a criar o sistema de consultas médicas pelo StackBlitz. Quero seguir passo a passo e usar apenas os recursos das cinco aulas."

**Etapa:** configuração do ambiente Vue.js e criação dos arquivos iniciais.

### 4. Correção de erros

**Prompt:**

> "Vou mandar uma foto do código inteiro e você analisa e vê o que há de errado."

**Etapa:** identificação e correção de problemas nos componentes, principalmente na exibição dos cards dos médicos.

### 5. Identidade visual

**Prompt:**

> "Estou achando o site simples demais. Vou enviar alguns sites para você analisar e me indicar para usar como inspiração para a nova identidade visual do projeto."

**Etapa:** reformulação da aparência do MedAgenda, utilizando como referências Doctoralia, BoaConsulta e dr.consulta.

### 6. Melhorias no formulário

**Prompt:**

> "Quero melhorar a área separada para pôr o nome do paciente, a data, o horário e o médico. Dessa forma que está agora é simples e feia."

**Etapa:** organização visual dos campos e melhorias no CSS.

### 7. Eventos e validação

**Prompt:**

> "Agora o botão Agendar deve funcionar, e também a função de validação."

**Etapa:** implementação de interações com `@click`, `ref()` e verificação de campos obrigatórios.

### 8. Responsividade

**Prompt:**

> "Bom dia, chat, me ajude na melhora da responsividade."

**Etapa:** adaptação dos componentes, formulário e menu para diferentes tamanhos de tela utilizando CSS.

### Como utilizamos as respostas

As sugestões foram aplicadas gradualmente no StackBlitz. Durante esse processo, foram testados os componentes, identificados erros, corrigidos problemas de organização e ajuste da interface conforme as necessidades do projeto.

A utilização da IA não substituiu o acompanhamento do desenvolvimento e dos testes da aplicação.


## Evolução para o MedAgenda 3.0 — Vue Router

O MedAgenda foi evoluído de uma página única com seções para uma aplicação SPA (*Single Page Application*) organizada por rotas. A troca de página é feita pelo Vue Router sem recarregar toda a aplicação.

| Rota | Componente | Conteúdo |
|---|---|---|
| `/` | `InicioView.vue` | Apresentação do sistema |
| `/medicos` | `MedicosView.vue` | Médicos e escolha do profissional |
| `/agendar` | `AgendarView.vue` | Formulário, validação e confirmação |
| `/consultas` | `ConsultasView.vue` | Consultas registradas |

**Configuração:** `createRouter()` cria o roteador, `createWebHistory()` permite endereços sem `#` e o vetor `routes` liga cada caminho a um componente. Em `main.js`, `app.use(router)` ativa o roteamento. Os links do menu utilizam `RouterLink`, e `RouterView` exibe a página atual.

O estado das consultas é compartilhado por `src/agenda.js` (variáveis reativas com `ref()`). Isso mantém a lista de agendamentos durante a navegação entre as páginas, sem banco de dados.

## Evolução visual — Bootstrap 5

O Bootstrap foi instalado via npm (`npm install vue-router@4 bootstrap@5`) e importado em `src/main.js` antes dos estilos CSS personalizados. Foram utilizadas as seguintes classes e recursos reais:

| Classe Bootstrap | Aplicação no MedAgenda | Função |
|---|---|---|
| `container-xl` | Cabeçalho, início e médicos | Limita e centraliza o conteúdo conforme a largura da tela |
| `d-flex`, `align-items-center`, `gap-3` | Cabeçalho e navegação | Alinha elementos com flexbox e ajusta espaçamento |
| `row`, `g-4`, `col-12`, `col-md-6`, `col-lg-4` | Listagem de médicos | Grid responsivo em 1, 2 ou 3 colunas |
| `form-control`, `form-select` | Formulário de agendamento | Estiliza campos e lista de médicos |
| `btn`, `w-100`, `py-3` | Botões de agendamento | Botões padronizados e largura total |
| `shadow-sm`, `rounded-4`, `p-4` | Cards e painéis | Sombra, bordas arredondadas e espaçamento |
| `alert`, `alert-danger` | Erros de validação | Mensagem de erro em destaque |

**Elementos melhorados:** cabeçalho/menu, cards dos médicos e formulário de agendamento (além dos botões e da lista de consultas). **Responsividade:** o grid dos médicos varia entre uma e três colunas; os campos de data/horário são empilhados em telas menores; o menu quebra linhas quando necessário.

## Demonstração rápida para a apresentação

1. Abrir `/` e explicar a SPA.
2. Ir até `/medicos` pelo `RouterLink`, escolher um médico e abrir `/agendar`.
3. Confirmar um agendamento válido e clicar em **Ver minhas consultas**.
4. Mostrar `/consultas` sem recarregamento completo da aplicação.
5. Reduzir a largura da tela e mostrar o grid responsivo Bootstrap.

**Observação sobre publicação:** em hospedagem estática, como a navegação utiliza `createWebHistory()`, configure redirecionamento das rotas para `index.html`, se o provedor exigir.

## Prompts utilizados na evolução 3.0

Além dos prompts listados abaixo, foram utilizados estes pedidos na evolução:

> "beleza, entao me da ai o passo a passo da instalação do vue router e do bootstrap"

**Etapa:** instalação das dependências e configuração do Bootstrap.

> "como é que eu duplico o medagenda"

**Etapa:** criação de uma cópia de segurança no StackBlitz antes das mudanças.

> "como eu abro um terminal novo"

**Etapa:** instalação via npm em um terminal separado do Vite.

> "tenho que entregar isso até as 20h de hoje"

**Etapa:** priorização dos requisitos obrigatórios, organização das rotas, aplicação de Bootstrap e materiais para entrega.

## Limitações

O MedAgenda é uma simulação de front-end desenvolvida para fins acadêmicos.

Os médicos apresentados são fictícios, e os agendamentos ficam armazenados temporariamente durante a utilização da página.

Ao atualizar o navegador, as consultas cadastradas são perdidas, pois o projeto não possui banco de dados nem persistência local.

O sistema não realiza agendamentos reais com clínicas ou profissionais de saúde.

## Integrantes da equipe

Integrante 1: Guilherme da Rocha da Silva
Integrante 2: Enzo Lira da Silva
Integrante 3: Fernando Noronha Braga da Silva
Integrante 4: Salomão Bayonas Miranda Ribeiro

## Disciplina

**Curso:** Análise e Desenvolvimento de Sistemas

**Disciplina:** Front-End Frameworks

**Professor:** André Neto

**Projeto:** MedAgenda — Sistema de Agendamento de Consultas Médicas