import { useAuth } from "../../context/AuthContext";
import { Page, Card, Title, Text, LogoutButton } from "./styles";

export default function Home() {
  const { user, logout } = useAuth();

  return (
    <Page>
      <Card>
        <Title>Olá, {user?.name}! 👋</Title>
        <Text>Você está autenticado como {user?.email}.</Text>
        <LogoutButton onClick={logout}>Sair</LogoutButton>
      </Card>
    </Page>
  );
}
