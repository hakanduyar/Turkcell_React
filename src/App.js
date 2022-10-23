//import React from 'react'
import User from './components/User'
const user = {
  name : "Hakan Duyar",
  city : "Edirne",
  age  : "23",
};

function App() {
  return (
    <div>

      <User data = {user} friends={["ahmet", "murat", "mehmet", "gökalp"]} />
      {/* <User name="Hakan Duyar" city={"Edirne"} age={23}/>
      <User name="Mehmet" city={"Şam"} age={7}/>
      <User name="Ahmet" city={"Tekirdağ"} age={18}/> */}
    </div>
  );
  }
export default App;






// import Header from "./components/Header";
// import Login from "./components/Login";

// const isLoggedIn = true;
// const fullname = "Hakan Duyar";

// function App() {
//   return (
//     <div className="test">
    
//      { isLoggedIn ? ( <div> Hoşgeldin  {fullname}</div>) : <a href="#/">Giriş yapınız</a> }
   
//      {isLoggedIn && <div>Hoşgeldin {fullname}</div>}

//      {!isLoggedIn && <a href="#/">Gririş yapınız</a>}

//      {isLoggedIn ? <div>Hoşgeldin {fullname}</div> : null}

//      {isLoggedIn ? <div>Hoşgeldin {fullname}</div> : <Header />}
     
//      {isLoggedIn ? <div>Hoşgeldin {fullname}</div> : <Login />}

    
//     </div>
//   );
// }

// export default App;
