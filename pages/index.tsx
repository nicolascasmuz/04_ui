import {
  FirstButton,
  SecondButton,
  ThirdButton,
  MuiButton,
} from "@/ui/button/index";
import { StyledTitle } from "@/ui/styled-title/index";
import { Background } from "@/ui/background/index";

export default function Home() {
  return (
    <Background>
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 25,
        }}
      >
        <StyledTitle>Styled title</StyledTitle>
        <FirstButton text="Submit" />
        <SecondButton>Submit</SecondButton>
        <ThirdButton>Submit</ThirdButton>
        <MuiButton>Submit</MuiButton>
      </div>
    </Background>
  );
}
