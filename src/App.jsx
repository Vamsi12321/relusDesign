import React from 'react';
import './App.css';
import TopNavBar from './components/TopNavbar';
import LeftSidebar from './components/LeftSidebar';
import MainContent from './components/MainContent';
import RightSidebar from './components/RightSidebar';

function App() {
  return (
    <div className="app">
      <TopNavBar />
      <div className="main">
        <LeftSidebar />
        <MainContent />
        <RightSidebar />
      </div>
    </div>
  );
}

export default App;
