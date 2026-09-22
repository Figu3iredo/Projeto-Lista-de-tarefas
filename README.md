# 📋 Lista de Tarefas

Aplicação de lista de tarefas (To-Do List) construída com **React** e **Vite**. Permite adicionar, concluir, remover, buscar, filtrar e ordenar tarefas, com persistência automática no navegador.

## ✨ Funcionalidades

- **Adicionar tarefa** com descrição e categoria (Trabalho, Estudos ou Pessoal)
- **Marcar como concluída** (risca o texto da tarefa)
- **Remover tarefa** da lista
- **Buscar** tarefas por texto
- **Filtrar** por status: todas, concluídas ou pendentes
- **Ordenar** alfabeticamente (A-Z / Z-A)
- **Persistência local**: as tarefas ficam salvas no `localStorage` do navegador, então não se perdem ao recarregar a página

## 🛠️ Tecnologias

- [React](https://react.dev/) 19
- [Vite](https://vitejs.dev/)
- ESLint

## 📁 Estrutura do Projeto

\```
list/
├── src/
│   ├── App.jsx              # Estado central e lógica da aplicação
│   ├── App.css               # Estilos
│   ├── main.jsx               # Ponto de entrada da aplicação
│   └── components/
│       ├── Todo.jsx           # Renderiza uma tarefa individual
│       ├── TodoForm.jsx       # Formulário para adicionar tarefas
│       ├── Search.jsx         # Campo de busca
│       └── Filter.jsx         # Filtro de status e ordenação
└── public/
\```

## 🚀 Como rodar o projeto

Pré-requisitos: [Node.js](https://nodejs.org/) instalado.

\```bash
# Clone o repositório
git clone https://github.com/Figu3iredo/Projeto-Lista-de-tarefas.git

# Entre na pasta do projeto
cd Projeto-Lista-de-tarefas/list

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
\```

A aplicação estará disponível em `http://localhost:5173`.

### Outros comandos

\```bash
npm run build     # Gera a versão de produção
npm run preview   # Pré-visualiza a versão de produção
npm run lint      # Roda o linter (ESLint)
\```

## 💡 Como usar

1. Digite o texto da tarefa e selecione uma categoria no formulário
2. Clique em **Adicionar**
3. Use os botões **Completar** e **X** para marcar como concluída ou remover uma tarefa
4. Use a barra de pesquisa para encontrar tarefas específicas
5. Use os filtros para visualizar apenas tarefas pendentes ou concluídas, e ordene a lista alfabeticamente

## 📌 Possíveis melhorias futuras

- Edição de tarefas existentes
- Datas de prazo (deadline)
- Testes automatizados
