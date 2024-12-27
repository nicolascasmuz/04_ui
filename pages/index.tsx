import {
  FirstButton,
  SecondButton,
  ThirdButton,
  MuiButton,
} from "@/ui/button/index";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 25,
      }}
    >
      <FirstButton text="Submit" />
      <SecondButton>Submit</SecondButton>
      <ThirdButton>Submit</ThirdButton>
      <MuiButton>Submit</MuiButton>
    </div>
  );
}
