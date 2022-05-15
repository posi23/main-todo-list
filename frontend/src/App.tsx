import React, { useState } from 'react';
import './App.css';
import MainCard from './components/MainCard';

function App() {

  const [activeTab, setActiveTab] = useState<HTMLDivElement | null>(null)

  return (

    <MainCard activeTab={{ activeTab, setActiveTab }} />
  );
}

export default App;
