# Teste de Desenvolvimento Front-End - Econverse

Este repositório contém a solução para o desafio técnico da Agência Econverse. O projeto consiste em uma plataforma de e-commerce funcional, desenvolvida com foco em performance, componentização e fidelidade ao layout proposto.

---

##  Tecnologias Utilizadas

* **React**
* **TypeScript**
* **Vite**
* **Sass (SCSS Modules)**
* **React Router Dom**
* **Context API**

---

##  Instruções para Instalação e Execução

### Pré-requisitos
É necessário ter o **Node.js** e o **npm** (ou yarn) instalados.

1.  **Clonar o repositório:**
    ```bash
    git clone [https://github.com/victoralsp/teste-front-end.git](https://github.com/victoralsp/teste-front-end.git)
    ```

2.  **Acessar a pasta:**
    ```bash
    cd teste-front-end
    ```
3.  **Instalar dependências:**
    ```bash
    npm install
    ```

4.  **Executar o projeto:**
    ```bash
    npm run dev
    ```
    O projeto será iniciado localmente em `http://localhost:5173`.

---

##  Funcionalidades e Objetivos Alcançados

* **Vitrine Dinâmica**: Consumo de dados via JSON para renderização de produtos.
* **Modal de Produto (Quick View)**: Exibição de informações detalhadas ao clicar em "Comprar", permitindo a seleção de quantidade e adição ao carrinho.
* **Fidelidade ao Layout**: Implementação fiel ao Figma, respeitando espaçamentos, tipografia e paleta de cores.
* **Responsividade**: Interface adaptada para diferentes resoluções (Desktop e Mobile).

---

##  Implementações Adicionais (Diferenciais Técnicos)

Para elevar a qualidade da entrega e simular um ambiente real de produção, foram implementadas as seguintes funcionalidades extras:

### 1. Navegação e Página de Produto (PDP)
Foi estruturado um sistema de rotas dinâmicas. Ao clicar em "Veja mais detalhes" no modal, o usuário é direcionado para uma página exclusiva do produto (`/produto/:id`). Os dados são transferidos via `location state`.

### 2. Gerenciamento de Estado Global (CartContext)
Foi implementado um `CartProvider` utilizando Context API para gerenciar o estado do carrinho. Isso permite que produtos adicionados em diferentes partes da aplicação (Home ou PDP) sejam refletidos no contador do Header de forma persistente durante a sessão.

### 3. Filtros Reativos (ShelfTabs)
O componente de abas da vitrine é totalmente funcional, realizando a filtragem dos produtos por categoria. Foi desenvolvido um tratamento de **Empty State** para categorias que não retornam dados do JSON, mantendo a integridade visual da seção e informando o usuário.

### 4. Interatividade e Feedback
* **Newsletter**: Validação de campos com mensagens de feedback (sucesso ou erro de cadastro) integradas ao sistema de notificações.
* **Toasts**: Mensagens de confirmação ao adicionar itens ao carrinho, melhorando a percepção de resposta do sistema.

### 5. Adaptações Mobile Específicas
* **TopBar Slider**: Em dispositivos móveis, as informações da barra superior são exibidas em um carrossel para otimização de espaço.
* **Menu Hamburger**: Implementação de menu lateral retrátil para navegação mobile.
* **FullBanner Slider**: Banner principal estruturado como slider para suporte a múltiplas comunicações.

---

## Guia de Testes das Implementações

Para validar as funcionalidades implementadas:

1. **FullBanner Slider:** O banner principal da Home é um carrossel interativo. Verifique a navegação entre os banners através das setas laterais ou paginação (bullets).
2. **Vitrine e Filtros (ShelfTabs):** Na Home, altere entre as abas de categorias. A vitrine atualiza os produtos dinamicamente. Caso uma categoria não possua itens, um estado vazio é exibido.
3. **Modal de Compra (Quick View):** Clique no botão "Comprar" de qualquer card. O modal abrirá com os dados específicos do produto selecionado.
4. **Persistência do Carrinho:** Ao adicionar um item ao carrinho pelo modal, o contador no Header será atualizado. O valor se mantém ao navegar entre as páginas.
5. **Navegação para PDP:** No modal, clique em "Veja mais detalhes". O usuário será direcionado para a rota `/produto/:id`, renderizando a página de detalhes com os dados do estado.
6. **Newsletter:** No rodapé, o formulário valida os campos e exibe mensagens de feedback integradas ao sistema de notificações.
7. **Responsividade:** Através do modo de inspeção do navegador, verifique o comportamento dos sliders (TopBar e FullBanner) e do Menu Hamburger em resoluções mobile.

---

##  Organização de Pastas

```text
src/
 ├── assets/          # Ícones e imagens estáticas
 ├── components/
 │    ├── Common/     # Componentes reutilizáveis (Cards, Shelves, Modais)
 │    ├── Layout/     # Estruturas fixas da interface (Header, Footer)
 │    └── Home/       # Componentes exclusivos da página inicial
 ├── context/         # Lógica de estado global da aplicação
 ├── hooks/           # Hooks customizados para consumo de dados e lógica
 ├── pages/           # Views principais (Home e ProductDetail)
 └── styles/          # Configurações globais de SCSS, variáveis etc
