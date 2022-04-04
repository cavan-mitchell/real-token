import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
  border-radius: 50px;
  white-space: nowrap;
  border: none;
  outline: none;
  cursor: pointer;
  font-weight: 800;
  display: flex;
  font-size: ${({ fontbig }) => (fontbig ? "20px" : "16px")};
  justify-content: center;
  transition: all 0.2s ease-in-out;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  align-items: center;
  color: ${({ dark }) => (dark ? "#010606" : "#fff")};
  background: ${({ primary }) => (primary ? "#01BF71" : "#010606")};

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#fff" : "#01BF71")};
    color: ${({ primary }) => (primary ? "#01BF71" : "#fff")};
  }
`;
