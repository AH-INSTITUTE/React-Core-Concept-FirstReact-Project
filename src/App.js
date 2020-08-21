import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  //custom area 8.21.2020 10.20am
  var name = "ABU HASAN";
  var obj = {
    fName: 'Abu',
    lName: 'Hasan',
    job : 'Programmer',
    salary: 200000
  }
  var obj2 = {
    fName: 'Mim',
    lName: 'Hasan',
    job : 'Student'
  }
  var style = {
    color: 'red',
    backgroundColor: 'yellow'
  }
  var someThingNew ={
    color: '#908556',
    backgroundColor: '#fff',
    padding: '10px',
    textShadow: '1px 2px 3px red',
    borderRadius: '10px',
    marginBottom: '20px' 
  }
  //custom js END Writing
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit Done haha <code>src/App.js</code> and save to reload.
        </p>
        <h1>My Heading : {name}</h1>
        {/* First Wat to Add Style */}
        <p className="" style={style}>{obj.fName + ' ' + obj.lName}{obj.job + ' ' + obj.salary}</p>
        
      {/*Scend Way To Add style */}
        <p style={{color: 'red',backgroundColor:'yellow'}}>{obj2.fName + ' ' + obj2.lName}{' '+obj2.job}</p>
        <p>My First React Paragraph</p>

        <p className="" style={someThingNew}>Only Cheack Cai I Work on this</p>

        <p style={{color:'red', backgroundColor: '#fff'}}>Only Cheack Cai I Work on this</p>
      </header>
    </div>
  );
}

export default App;
