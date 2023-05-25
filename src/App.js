import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
var [allpokemon,setAllpokemon]=useState([])
var [show,setShow]=useState(false)
var lone="luk"
var peter=1000

var url="https://pokeapi.co/api/v2/pokemon?limet=150"

lone=2000+1

var array= [lone,peter]


useEffect(()=>{
  
  fetch(url).then(res=>res.json()).then(data=>setAllpokemon(data.results))
  console.log(allpokemon);
  
},[])

function her(){
  
  

setShow(!show)


}
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

{show?<div style={{display:"flex"}}>

{allpokemon?.map(pokemon=>{
  return <p style={{margin:"20px"}}>{pokemon.name}</p>
})}
</div>:null}
        
        <button onClick={()=>her()}>
          her
        </button>
      </header>
    </div>
  );
}

export default App;
