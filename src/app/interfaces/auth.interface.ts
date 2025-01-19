import { LoginComponent } from "../components/auth/login/login.component";

export interface User {
    id: number;
    email: string;
    password: string;
    name: string;
    role: string;
  }
  
  export interface LoginResponse {
    user: User;
    token: string;
  }






