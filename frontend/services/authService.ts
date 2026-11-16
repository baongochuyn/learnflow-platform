import type {
  AuthUser,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
} from "@/types/auth";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    const error = await response.json().catch(() => null);

    throw new Error(
      error?.message ?? `Request failed with status ${response.status}`
    );
  }

  return response.json() as Promise<T>;
}

export async function loginApi(
  email: string,
  password: string
): Promise<LoginResponse> {
  const response = await fetch(`${API_URL}/Auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  return handleResponse<LoginResponse>(response);
}

export async function registerApi(
  request: RegisterRequest
): Promise<RegisterResponse> {
  const response = await fetch(`${API_URL}/Auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request),
  });

  return handleResponse<RegisterResponse>(response);
}

export async function getCurrentUserApi(token: string): Promise<AuthUser> {
  const response = await fetch(`${API_URL}/api/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  return handleResponse<AuthUser>(response);
}