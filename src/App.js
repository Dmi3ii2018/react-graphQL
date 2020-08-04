import React from 'react';
import './App.css';
import { useQuery } from '@apollo/react-hooks';
import { loader } from 'graphql.macro';

const query = loader('./GetRegions.graphql');

function App() {
  const {data, loading} = useQuery(query, {
    variables: {searchString: "t"}
  });
  if(loading) {
    return <p>Loading...</p>
  }
  console.log(data);
  return (
    <div>
      <h1>React Apollo</h1>
    </div>
  );
}

export default App;
