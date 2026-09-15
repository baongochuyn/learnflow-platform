"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import type { LoginResult } from "@/types/auth";

type AuthContextType = {
  isLoggedIn: boolean;
  login: (username: string, password: string) => Promise<LoginResult>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Default: chưa đăng nhập

  async function login(username: string, password: string) {
    // Simulate a login API call
    // In a real application, you would make an actual API request here
    if (username === "Bao" && password === "Test@123") {
      setIsLoggedIn(true);
      return { success: true } as LoginResult;
    } else {
            console.log(username, password);

      return { success: false, message: "Invalid username or password" } as LoginResult;
    }
  };

  const logout = () => setIsLoggedIn(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};