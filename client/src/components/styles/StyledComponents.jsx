import { styled } from "@mui/material";
import { Link as LinkComponent } from "react-router-dom";
import { inputTextColor } from "../../constants/color";

export const VissuallyHiddenInput = styled("input")({
  position: "absolute",
  width: "1px",
  height: "1px",
  padding: "0",
  margin: "-1px",
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  border: "0",
});

export const Link = styled(LinkComponent)`
text-decoration: none;
color: black;
padding: 0.5rem;
&:hover {
    background-color: rgba(0, 0, 0, 0.1);
`;

export const InputBox = styled("input")`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  padding: 0 3rem;
  border-radius: 1.5rem;
  background-color: ${inputTextColor};
`;

const SearchField = styled("input")`
  padding: 0.6rem 1.2rem;
  width: 20vmax;
  border: none;
  outline: none;
  border-radius: 1rem;
  background-color: rgb(152 148 148 / 58%);
  font-size: 1.1rem;
`;

const CurveButton = styled("button")`
  border-radius: 1rem;
  padding: 0.6rem 1.2rem;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: green;
  color: white;
  font-size: 1rem;
  &:hover {
    background-color: #012801;
  }
`;

export { SearchField, CurveButton };
