export function validateUsername(username: string): string | null {
    if (!username.trim()) {
      return "Username is required";
    }

    if (username.length < 3 || username.length > 20) {
      return "Username must be between 3 and 20 characters";
    }

    if (!/^[a-zA-Z0-9_]+$/.test(username)) {
      return "Username can only contain letters, numbers and underscores";
    }

    return null;
}

export function validatePassword(password: string): string | null {
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

export function validateEmail(email: string): string | null {
    if (!email.trim()) {
      return "Email is required";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return "Invalid email format";
    }

    return null;
}


export function validateLogin(username: string, password: string): string | null {
    
  if (!username.trim()) {
    return "Username is required";
  }

  if (!password) {
    return "Password is required";
  }

  return null;
  }

  export function validateSignUp(
  username: string,
  email: string,
  password: string,
  confirmPassword: string
): string | null {
  
    const usernameError = validateUsername(username);
    if (usernameError) {
      return usernameError;
    }

    const passwordError = validatePassword(password);
    if (passwordError) {
      return passwordError;
    }

    const emailError = validateEmail(email);
    if (emailError) {
      return emailError;
    }

    if (password !== confirmPassword) {
      return "Passwords do not match";
    }
    return null;
}