import styles from "./button.module.css";
import styled from "styled-components";
import Button from "@mui/material/Button";

const BaseButton = styled.button`
  background-color: #ac1a22;
  font-family: "montserrat", cursive;
  font-size: 20px;
  color: #f0efda;
  border-radius: 5px;
  width: 150px;
  height: 40px;
`;

export function FirstButton({ text }: any) {
  return <button className={styles["primary-button"]}>{text}</button>;
}

export const SecondButton = styled(BaseButton)`
  background-color: #000;
  color: #fff;
`;

export function ThirdButton({ children }: any) {
  return <BaseButton>{children}</BaseButton>;
}

export function MuiButton({ children }: any) {
  return <Button>{children}</Button>;
}
