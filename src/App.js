import React, { useState, useEffect } from 'react';
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
  /** ======= Video 32.9 Start ====== */
//Create Multipul Component form an array of obj
const prdoucts1 = [
  {name:'Photoshop', price:'$99.99'},
  {name:'Illustator', price:'$90.6'},
  {name:'PDF Reder', price:'$60.6'},
  {name:'PDF Reder2', price:'$249.6'}
]
const product1Name = prdoucts1.map(prdouct1pera => prdouct1pera.name)
console.log(product1Name);

const nayok = ['Abu', 'Hasan', 'Alomgir', 'Razzak','salman','bappi','omuk'];
//Trial By Self
  const product2 = [
    {name:'Photoshop', price:'$99.99'},
    {name:'Illustator', price:'$90.6'},
    {name:'PDF Reder', price:'$60.6'},
    {name:'PDF Reder2', price:'$249.6'}
  ]
  const friend1 = ['Abu', 'Hasan', 'Alomgir', 'Razzak','asd'];
/** ======= Video 32.9 END ====== */

/** ======= Video 32.10 Start ====== */
  //Introduce to Component State
/** ======= Video 32.10 END ====== */

/** ======= Video 32.11 Start ====== */
  //Component state hook and set state method
/** ======= Video 32.11 END ====== */

/** ======= Video 32.11 Start ====== */
  //Load dynamic data, API call useEffect integrate state
/** ======= Video 32.11 END ====== */
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
        <Product1 product ={ prdoucts[1]}></Product1>
        <Product1 name={prdoucts[0].name} price={prdoucts[0].price}></Product1>
        <Product1 prdoucts={prdoucts[0]}></Product1>
        <Person1></Person1>
        <Person1></Person1>
        <Person1></Person1>
        <Person2 name="ABU Hasan" food="Any" favorite="Programming" jobs="Manager" salary='2000' button="Click Me"></Person2>
        <Person2 name="ABU Hasan MIM" food="Unkonwn" favorite="Reading" jobs="Don't Have" salary='Nai' button="Click Korar Kono Karon nai"></Person2>
        <Person3 name="ABU HASAN" pera="I dosd jadfj dskfj  dfj adf ;s jdsfkjdfksd fkdjfdjhf sdkjfks df js djfjsd fsdjhfjs fdj" btn="Click Me"></Person3>

      </header>
       
        {/* Video 32.9 Porjonto sesh*/}

        {/* Video 32.9 Theke Start*/}
      <main className="App-header">
        {/* =======Video 32.9 Start======= */}
        <section className="video-32.9-sec">
          <h1>Video 32.9</h1>
           <ul>
             {
               nayok.map(nayokp => <li>{nayokp}</li>)
             }
            {/*but not dynamic
             <li>{nayok[0]}</li>
            <li>{nayok[1]}</li>
            <li>{nayok[2]}</li>
            <li>{nayok[3]}</li>
            <li>{nayok[4]}</li> */}
            {
              prdoucts1.map(pera => {
                return <li>{pera.name}</li>
              })
            }
           </ul>
           <br/><br/>
          {/* Trial By self */}
          <ul>
            <li style={{borderBottom: '1px solid gray'}}>Trial</li>
            {
              product2.map(p => <li>{p.name}</li>)
            }
            <br/>
            {
              friend1.map(p=> <li>{p}</li>)
            }
          </ul>
        </section>
        {/* ========Video 32.9 END======== */}

        {/* =======Video 32.10 Start======= */}
        <section className="video-32.10-sec">
          <h1>Video 32.10 Section</h1> 
          <Counter1></Counter1>
        </section>
        {/* ========Video 32.10 END======== */}

        {/* =======Video 32.11 Start======= */}
        <section className="video-32.11-sec">
          <h1>Video 32.11 Section</h1> 
          <Counter2></Counter2>
        </section>
        {/* ========Video 32.11 END======== */}

        {/* =======Video 32.12 Start======= */}
        <section className="video-32.12-sec">
          <h1>Video 32.12 Section</h1> 
          <UserComponent></UserComponent>
          <UserComponent2></UserComponent2>
        </section>
          {/* ========Video 32.12 END======== */}
      </main>
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
    //console.log(props);
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
  const {name, price} = {name:'Photoshop', price:'$99.99'}
 // console.log(name, price);
  return (
    <div style={productDiv}>
      <h2>{name}</h2>
      <h2>{props.name}</h2>
      <span>{props.price}</span>
      <button>Buy Now</button>
    </div>
  )
}
/** Video 32.10 Start */
//react er hook
function Counter1(){
  const [count, setCount] = useState(10);
  return(
    <div>
      <h1>Count: {count}</h1>
    </div>
  )
}
/** Video 32.10 END */

/** Video 32.11 Start */
function Counter2(){
  const [count, setCount] = useState(10);
  // const handleIncarse = () =>{
  //   //const newCount = count +1;
  //   //setCount(newCount);
  //   setCount(count +1)
  // }
  //const handleIncarse = () => setCount(count + 1)
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
};
/** Video 32.11 END */

/** Video 32.12 Start */
function UserComponent(){
  const [user, setUser] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUser(data));
  })
  return(
    <div>
      <h3>Dynamic Users {user.length}</h3>
        <ul>
          {
            user.map(userP => {
              return (
                <li>{userP.name}</li> 
              )
            })
          }
        </ul>
        <ul>
          {
            user.map(userP => {
              return (
                <li>{userP.phone}</li>
                
              )
            })
          }
        </ul>
    </div>
  )
};

//Trial For Self Help
function UserComponent2(){
  const [user, setuser] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setuser(data));
  })
  return (
    <div>
        <h2>User Coponent2 Trial By self</h2>
        <ul>
          {
            user.map(p =><li>{p.name}</li>)
          }
        </ul>
        <ul>
          {
            user.map(p =><li>{p.phone}</li>)
          }
        </ul>
        <ul>
          {
            user.map(p =><li>{p.email}</li>)
          }
        </ul>
    </div>

  )
}
/** Video 32.12 END */
// Custom Function END
export default App;
