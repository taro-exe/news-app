import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



export default class App extends Component {

  pageSize = 6;
  country = 'us';
  render() {
    return (
      <Router>
        <NavBar />
        <Routes>

          {/* the key prop is passed as an unique identifer for each of the route since the component is same(News.js) for every route and the browser won't re-render the component if the path is changed*/}

          <Route exact path='/' element={<News pageSize={this.pageSize} country={this.country} key='home' onClick={this.pageTitle}/> } />

          <Route exact path='/business' element={<News pageSize={this.pageSize} country={this.country} category='Business' key='business'/>} />

          <Route exact path='/entertainment' element={<News pageSize={this.pageSize} country={this.country} category='Entertainment' key='entertainment'/>} />

          <Route exact path='/health' element={<News pageSize={this.pageSize} country={this.country} category='Health' key='health'/>} />

          <Route exact path='/science' element={<News pageSize={this.pageSize} country={this.country} category='Science' key='science'/>} />

          <Route exact path='/sports' element={<News pageSize={this.pageSize} country={this.country} category='Sports' key='sports'/>} />

          <Route exact path='/technology' element={<News pageSize={this.pageSize} country={this.country} category='Technology' key='technology'/>} />

          {/* just in case someone types some random path in the address bar that doesn't exist */}
          <Route path="*" element={<p>Path not resolved</p>} />

        </Routes>

      </Router>
    )
  }
}
