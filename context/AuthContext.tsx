"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import type { LoginResult } from "@/types/auth";
import { validateLogin, validateSignUp } from "@/validators/authValidator";
import {users} from "@/data/users";
import type { StudentSignUpFormData, TeacherSignUpFormData } from "@/types/auth";
import type { User } from "@/types/users";

type AuthContextType = {
  login: (username: string, password: string) => Promise<LoginResult>;
  logout: () => void;
  currentUser: User | null;
  setCurrentUser: (user: User | null) => void;
  StudentSignUp: (student: StudentSignUpFormData) => Promise<LoginResult>;
  TeacherSignUp: (teacher: TeacherSignUpFormData) => Promise<LoginResult>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Default: chưa đăng nhập
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  async function StudentSignUp(user: StudentSignUpFormData): Promise<LoginResult> {
    const validationError = validateSignUp(user.username, user.email, user.password, user.confirmPassword);
    if (validationError) {
      return Promise.resolve({ success: false, message: validationError });
    }
    const newUser = { id: users.length + 1, username: user.username, email: user.email, password: user.password, roleId: 1 };
    users.push(newUser);

    return Promise.resolve({ success: true });
  }

  async function TeacherSignUp(user: TeacherSignUpFormData): Promise<LoginResult> {
    const validationError = validateSignUp(user.username, user.email, user.password, user.confirmPassword);
    if (validationError) {
      return Promise.resolve({ success: false, message: validationError });
    }
    const newUser = { id: users.length + 1, username: user.username, email: user.email, password: user.password, roleId: 2 };
    users.push(newUser);

    return Promise.resolve({ success: true });
  }

  async function login(username: string, password: string) {
    //TODO:  Simulate a login API call

    const validationError = validateLogin(username, password);
    if (validationError) {
      return { success: false, message: validationError };
    }
    // find the user in the users array
    const user = users.find((user) => user.username === username && user.password === password);
    if (user) {
      setCurrentUser(user);
      return { success: true } as LoginResult;
    } else {
      return { success: false, message: "Invalid username or password" };
    }
  }

  function logout() {
     setCurrentUser(null);
    };

  return (
    <AuthContext.Provider value={{ 
      currentUser,
      login, 
      logout, 
      setCurrentUser,
      StudentSignUp,
      TeacherSignUp
    }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};