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
    //TODO:  Simulate a login API call

    const validationError = validateLogin(username, password);
    if (validationError) {
      return { success: false, message: validationError };
    }

    if (username === "Bao" && password === "Test@123") {
      setIsLoggedIn(true);
      return { success: true } as LoginResult;
    } else {
            console.log(username, password);

      return { success: false,
               message: "Invalid username or password" };
    }
  };

  const logout = () => setIsLoggedIn(false);

  function validateLogin(username: string, password: string): string | null {
    if (!username.trim()) {
      return "Username is required";
    }

    if (username.length < 3 || username.length > 20) {
      return "Username must be between 3 and 20 characters";
    }

    if (!/^[a-zA-Z0-9_]+$/.test(username)) {
      return "Username can only contain letters, numbers and underscores";
    }

    if (!password) {
      return "Password is required";
    }

    if (password.length < 8) {
      return "Password must be at least 8 characters";
    }

    if (!/[a-z]/.test(password)) {
      return "Password must contain at least one lowercase letter";
    }

    if (!/[A-Z]/.test(password)) {
      return "Password must contain at least one uppercase letter";
    }

    if (!/\d/.test(password)) {
      return "Password must contain at least one number";
    }

    if (!/[^a-zA-Z\d]/.test(password)) {
      return "Password must contain at least one special character";
    }

    return null;
  }

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