export type LoginResult =
  | {
      success: true;
    }
  | {
      success: false;
      message: string;
    };



export type StudentSignUpFormData = {
  username: string;
  password: string;
  email: string;
  confirmPassword: string;
}

export type TeacherSignUpFormData = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  bio: string;
  experience: string;
};