import styled from "styled-components";

export const Page = styled.main`
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 20px;
`;

export const Card = styled.section`
  width: 100%;
  max-width: 400px;
  padding: 32px;
  text-align: center;
  background: #1c1c26;
  border-radius: 16px;
`;

export const Title = styled.h1`
  margin: 0 0 8px;
  color: #fff;
`;

export const Text = styled.p`
  margin: 0 0 24px;
  color: #c9c9d4;
`;

export const LogoutButton = styled.button`
  padding: 12px 28px;
  border: none;
  border-radius: 22px;
  background: #565656;
  color: #fff;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    filter: brightness(1.2);
  }
`;
