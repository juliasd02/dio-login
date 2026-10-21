# DIO - Tela de Login com TypeScript

Tela de login com autenticação e rotas protegidas, feita com **React**, **TypeScript**, **Vite**, **styled-components**, **react-hook-form** e **React Router**.

## Funcionalidades

- Formulário de login com validação (e-mail válido, senha com mínimo de 6 caracteres)
- Autenticação simulada em um serviço (`authService`) com tratamento de erro
- Contexto de autenticação (`AuthContext`) com `login`, `logout` e persistência da sessão no `localStorage`
- Rota protegida: usuários não autenticados são redirecionados para `/login`
- Tela inicial com saudação ao usuário e botão de sair

## Conceitos de TypeScript aplicados

- `interface` para modelar `User`, `LoginCredentials` e `AuthContextData`
- Tipagem de props, estados (`useState<User | null>`) e funções assíncronas (`Promise<User>`)
- Generics em hooks e contexto (`createContext<AuthContextData | undefined>`, `useForm<LoginCredentials>`)
- `import type` e tipagem de componentes estilizados (`styled.input<{ $hasError?: boolean }>`)

## Usuário para teste

| E-mail | Senha |
|---|---|
| `usuario@dio.me` | `123456` |

## Estrutura

```
src/
├── components/   # ProtectedRoute
├── context/      # AuthContext
├── pages/        # Login e Home
├── services/     # authService (autenticação simulada)
├── styles/       # estilos globais
└── types/        # interfaces TypeScript
```

## Como rodar

```bash
npm install
npm run dev
```

Abra o link exibido no terminal (geralmente `http://localhost:5173`).
