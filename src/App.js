import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News  from './components/News'
import {  BrowserRouter as Router,Route,Routes } from 'react-router-dom';


export default class App extends Component {

  apikey="38e0bf1e43b242aca2b3befca5d31c12";
constructor(props){
  super(props);
  this.state={
    mode:'light',
    txtColor:'Dark'
  }
}
handleMode=()=>{
  if(this.state.mode==='light'){

    this.setState({mode:'dark', 
                  txtColor:'light'})
    document.body.style.backgroundColor='#2d5084'
    document.body.style.color='white'

  }
  else{
    this.setState({mode:'light', 
    txtColor:'Dark'})
    document.body.style.backgroundColor='white'
    document.body.style.color='black'


  }
}
  render() {
    return (
  <Router>
      <div>
        {/* md={"mode"} handleMode={this.handleMode} */}
    <Navbar mode={this.state.mode} txtColor={this.state.txtColor} handleMode={this.handleMode}/>
   
    <Routes>
     <Route exact path="/newsmonk" element={<News key="general" apikey={this.apikey} mode={this.state.mode} txtColor={this.state.txtColor} pageSize={12} country={'in'} category={'general'}/>}/>
     <Route exact path="/general" element={<News key="general" apikey={this.apikey} mode={this.state.mode} txtColor={this.state.txtColor} pageSize={12} country={'in'} category={'general'}/>}/>
     <Route exact path="/business" element={<News key='business' apikey={this.apikey} mode={this.state.mode} txtColor={this.state.txtColor} pageSize={12} country={'in'} category={'business'}/>}/>
     <Route exact path="/entertainment" element={<News key='entertainment' apikey={this.apikey} mode={this.state.mode} txtColor={this.state.txtColor} pageSize={12} country={'in'} category={'entertainment'}/>}/>
     <Route exact path="/health" element={<News key='health' apikey={this.apikey}  mode={this.state.mode} txtColor={this.state.txtColor} pageSize={12} country={'in'} category={'health'}/>}/>
     <Route exact path="/science" element={<News key='science' apikey={this.apikey} mode={this.state.mode} txtColor={this.state.txtColor} pageSize={12} country={'in'} category={'science'}/>}/>
     <Route exact path="/sports" element={<News key='sports' apikey={this.apikey} mode={this.state.mode} txtColor={this.state.txtColor} pageSize={12} country={'in'} category={'sports'}/>}/>
     <Route exact path="/technology" element={<News key='technology'apikey={this.apikey}  mode={this.state.mode} txtColor={this.state.txtColor} pageSize={12} country={'in'} category={'technology'}/>}/>
    </Routes>

      </div>
  </Router>
    )
  }
}



