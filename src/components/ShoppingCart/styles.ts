import { styled } from "@/styles";

export const CartContainer = styled("aside", {
  position: "absolute",
  top: 0,
  right: 0,
  width: 480,
  height: "100dvh",
  padding: "1.5rem",
  backgroundColor: "$gray800",
  boxShadow: "-4px 0px 30px 0px rgba(0, 0, 0, 0.80)",

  variants: {
    isOpen: {
      open: {
        transform: "translateX(0%)",
      },
      closed: {
        transform: "translateX(110%)",
      },
    },
  },

  h2: {
    fontSize: "$lg",
    fontWeight: "700",
    marginBlockEnd: "2rem",
  },

  ul: {
    display: "flex",
    alignItems: "center",
    gap: "1.5rem",

    li: {
      display: "flex",
      alignItems: "flex-start",
      gap: "1.25rem",
    },
  },
});

export const CloseButtonContainer = styled("div", {
  display: "flex",
  justifyContent: "end",
  marginBlockEnd: "1.5rem",

  button: {
    border: 0,
    backgroundColor: "transparent",
    color: "$gray400",
    cursor: "pointer",

    "&:hover": {
      color: "$gray100",
    },
  },
});

export const CartItemImageContainer = styled("div", {
  borderRadius: 8,
  background: "linear-gradient(180deg, #1EA483 0%, #7465D4 100%)",

  img: {
    width: 101,
    height: 93,
    objectFit: "cover",
  },
});

export const CartItemTextContainer = styled("div", {
  span: {
    display: "block",
  },

  "span + span": {
    marginBlockStart: "0.25rem",
  },

  button: {
    marginBlockStart: "0.5rem",
    border: 0,
    backgroundColor: "transparent",
    color: "$green500",
    fontWeight: "700",
    fontSize: "1rem",
    cursor: "pointer",

    "&:hover": {
      color: "$green300",
    },
  },
});

export const SummaryContainer = styled("footer", {
  marginBlockStart: "2rem",

  div: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  button: {
    width: "100%",
    padding: "1.25rem",
    borderRadius: 8,
    backgroundColor: "$green500",
    border: 0,
    color: "$white",
    fontSize: "$md",
    fontWeight: "700",
    cursor: "pointer",

    "&:hover": {
      backgroundColor: "$green300",
    },
  },
});

export const PriceRow = styled("div", {
  margin: "0.25rem 0 3.43rem",
  fontWeight: "700",

  "& :first-child": {
    fontSize: "$md",
  },

  "& :last-child": {
    fontSize: "$xl",
  },
});
