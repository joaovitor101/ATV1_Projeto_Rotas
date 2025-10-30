/* Interface para estrutura básica de perfil do usuário */
export interface UserProfile {
    name: string;
    email: string;
    fileUri?: string;
    location?: string; // Formato: "Cidade, Estado, País"
  }
  