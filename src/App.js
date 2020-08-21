import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  //custom area 8.21.2020 10.20am
  const prdoucts = [
    {name:'Photoshop', price:'$99.99'},
    {name:'Illustator', price:'$90.6'},
    {name:'PDF Reder', price:'$60.6'}
  ]
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
        <Product1 name={prdoucts[0].name} price={prdoucts[0].price}></Product1>
        <Product1 prdoucts={prdoucts[0]}></Product1>
        <Person1></Person1>
        <Person1></Person1>
        <Person1></Person1>
        <Person2 name="ABU Hasan" food="Any" favorite="Programming" jobs="Manager" salary='2000' button="Click Me"></Person2>
        <Person2 name="ABU Hasan MIM" food="Unkonwn" favorite="Reading" jobs="Don't Have" salary='Nai' button="Click Korar Kono Karon nai"></Person2>
        <Person3 name="ABU HASAN" pera="I dosd jadfj dskfj  dfj adf ;s jdsfkjdfksd fkdjfdjhf sdkjfks df js djfjsd fsdjhfjs fdj" btn="Click Me"></Person3>
      </header>
    </div>
  );
}
// Add Custom Function
  //1st type declare a component
    /**Rulse Declare A Component With Fun
     1. Function Name 1st Later Capital hbe
     2. Use Fun name Like a Tag
     3. 1 tar beshi add hole div er

    **Deffernt Type of Data Rulse
     1. fun pera meter props add in fun
     2. Declare component e attribute add koro
     3. Attribute gulo hobe obj er Name
     */
  function Person1(){
    return (
      <div style={{border:'2px solid red',margin: '10px'}}>
        <h3>Name: Abu Hasan</h3>
        <h4>Hero Of the Year</h4>
      </div>
    )
  }
  function Person2(props){
    var person2h3Style={
      color: 'red'
    }
    console.log(props);
    return (
      <div className="babu-sona" style={{border:'2px solid yellow',margin: '10px',color: '#000',backgroundColor:'#fff'}}>
        <h3 className="" style={person2h3Style}>Name: {props.name}</h3>
        <p>Food: {props.food}</p>
        <p>Job: {props.jobs}</p>
        <p>Salary: {props.salary}</p>
        <p>favorite: {props.favorite}</p>
        <h4>Hero Of the Year</h4>

        <button type='button'>{props.button}</button>
      </div>
    )
  }
  function Person3(props){
    let person3divStyle = {
      boxSizing: 'border-box',
      width: '300px',
      backgroundColor: '#127ABC',
      padding: '5px 20px',
      boxShadow: '1px 2px 8px red, -3px -4px 5px red',
      marginBottom: '25px'
    }
    let headerSec = {
      backgroundColor: '#fff',
      padding:'10px 0',
      color: '#000'
    }
    let bottomSec = {
      backgroundColor: 'green',
      padding:'10px 0'
    }
    return (
      <div className="" style={person3divStyle}>
        <div style={headerSec}>
          <h3>{props.name}</h3>
          <p>{props.pera}</p>
        </div>
        <div style={bottomSec}>
          <button>{props.btn}</button>
        </div>
      </div>
    )
  }
//Pass Object In Component
  /** Rulse Pass Object in Component
   1.
   
   */
function Product1(props) {
  let productDiv = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '170px'
  }
  return (
    <div style={productDiv}>
      <h2>{props.name}</h2>
      <span>{props.price}</span>
      <button>Buy Now</button>
    </div>
  )
}
// Custom Function END
export default App;
