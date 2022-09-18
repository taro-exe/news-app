import './App.css';
import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import DarkToggler from './components/DarkToggler';


const App = () => {

  let pageSize = 6;
  let country = 'us'
  
  let apiKey = process.env.REACT_APP_NEWS_API;

  const [mode, setMode] = useState('light');

  let toggleDark = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.background = 'rgb(25,25,27)';
    }
    else {
      setMode('light');
      document.body.style.background = 'white';
    }
  }

  return (
    <Router>
      <NavBar />
      <Routes>

        {/* the key prop is passed as an unique identifer for each of the route since the component is same(News.js) for every route and the browser won't re-render the component if the path is changed*/}

        <Route exact path='/' element={<News pageSize={pageSize} country={country} mode={mode} apiKey={apiKey} key='home' />} />

        <Route exact path='/business' element={<News pageSize={pageSize} country={country} mode={mode} apiKey={apiKey} category='Business' key='business' />} />

        <Route exact path='/entertainment' element={<News pageSize={pageSize} country={country} mode={mode} apiKey={apiKey} category='Entertainment' key='entertainment' />} />

        <Route exact path='/health' element={<News pageSize={pageSize} country={country} mode={mode} apiKey={apiKey} category='Health' key='health' />} />

        <Route exact path='/science' element={<News pageSize={pageSize} country={country} mode={mode} apiKey={apiKey} category='Science' key='science' />} />

        <Route exact path='/sports' element={<News pageSize={pageSize} country={country} mode={mode} apiKey={apiKey} category='Sports' key='sports' />} />

        <Route exact path='/technology' element={<News pageSize={pageSize} country={country} mode={mode} apiKey={apiKey} category='Technology' key='technology' />} />

        {/* just in case someone types some random path in the address bar that doesn't exist */}
        <Route path="*" element={<p>Path not resolved</p>} />




      </Routes>
      <DarkToggler toggleDark={toggleDark} mode={mode}/>
    </Router>
  )
}

export default App;

