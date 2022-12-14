import React from "react";
import styled from "styled-components";

type BtnProps = {
  onClick: () => void;
};

interface Button extends BtnProps {
  children: React.ReactNode | React.ReactNode[];
}

const OriginalBtn = (props: Button) => {
  const { onClick, children } = props;
  return (
    <WriteBtn type="button" onClick={onClick}>
      {children}
    </WriteBtn>
  );
};

export default OriginalBtn;

const WriteBtn = styled.button`
  box-shadow: 0 0 5px 1px #00000050;
  border-radius: ${({ theme }) => theme.ROUND.xs};
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.COLOR.original};
  color: white;
  transition: all 0.15s;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 1;
  }
`;
