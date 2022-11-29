import * as Styled from "./styles";

import { KeyboardArrowUp } from "styled-icons/material-outlined";

const GoTop = ({ handleClick }) => {
  return (
    <Styled.Container href="#" onClick={handleClick} arial-label="Go to top">
      <KeyboardArrowUp />
    </Styled.Container>
  );
};

export default GoTop;
