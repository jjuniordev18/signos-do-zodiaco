# Zodíaco App

Aplicação React de astrologia para consulta de signos, horóscopo diário e compatibilidade.

## Tech Stack

- **React 18** + Vite
- **TailwindCSS** para estilos
- **Vitest** para testes

## Getting Started

```bash
# Instalar dependências
npm install

# Desenvolvimento
npm run dev

# Build Produção
npm run build

# Testes
npm test
```

## Estrutura

```
src/
├── components/     # Componentes React
├── data/          # Dados JSON dos signos
├── utils/         # Funções utilitárias
└── test/         # Setup de testes
```

## Funcionalidades

- Descobrimento de signo pela data de nascimento
- Horóscopo diário (amor, carreira, saúde, finanças)
- Previsão semanal
- Números da sorte
- Fase atual da Lua
- Compatibilidade entre signos
- Informações do planeta regente

## Deploy

```bash
npm run build
# Pasta dist pronta para upload
```