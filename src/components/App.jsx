import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { loader } from 'graphql.macro';
import { Row, Spin } from 'antd';
import { Header } from './header';
import { Cards } from './cards';
import 'antd/dist/antd.css';

const query = loader('../GetRegions.graphql');

function App() {
  const [searchQuery, setSearchQuery] = useState(' ');

  const { data, loading } = useQuery(query, {
    variables: { searchString: searchQuery },
  });

  const onSearchChange = (evt) => setSearchQuery(evt.target.value.trim());

  console.log(data);
  return (
    <Row
      style={{ padding: '0 10%', flexDirection: 'column' }}
      gutter={16}
      justify="center"
    >
      <Header
        onSearchChange={onSearchChange}
        searchQuery={searchQuery}
      />
      <Row gutter={[24, 24]} justify="start">
        {loading ? <Spin /> : null}
        {data ? <Cards data={data} /> : null}
      </Row>
    </Row>
  );
}

export default App;
