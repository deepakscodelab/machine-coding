# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

# Machine Coding - UI Components

A collection of React + TypeScript machine coding interview questions and solutions. This repo contains various UI components commonly asked in frontend interview rounds.

## 🎯 Components Included

- **Pagination** - Implement paginated product listing with page size selector
- **Autocomplete** - Search with caching and debouncing
- **Tab Form** - Multi-step form with validation across tabs
- **Profile** - Form component with dynamic field handling
- **Interest Selection** - Multi-select component
- **Settings** - Configuration panel

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool with HMR
- **CSS** - Styling

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+)
- npm or yarn

### Installation

```bash
npm install
npm run dev
```

### Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

## 📋 Project Structure

```
src/
├── components/
│   ├── Pagination/
│   ├── Autocomplete/
│   ├── TabForm/
│   │   ├── Profile.tsx
│   │   ├── Interest.tsx
│   │   └── Settings.tsx
│   └── ...
├── App.tsx
└── main.tsx
```

## 💡 Key Concepts Covered

- **State Management** - useState, useEffect, useCallback
- **Performance** - useMemo, useCallback, debouncing, caching
- **Type Safety** - TypeScript interfaces and generics
- **Form Handling** - Controlled components, validation
- **UI Patterns** - Pagination, search, multi-step forms, tabs

## 🔧 ESLint Configuration

For stricter type checking in production, update your ESLint config to enable type-aware rules:

```js
tseslint.configs.strictTypeChecked
```

Optional: Add React-specific lint rules:

```js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'
```

## 📝 Interview Tips

- Focus on component reusability
- Handle edge cases (empty states, loading, errors)
- Optimize performance (memoization, caching)
- Write clean, readable code
- Add proper TypeScript types
- Consider accessibility (aria labels, semantic HTML)

## 📚 Resources

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vite.dev/guide/)

---

**Practice hard, code clean! 🚀**
