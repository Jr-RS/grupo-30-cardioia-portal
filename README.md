# FIAP - Faculdade de Informática e Administração Paulista

<p align="center">
<a href= "https://www.fiap.com.br/"><img src="assets/logo-fiap.png" alt="FIAP - Faculdade de Informática e Admnistração Paulista" border="0" width=40% height=40%></a>
</p>

<br>

# Ir Além 1 – CardioIA Portal Interface

### Nome do grupo
Grupo 30

## 👨‍🎓 Integrantes: 
- [Ana Beatriz Duarte Domingues](https://www.linkedin.com/in/)
  **RM**: 560302
- [Junior Rodrigues da Silva](https://www.linkedin.com/in/jrsilva051/)
  **RM**: 559451
- [Carlos Emilio Castillo Estrada](https://www.linkedin.com/in/)
  **RM**: 559855

## 👩‍🏫 Professores:
### Tutor(a)
- [Lucas Gomes Moreira](https://www.linkedin.com/company/inova-fusca)
### Coordenador(a)
- [André Godoi Chiovato](https://www.linkedin.com/company/inova-fusca)

## 📜 Descrição

Este repositório faz parte do **Ir Além 1 – CardioIA Portal Interface**, que complementa a **Fase 2: Diagnóstico Automatizado** do projeto **CardioIA**.
Trata-se de uma aplicação **front-end em React + Vite**, que simula a interface de um portal de cardiologia.
O portal foi projetado para representar **funcionalidades reais de gestão de pacientes e consultas**, mas utilizando **dados simulados**.
O grande foco do projeto é aplicar conceitos avançados de React para criar uma aplicação:

- **Interativa:** atualizações em tempo real (ex.: consultas agendadas refletem imediatamente no Dashboard).
- **Segura:** rotas protegidas só ficam disponíveis após autenticação.
- **Organizada:** gerenciamento de estado global com Context API e hooks.
- **Escalável:** estrutura de pastas dividida em contexts, components, pages e services.

---

## 🎯 Objetivos

- Construir uma interface intuitiva e funcional para simulação de um portal clínico.
- Aplicar **React Hooks avançados** (`useState`, `useEffect`, `useReducer`, `useContext`).
- Implementar **autenticação simulada com JWT fake**, persistente no navegador.
- Criar **rotas protegidas** com React Router DOM.
- Desenvolver **Dashboard, listagem de pacientes e agendamento de consultas.**
- Utilizar **CSS Modules** para manter os estilos isolados por componente.

---

## ⚙️ Como a Aplicação Funciona

A aplicação foi desenvolvida sobre quatro pilares principais:
### 🔹 React Hooks Avançados
- `useState` → controle de estados locais (inputs, login, etc.).
- `useEffect` → execução de efeitos colaterais (ex.: carregar lista de pacientes).
- `useContext` → acesso a estados globais (autenticação e agendamentos).
- `useReducer` → gerenciamento complexo do formulário de agendamento.
  
### 🔹 Context API
- `AuthContext` → gerencia autenticação (usuário logado, token, login/logout).
- `AppointmentContext` → centraliza os agendamentos feitos na sessão, exibindo no Dashboard em tempo real.

### 🔹 Autenticação Simulada (JWT Fake)
- O login gera um token falso que é salvo no **localStorage**.
- Isso garante que a sessão persista mesmo após atualizar a página.
- Somente usuários autenticados podem acessar rotas internas.

### 🔹 Estilização e Rotas
- **CSS Modules** → garante isolamento e organização dos estilos.
- **React Router DOM** → define a navegação entre Login, Dashboard, Pacientes e Agendamento.
- **Rotas Protegidas** → usuário não autenticado é redirecionado automaticamente para o login.

---

### 🖼️ Funcionalidades
- **Login/Logout:** autenticação simulada e persistente.  
- **Rotas Protegidas:** acesso restrito às páginas principais.  
- **Dashboard:** exibe total de pacientes e número de consultas agendadas na sessão.  
- **Pacientes:** lista carregada de base simulada (JSON).  
- **Agendamento:** formulário controlado por useReducer, com atualização automática das métricas no Dashboard.

---

### 🧭 Fluxo do Usuário
1. O usuário inicia na tela de login.  
   - Se tentar acessar outra página diretamente pela URL → será redirecionado ao login.  
2. Após clicar em **“Fazer Login”**, um token falso é gerado e armazenado no `localStorage`.  
   - O usuário é redirecionado para o Dashboard.
3. No Dashboard, ele visualiza:  
   - Número total de pacientes (base simulada).  
   - Número de consultas agendadas (dinâmico).  
4. Na página **Pacientes**, vê uma lista completa de pacientes simulados.  
5. Na página **Agendamento**, pode cadastrar novas consultas.  
   - Cada agendamento aumenta automaticamente o contador no Dashboard.  
6. Ao clicar em “Sair”, a sessão é encerrada.
   - O token é removido e o usuário perde o acesso às rotas protegidas.

### 📂 Estrutura do Repositório

- **public/** → contém arquivos estáticos acessíveis publicamente (ex.: favicon, imagens públicas).
- **src/** → código-fonte da aplicação.
  - **contexts/** → Context API para gerenciamento global de estado.
     - `AuthContext.jsx` → gerencia autenticação (login, logout, token fake JWT).
     - `AppointmentContext.jsx` → controla agendamentos e atualiza o dashboard em tempo real.
  - **components/** → componentes reutilizáveis da interface (ex.: Header, ProtectedRoute).
  - **pages/** → páginas principais da aplicação.
    - `Login.jsx` → tela inicial de login.
    - `Dashboard.jsx` → exibe métricas de pacientes e agendamentos.
    - `Pacientes.jsx` → lista pacientes de base simulada.
    - `Agendamento.jsx` → formulário de agendamento com useReducer.
  - **services/** → serviços auxiliares (ex.: dados simulados de pacientes).
- **.gitignore** → define arquivos e pastas ignorados pelo Git.
- **eslint.config.js** → configuração de lint para padronização de código.
- **index.html** → arquivo base da aplicação.
- **package.json e package-lock.json** → dependências e scripts do projeto.
- **vite.config.js** → configuração do Vite.
- **README.md** → documentação geral do projeto (este arquivo).

---


### 🛠️ Tecnologias Utilizadas
- **React + Vite** (framework principal)  
- **React Router DOM** (roteamento e rotas protegidas)  
- **Context API + Hooks** (gestão de estado global e local)  
- **CSS Modules** (estilização isolada por componente)  
- **Node.js + npm** (ambiente de execução e pacotes)

---

## 🚀 Como Iniciar a Aplicação Localmente
Para executar este projeto em sua máquina, siga os passos abaixo:

1. **Clonar o Repositório:** Primeiro, clone o repositório do GitHub para sua máquina local.
2. **Acessar a Pasta:** Abra um terminal e navegue para a pasta raiz do projeto que você acabou de clonar.
3. **Instalar as Dependências:** Execute o comando abaixo para instalar todas as bibliotecas e pacotes necessários para o projeto.

```bash
npm install
```

4. **Iniciar o Servidor:** Após a instalação ser concluída, execute o seguinte comando para iniciar o servidor de desenvolvimento.
```bash
npm run dev
```

5. **Acessar no Navegador:** Abra seu navegador e acesse a URL que aparecerá no terminal (geralmente `http://localhost:5173`). A aplicação estará rodando.

---

## 📹 Demonstração em vídeo
Confira a demonstração do projeto em vídeo no YouTube:
[YouTube](https://youtu.be/RmTxPuIrarI)  

---

## Histórico de lançamentos

* 0.1.0 - 29/09/2025
    * Primeira versão do projeto.

## Licença

<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"><p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/"><a property="dct:title" rel="cc:attributionURL" href="https://github.com/agodoi/template">MODELO GIT FIAP</a> por <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="https://fiap.com.br">Fiap</a> está licenciado sobre <a href="http://creativecommons.org/licenses/by/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">Attribution 4.0 International</a>.</p>

