import React, { useState } from 'react';
import './App.css';
import { useQuery } from '@apollo/react-hooks';
import { loader } from 'graphql.macro';

const query = loader('./GetRegions.graphql');

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const {data, loading} = useQuery(query, {
    variables: {searchString: searchQuery}
  });

  const onSearchChange = (evt) => setSearchQuery(evt.target.value);

  console.log(data);
  return (
    <div>
      <h1>React Apollo</h1>
      <input type="text" value={searchQuery} onChange={onSearchChange} />
      {loading ? <p>Loading...</p> : null}
    </div>
  );
}

export default App;
