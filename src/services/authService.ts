import type { LoginCredentials, User } from "../types/auth";

// "Banco de dados" simulado: em um projeto real isso viria de uma API.
const USERS = [
  {
    id: 1,
    name: "Usuário DIO",
    email: "usuario@dio.me",
    password: "123456",
  },
];

export async function authenticate({ email, password }: LoginCredentials): Promise<User> {
  await new Promise((resolve) => setTimeout(resolve, 700));

  const found = USERS.find(
    (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password,
  );

  if (!found) {
    throw new Error("E-mail ou senha inválidos.");
  }

  return { id: found.id, name: found.name, email: found.email };
}
