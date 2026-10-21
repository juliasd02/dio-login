import { createContext, useContext, useState, type ReactNode } from "react";
import { authenticate } from "../services/authService";
import type { AuthContextData, LoginCredentials, User } from "../types/auth";

const STORAGE_KEY = "dio-login:user";

const AuthContext = createContext<AuthContextData | undefined>(undefined);

function loadStoredUser(): User | null {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? (JSON.parse(stored) as User) : null;
  } catch {
    return null;
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(loadStoredUser);

  async function login(credentials: LoginCredentials) {
    const authenticated = await authenticate(credentials);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(authenticated));
    setUser(authenticated);
  }

  function logout() {
    localStorage.removeItem(STORAGE_KEY);
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
}
