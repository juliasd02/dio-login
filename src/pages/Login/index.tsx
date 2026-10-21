import { useState } from "react";
import { useForm } from "react-hook-form";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import type { LoginCredentials } from "../../types/auth";
import {
  Page,
  Card,
  Logo,
  Title,
  Subtitle,
  Field,
  Label,
  Input,
  FieldError,
  SubmitButton,
  FormError,
  Hint,
} from "./styles";

export default function Login() {
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [authError, setAuthError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginCredentials>();

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  async function onSubmit(data: LoginCredentials) {
    setAuthError("");
    try {
      await login(data);
      navigate("/", { replace: true });
    } catch (error) {
      setAuthError(error instanceof Error ? error.message : "Erro ao fazer login.");
    }
  }

  return (
    <Page>
      <Card onSubmit={handleSubmit(onSubmit)} noValidate>
        <Logo>dio</Logo>
        <Title>Olá, bem-vindo de volta!</Title>
        <Subtitle>Faça seu login e continue sua jornada.</Subtitle>

        <Field>
          <Label htmlFor="email">E-mail</Label>
          <Input
            id="email"
            type="email"
            placeholder="seu@email.com"
            $hasError={!!errors.email}
            {...register("email", {
              required: "O e-mail é obrigatório",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "E-mail inválido",
              },
            })}
          />
          {errors.email && <FieldError>{errors.email.message}</FieldError>}
        </Field>

        <Field>
          <Label htmlFor="password">Senha</Label>
          <Input
            id="password"
            type="password"
            placeholder="••••••"
            $hasError={!!errors.password}
            {...register("password", {
              required: "A senha é obrigatória",
              minLength: { value: 6, message: "Mínimo de 6 caracteres" },
            })}
          />
          {errors.password && <FieldError>{errors.password.message}</FieldError>}
        </Field>

        {authError && <FormError role="alert">{authError}</FormError>}

        <SubmitButton type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Entrando..." : "Entrar"}
        </SubmitButton>

        <Hint>
          Para testar: <strong>usuario@dio.me</strong> / <strong>123456</strong>
        </Hint>
      </Card>
    </Page>
  );
}
