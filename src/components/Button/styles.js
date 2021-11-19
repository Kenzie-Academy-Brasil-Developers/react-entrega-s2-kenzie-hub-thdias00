import styled from "styled-components";

export const Container = styled.button`
  background: ${(props) => (props.graySchema ? "#f5f5f5" : "#403CAA")};
  color: ${(props) => (props.graySchema ? "#999999" : "#ffffff")};
  height: 60px;
  border-radius: 8px;
  border: 0;
  padding: 20px 0;
  width: 80%;
  font-weight: 600;
  transition: 0.5s;
`;