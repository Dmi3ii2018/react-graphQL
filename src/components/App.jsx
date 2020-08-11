import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { loader } from 'graphql.macro';
import { Spin } from 'antd';
import { Header } from './header';
import { OfferCards } from './Cards/cards';
import 'antd/dist/antd.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const query = loader('../GetRegions.graphql');

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const { data, loading } = useQuery(query, {
    variables: { searchString: searchQuery },
  });

  const onSearchChange = (evt) => setSearchQuery(evt.target.value.trim());

  console.log(data);
  return (
    <>
      <Header
        onSearchChange={onSearchChange}
        searchQuery={searchQuery}
      />
      {/* <ButtonsContainer /> */}
      {/* <RadioButtonGroup /> */}
      <div>
        {loading ? <Spin /> : null}
        {data ? <OfferCards data={data} /> : null}
      </div>
    </>
  );
}

export default App;
