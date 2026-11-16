export type AuthUser = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  avatarUrl: string | null;
  address?: string | null;
  city?: string | null;
  roles: string[];
};

export type LoginResponse = {
  accessToken: string;
  expiresIn: number;
  tokenType: string;
  user: AuthUser;
};

export type RegisterRequest = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  roleId: number;
};

export type RegisterResponse = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
};

export type LoginResult =
  | {
      success: true;
      user: AuthUser;
    }
  | {
      success: false;
      message: string;
    };

export type SignUpResult =
  | {
      success: true;
    }
  | {
      success: false;
      message: string;
    };

export type StudentSignUpFormData = {
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  confirmPassword: string;
};

export type TeacherSignUpFormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  bio?: string;
  experience?: string;
};