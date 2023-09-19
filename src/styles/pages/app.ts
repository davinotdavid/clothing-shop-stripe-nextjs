import { styled } from "..";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  minHeight: "100vh",
});

export const Header = styled("header", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "2rem",
  width: "100%",
  maxWidth: 1180,
  margin: "0 auto",

  button: {
    position: "relative",
    border: 0,
    backgroundColor: "$gray800",
    color: "$gray400",
    borderRadius: 6,
    padding: "0.75rem",
    cursor: "pointer",

    "&:hover": {
      color: "$gray100",
    },

    span: {
      position: "absolute",
      top: -7,
      right: -7,
      width: 24,
      height: 24,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 9999,
      backgroundColor: "$green500",
      color: "$white",
      outline: "3px solid $gray900",
      fontWeight: "700",
      fontSize: "$sm",
    },
  },
});
