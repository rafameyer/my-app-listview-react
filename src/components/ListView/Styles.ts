import styled from "styled-components";

const Struct = styled.div`
  overflow-y: scroll;
  height: 750px;
`;

const CardContent = styled.div`
  flex-direction: "row";
  margin-left: "15px";
  margin-right: "15px";
`;

const LeftWrapperElement = styled.div`
  float: left;
`;

export { CardContent, LeftWrapperElement, Struct };
