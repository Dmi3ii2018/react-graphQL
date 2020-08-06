import React from 'react';
import { Col } from 'antd';
import { Button, GreenButton } from './button';
import styled from 'styled-components';

const StyledCol = styled.div`
  &&& {
    .ant-col {
      text-align: center;
    }
  }
`;

// const StyledCol = styled(Col)`
//   text-align: center;
// `;

export const ButtonsContainer = () => {
    return (
      <StyledCol>
        <Col>
          <Button>Main</Button>
          <Button primary>Primary</Button>
          <GreenButton>Extended</GreenButton>
          <Button as="a" href="#">Link</Button>
        </Col>
      </StyledCol>
    )
}
