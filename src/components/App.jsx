import React, { useState, Profiler } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { loader } from 'graphql.macro';
import { Row, Spin } from 'antd';
import { Header } from './header';
import { Cards } from './Cards/cards';
import { ButtonsContainer } from './buttons-container';
import { RadioButtonGroup } from './radio-button-group';
import 'antd/dist/antd.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const query = loader('../GetRegions.graphql');

function App() {
  const [searchQuery, setSearchQuery] = useState(' ');

  const { data, loading } = useQuery(query, {
    variables: { searchString: searchQuery },
  });

  const onSearchChange = (evt) => setSearchQuery(evt.target.value.trim());

  const logProfile = (id, phase, actualTime, baseTime, startTime, commitTime) => {
    // console.log(`${id}'s ${phase} phase:`);
    // console.log(`Actual time: ${actualTime}`);
    // console.log(`Base time: ${baseTime}`);
    // console.log(`Start time: ${startTime}`);
    // console.log(`Commit time: ${commitTime}`);
  };

  console.log(data);
  return (
    <Profiler id="Row" onRender={logProfile}>
      <Header
        onSearchChange={onSearchChange}
        searchQuery={searchQuery}
      />
      {/* <ButtonsContainer /> */}
      {/* <RadioButtonGroup /> */}
      <div>
        {loading ? <Spin /> : null}
        {data ? <Cards data={data} /> : null}
      </div>
    </Profiler>
  );
}

export default App;
