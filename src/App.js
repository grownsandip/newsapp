
import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

 
 export default class App extends Component {
  pageSize=5;
  apiKey=process.env.REACT_APP_NEWS_API;
  state={
    progress:0
  }
  setProgress=(progress)=>{
  this.setState({progress:progress});
  }
   render() {
     return (
       <div>
        <Router>
        <NavBar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
      />
        <Routes>
        <Route exact path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="general" pageSize={this.pageSize} counrty="us" category="general"/>}/>
        <Route exact path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="business"pageSize={this.pageSize} counrty="in" category="business"/>}/>
        <Route exact path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="science"pageSize={this.pageSize} counrty="in" category="science"/>}/>
        <Route exact path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="sports"pageSize={this.pageSize} counrty="in" category="sports"/>}/>
        <Route exact path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="health" pageSize={this.pageSize} counrty="in" category="health"/>}/>
        <Route exact path="/technology"element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="technology"pageSize={this.pageSize} counrty="in" category="technology"/>}/>
        <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="entertainment" pageSize={this.pageSize} counrty="in" category="entertainment"/>}/>
        </Routes>
        </Router>
       </div>
     )
   }
 }
 
