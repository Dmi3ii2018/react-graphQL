import React from 'react';
import { Col } from 'antd';

export const Header = (props) => {
  const { onSearchChange, searchQuery } = props;

  return (
    <Col style={{ paddingBottom: '20px', textAlign: 'center' }}>
      <h1>React+SC+Antd</h1>
      <input type="text" value={searchQuery} onChange={onSearchChange} />
    </Col>
  );
};
