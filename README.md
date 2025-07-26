# FormBuilder

Este projeto é uma aplicação web para a construção de um formulário dinâmico de múltiplos passos, desenvolvido com React, TypeScript e Vite. A estilização é feita utilizando `styled-components`, garantindo um design coeso e componentes reutilizáveis.

## ✨ Funcionalidades

- **Formulário Multi-Passo**: A interface guia o usuário através de diferentes etapas para preencher as informações de forma organizada.
- **Validação de Dados**: Validação em tempo real para garantir que os dados inseridos estejam corretos antes de avançar.
- **Resumo dos Dados**: Ao final das etapas, um resumo com todas as informações preenchidas é exibido para confirmação.
- **Feedback de Sucesso**: Mensagem de confirmação ao submeter o formulário com sucesso.

## 🚀 Tecnologias Utilizadas

- **React**: Biblioteca para construir a interface de usuário.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **Vite**: Ferramenta de build moderna e rápida para desenvolvimento web.
- **Styled Components**: Para estilização de componentes com CSS-in-JS.

## 🏁 Como Iniciar Localmente

Siga os passos abaixo para executar o projeto em sua máquina.

### Pré-requisitos

Você precisa ter o Node.js e um gerenciador de pacotes como npm ou Yarn instalado.

### Instalação e Execução

1.  **Clone o repositório:**
    ```sh
    git clone <URL_DO_SEU_REPOSITORIO>
    ```

2.  **Navegue até o diretório do projeto:**
    ```sh
    cd FormBuilder
    ```

3.  **Instale as dependências:**
    ```sh
    npm install
    ```

4.  **Inicie o servidor de desenvolvimento:**
    ```sh
    npm run dev
    ```

A aplicação estará disponível em `http://localhost:5173` (ou na porta indicada no terminal).

## 📝 Validação e Fluxo de Etapas

O formulário foi projetado para ser intuitivo e robusto, seguindo um fluxo claro para o usuário.

### Fluxo de Etapas

A navegação entre as diferentes seções do formulário é controlada por um sistema de passos.

- O usuário preenche os campos de uma etapa e clica no botão **"Avançar"**  para prosseguir.
- É possível retornar à etapa anterior a qualquer momento usando o botão **"Voltar"** .
- Cada etapa é encapsulada em um `StepContainer`, garantindo que apenas os campos relevantes sejam exibidos.

### Validação de Dados

- A validação dos campos é executada a cada tentativa de avanço.
- Se um campo obrigatório não for preenchido ou se os dados estiverem em um formato inválido, uma mensagem de erro (`ErrorMessage`) será exibida abaixo do campo correspondente.
- O usuário só pode avançar para a próxima etapa após corrigir todos os erros da etapa atual.

### Resumo e Submissão

- Após preencher todas as etapas, uma tela de resumo (`Summary`) é apresentada, mostrando todos os dados inseridos (`SummaryItem`) para revisão final.
- Ao confirmar os dados, o formulário é submetido e uma mensagem de sucesso (`SuccessMessage`) é exibida, finalizando o fluxo.
