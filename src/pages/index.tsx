import { styled } from "@/styles";

const Button = styled("button", {
  backgroundColor: "$primary",
  borderRadius: 4,
  border: 0,
  padding: "4px 8px",
});

export default function Home() {
  return (
    <>
      <h1>Hey</h1>
      <Button>Send</Button>
    </>
  );
}
