export interface LoginData {
  email: string;
  password: string;
}

export interface Message {
  message: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  password?: string;
  password_confirmation?: string;
}
