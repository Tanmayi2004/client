import React, { useState } from 'react';
import History from './History';
import Clothing from './Clothing';
import State from './State';
import Entry from './Entry';

function Home() {
  const [showHistory, setShowHistory] = useState(false);
  const [showClothing, setShowClothing] = useState(false);
  const [showState, setShowState] = useState(false);
  const [showEntry, setShowEntry] = useState(false);
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(true);

  const handleHistoryLinkClick = () => {
    setShowHistory(true);
    setShowClothing(false);
    setShowState(false);
    setShowEntry(false);
    setShowWelcomeMessage(false);
  };

  const handleClothingLinkClick = () => {
    setShowClothing(true);
    setShowHistory(false);
    setShowState(false);
    setShowEntry(false);
    setShowWelcomeMessage(false);
  };

  const handleStateLinkClick = () => {
    setShowState(true);
    setShowHistory(false);
    setShowClothing(false);
    setShowEntry(false);
    setShowWelcomeMessage(false);
  };

  const handleEntryLinkClick = () => {
    setShowEntry(true);
    setShowHistory(false);
    setShowClothing(false);
    setShowState(false);
    setShowWelcomeMessage(false);
  };

  return (
    <div style={{ 
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      minHeight: '100vh',
      padding: '20px',
      background: (showHistory || showClothing || showState || showEntry) ? '#fff' : 'linear-gradient(to bottom, #87CEEB, #1E90FF)'
    }}>
      {showWelcomeMessage && (
        <h1 style={{ color: '#fff', fontSize: '48px', marginBottom: '20px' }}>Welcome to Indian Culture Website</h1>
      )}

      {!showHistory && !showClothing && !showState && !showEntry && (
        <div style={{ marginBottom: '20px' }}>
          <a href="#" onClick={handleHistoryLinkClick} style={{ fontSize: '24px', color: '#fff', textDecoration: 'none', border: '2px solid #fff', padding: '10px 20px', borderRadius: '5px', marginRight: '10px' }}>View History</a>
          <a href="#" onClick={handleClothingLinkClick} style={{ fontSize: '24px', color: '#fff', textDecoration: 'none', border: '2px solid #fff', padding: '10px 20px', borderRadius: '5px', marginRight: '10px' }}>View Clothing</a>
          <a href="#" onClick={handleStateLinkClick} style={{ fontSize: '24px', color: '#fff', textDecoration: 'none', border: '2px solid #fff', padding: '10px 20px', borderRadius: '5px' }}>View States</a><br></br><br></br><br></br>
          <a href="#" onClick={handleEntryLinkClick} style={{fontSize: '20px', textDecoration: 'none', color: 'White' }}>Do You Like to Participate in any Event</a>
        </div>
      )}

      {showHistory && <History />}
      {showClothing && <Clothing />}
      {showState && <State />}
      {showEntry && <Entry />}
    </div>
  );
}

export default Home;
