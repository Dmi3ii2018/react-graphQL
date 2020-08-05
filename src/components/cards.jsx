import React from 'react';
import { Col, Card } from 'antd';

export const Cards = (props) => {
  const { regionList } = props.data;

  if (regionList == null) return null;

  return (
    regionList.map((region) => (
      <Col span={8} gutter={3} key={region.id}>
        <Card
					title={region.name}
					hoverable
				>
					{`id: ${region.id}`}
				</Card>
      </Col>
    )
    )
  );
};
