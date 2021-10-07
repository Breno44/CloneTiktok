import styled from "styled-components";

export default styled.button`
  width: 100%;
  font-size: ${(props) => (props.fontSize != null ? `${props.fontSize}px` : "18px")};
  font-weight: 700;
  height: 100%;
  background-color: ${(props) => "#fe2c55"};
  border: none;
  background: ${(props) => (props.outlined ? "#fff" : "#fe2c55")};
  border: ${(props) => (props.outlined ? `1px solid "#fe2c55"` : none)};
  color: ${(props) => (props.outlined ? "#fe2c55" : "#fff")};
  cursor: pointer;
  :hover {
    background: ${(props) => (props.outlined ? "rgba(22, 24, 35, 0.03)" : "#fe2c55")};
  }
`;
