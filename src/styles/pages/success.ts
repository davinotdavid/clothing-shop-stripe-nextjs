import { styled } from "..";

export const SuccessContainer = styled("main", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: 656,
  margin: "0 auto",

  h1: {
    fontSize: "$2xl",
    color: "$gray100",
  },

  p: {
    fontSize: "$xl",
    color: "$gray300",
    maxWidth: 560,
    textAlign: "center",
    marginBlockStart: "2rem",
    lineHeight: 1.4,
  },

  a: {
    display: "block",
    marginBlockStart: "5rem",
    fontSize: "$lg",
    fontWeight: "700",
    color: "$green500",
    textDecoration: "none",

    "&:hover": {
      color: "$green300",
    },
  },
});

export const ImagesContainer = styled("div", {
  display: "flex",

  "div + div": {
    marginInlineStart: "-3rem",
  },
});

export const ImageContainer = styled("div", {
  width: 140,
  height: 140,
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 9999,
  padding: "0.25rem",
  marginBlockStart: "4rem",
  boxShadow: "0px 0px 60px 0px rgba(0, 0, 0, 0.80)",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    objectFit: "cover",
  },
});
