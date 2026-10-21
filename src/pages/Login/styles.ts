import styled from "styled-components";

export const Page = styled.main`
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 20px;
`;

export const Card = styled.form`
  width: 100%;
  max-width: 400px;
  padding: 32px;
  background: #1c1c26;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
`;

export const Logo = styled.span`
  display: block;
  margin-bottom: 16px;
  font-size: 32px;
  font-weight: 800;
  color: #fff;
  letter-spacing: -1px;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 22px;
  color: #fff;
`;

export const Subtitle = styled.p`
  margin: 6px 0 20px;
  color: #8a8a99;
`;

export const Field = styled.div`
  margin-bottom: 16px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 6px;
  font-size: 14px;
  color: #c9c9d4;
`;

export const Input = styled.input<{ $hasError?: boolean }>`
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid ${({ $hasError }) => ($hasError ? "#e4105d" : "#3b3450")};
  background: #11111a;
  color: #fff;
  font-size: 16px;
  outline: none;

  &:focus {
    border-color: ${({ $hasError }) => ($hasError ? "#e4105d" : "#23dd7a")};
  }
`;

export const FieldError = styled.p`
  margin: 4px 0 0;
  font-size: 12px;
  color: #e4105d;
`;

export const FormError = styled.p`
  margin: 0 0 12px;
  padding: 10px 12px;
  border-radius: 8px;
  background: rgba(228, 16, 93, 0.12);
  color: #ff5c93;
  font-size: 14px;
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 14px;
  border: none;
  border-radius: 22px;
  background: #e4105d;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    filter: brightness(1.15);
  }

  &:disabled {
    opacity: 0.6;
    cursor: wait;
  }
`;

export const Hint = styled.p`
  margin: 16px 0 0;
  font-size: 12px;
  text-align: center;
  color: #8a8a99;

  strong {
    color: #c9c9d4;
  }
`;
