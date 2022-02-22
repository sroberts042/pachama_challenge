import { React, useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route } from "react-router-dom";

import ForestCardGrid from './components/ForestCardGrid';
import Forest from './components/Forest';

import './App.css';

function App() {

  const [forests, setForests] = useState([]);

  useEffect(() => {
    getForests();
  }, []);

  const getForests = () => {
    axios.get('http://localhost:9096/forests/',
      {headers:
        {'Access-Control-Allow-Origin': '*'}
      })
    .then((response) => {
      setForests(response.data);
    })
    .catch(error => console.log(error))
  }

  const normalizeForestName = (name) => {
    let splitName = name.split(' ');
    let hyphenName = splitName.join('-');
    return hyphenName;
  }

  return (
    <Routes>
      <Route path="/" element={<ForestCardGrid forests={forests}/>} />
      {forests.map((forest, index) => {
        return <Route path={normalizeForestName(forest.name)+'/*'} element={<Forest id={forest.id}/>} />
      })}
    </Routes>
  );
}

export default App;
