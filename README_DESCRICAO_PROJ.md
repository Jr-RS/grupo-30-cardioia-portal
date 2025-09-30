# CardioIA - Portal de Interface

## Descrição do Projeto
Este projeto é uma aplicação front-end desenvolvida em React com Vite, que simula a interface de um portal de cardiologia para gerenciamento de pacientes e consultas. O desenvolvimento faz parte da atividade "Interfaces Inteligentes: Conectando IA ao Usuário com React e JWT" da FIAP.

O foco principal foi aplicar conceitos avançados de React para criar uma aplicação interativa, segura e bem estruturada, sem a necessidade de um back-end real, utilizando dados simulados.

## Como a Aplicação Funciona (Conceitos Aplicados)
A aplicação foi construída sobre pilares modernos do desenvolvimento com React:

- **React Hooks Avançados:** Uso intensivo de `useState` para estados locais, `useEffect` para controle de efeitos (como carregar dados), `useContext` para acessar estados globais e `useReducer` para gerenciar a lógica complexa do formulário de agendamento de forma previsível e centralizada.

- **Context API para Gerenciamento Global:** Foram criados dois contextos principais:
  - **AuthContext:** Gerencia todo o estado de autenticação (usuário, token) e as funções de login e logout.
  - **AppointmentContext:** Centraliza a lista de agendamentos feitos na sessão, permitindo que o formulário adicione novos agendamentos e o Dashboard exiba a contagem atualizada.

- **Roteamento com React Router:** A biblioteca `react-router-dom` é utilizada para criar a navegação entre as páginas (Dashboard, Pacientes, Agendamento) e para implementar o sistema de Rotas Protegidas, que só permite o acesso de usuários autenticados.

- **Autenticação Simulada com "Fake JWT":** O sistema de login simula a criação de um JSON Web Token (JWT), que é armazenado no localStorage do navegador. Isso garante que a sessão do usuário persista mesmo que a página seja recarregada, uma prática comum em aplicações reais.

- **Estilização com CSS Modules:** O design da aplicação foi construído utilizando CSS Modules, o que garante que os estilos de cada componente sejam escopados localmente, evitando conflitos e facilitando a manutenção de uma interface consistente.

## Funcionalidades Implementadas
- **Sistema de Autenticação:** Tela de login funcional que permite ao usuário entrar e sair da plataforma. O estado de autenticação é controlado globalmente.
- **Rotas Protegidas:** As páginas principais (Dashboard, Pacientes, Agendamento) são protegidas e redirecionam o usuário para a tela de login caso ele não esteja autenticado.
- **Dashboard de Métricas:** Painel principal que exibe em tempo real a contagem total de pacientes (carregados de uma base simulada) e o número de consultas agendadas durante a sessão atual.
- **Listagem de Pacientes:** Página que exibe uma lista de pacientes a partir de uma base de dados local, demonstrando o carregamento e a renderização de dados.
- **Formulário de Agendamento:** Formulário para agendar novas consultas, cujo estado completo é gerenciado de forma robusta pelo hook `useReducer`.

## Como Usar a Aplicação (Fluxo do Usuário)
1. Ao iniciar, o usuário é direcionado para a tela de login.
2. Qualquer tentativa de acessar outras páginas diretamente pela URL resultará em um redirecionamento para o login.
3. Ao clicar em "Fazer Login", um usuário simulado é autenticado e o acesso às outras páginas é liberado.
4. No cabeçalho, o usuário verá uma saudação com seu nome e um botão "Sair", que estarão sempre visíveis.
5. Ele pode navegar entre o Dashboard (para ver as métricas), a página de Pacientes (para ver a lista) e a página de Agendamento.
6. Ao preencher e enviar o formulário de agendamento, o contador no Dashboard é atualizado em tempo real.
7. Ao clicar em "Sair", a sessão é encerrada e o usuário é deslogado, perdendo o acesso às páginas protegidas.

## Como Iniciar a Aplicação Localmente
Para executar este projeto em sua máquina, siga os passos abaixo:

1. **Clonar o Repositório:** Primeiro, clone o repositório do GitHub para sua máquina local.
2. **Acessar a Pasta:** Abra um terminal e navegue para a pasta raiz do projeto que você acabou de clonar.
3. **Instalar as Dependências:** Execute o comando abaixo para instalar todas as bibliotecas e pacotes necessários para o projeto.

```bash
npm install
```

4. Iniciar o Servidor: Após a instalação ser concluída, execute o seguinte comando para iniciar o servidor de desenvolvimento.
```bash
npm run dev
```

5. Acessar no Navegador: Abra seu navegador e acesse a URL que aparecerá no terminal (geralmente http://localhost:5173). A aplicação estará rodando.