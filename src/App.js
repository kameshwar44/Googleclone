import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import HomeScreen from './Components/HomeScreen';
import SearchScreen from './Components/SearchScreen/SearchScreen';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/search" element={<SearchScreen />} />
          {/* Placeholder routes for future implementation */}
          <Route path="/images" element={<div style={{padding: '2rem'}}>Images search coming soon...</div>} />
          <Route path="/news" element={<div style={{padding: '2rem'}}>News search coming soon...</div>} />
          <Route path="/videos" element={<div style={{padding: '2rem'}}>Video search coming soon...</div>} />
          <Route path="/shopping" element={<div style={{padding: '2rem'}}>Shopping search coming soon...</div>} />
          <Route path="/apps" element={<div style={{padding: '2rem'}}>Google apps menu coming soon...</div>} />
          <Route path="/account" element={<div style={{padding: '2rem'}}>Account page coming soon...</div>} />
          {/* 404 route */}
          <Route path="*" element={<div style={{padding: '2rem'}}>Page not found</div>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
