"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import type {    
  AuthUser,
      LoginResult,
      SignUpResult,
      StudentSignUpFormData,
      TeacherSignUpFormData,
} from "@/types/auth";

import { validateEmail, validateSignUp } from "@/validators/authValidator";
import {users} from "@/data/users";
import type { User } from "@/types/users";
import {
    loginApi,
    registerApi,
    getCurrentUserApi,
  } from "@/services/authService";

  const TOKEN_STORAGE_KEY = "learnflow_access_token";


type AuthContextType = {
  login: (email: string, password: string) => Promise<LoginResult>;
  logout: () => void;
  currentUser: AuthUser | null;
  setCurrentUser: (user: AuthUser | null) => void;
  isLoading: boolean;
  StudentSignUp: (student: StudentSignUpFormData) => Promise<SignUpResult>;
  TeacherSignUp: (teacher: TeacherSignUpFormData) => Promise<SignUpResult>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

// Tự động lấy thông tin user từ token khi F5 / khởi động app
useEffect(() => {
  async function loadUserFromToken() {
    const token = localStorage.getItem(TOKEN_STORAGE_KEY);
    if (!token) {
      setIsLoading(false);
      return;
    }

    try {
      const user = await getCurrentUserApi(token);
      setCurrentUser(user);
    } catch {
      // Token hết hạn hoặc không hợp lệ -> xóa token
      localStorage.removeItem(TOKEN_STORAGE_KEY);
      setCurrentUser(null);
    } finally {
      setIsLoading(false);
    }
  }

  loadUserFromToken();
}, []);

  async function StudentSignUp(user: StudentSignUpFormData): Promise<SignUpResult> {
    const validationError = validateSignUp(user.firstName,user.lastName, user.email, user.password, user.confirmPassword);
    if (validationError) {
      return Promise.resolve({ success: false, message: validationError });
    }

    try {
      console.log("Registering student:", user);
      const response = await registerApi({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: user.password,
        roleId: 2, // Assuming 2 is the role ID for students
      });
          return { success: true };
    } catch (error) {
      return Promise.resolve({ success: false, message: "Failed to sign up as student" });
    }

  }

  async function TeacherSignUp(user: TeacherSignUpFormData): Promise<SignUpResult> {
    const validationError = validateSignUp(user.firstName,user.lastName, user.email, user.password, user.confirmPassword);
    if (validationError) {
      return Promise.resolve({ success: false, message: validationError });
    }
    try {
      await registerApi({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: user.password,
        roleId: 3, // Role Instructor/Teacher trong DB (1 = Admin, 2 = Student, 3 = Instructor)
      });

      return { success: true };
    } catch (error) {
      return {
        success: false,
        message: error instanceof Error ? error.message : "Registration failed",
      };
    }
  }

async function login(email: string, password: string) : Promise<LoginResult> {
  const emailError = validateEmail(email);
  if (emailError) {
    return { success: false, message: emailError };
  }
  if (!password) {
        return { success: false, message: "Password is required" };
  }
    
  try {
    const response = await loginApi(email, password);
    localStorage.setItem(TOKEN_STORAGE_KEY, response.accessToken);

    // Gọi thêm /api/users/me (hoặc dùng trực tiếp response.user)
    // const fullUser = await getCurrentUserApi(response.accessToken).catch(
    //   () => response.user
    // );

    setCurrentUser(response.user);
    return { success: true, user: response.user };
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : "Invalid email or password",
    };
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
      TeacherSignUp,
      isLoading
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