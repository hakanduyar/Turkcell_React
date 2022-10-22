//import Header from "./components/Header";
import Login from "./components/Login";

const isLoggedIn = true;
const fullname = "Hakan Duyar";

function App() {
  return (
    <div className="test">
    
     {/* isLoggedIn ? ( <div> Hoşgeldin  {fullname}</div>) : <a href="#/">Giriş yapınız</a> */}
   
     {/*isLoggedIn && <div>Hoşgeldin {fullname}</div>*/}

     {/*!isLoggedIn && <a href="#/">Gririş yapınız</a>*/}

     {/*isLoggedIn ? <div>Hoşgeldin {fullname}</div> : null*/}

     {/*isLoggedIn ? <div>Hoşgeldin {fullname}</div> : <Header />*/}
     
     {isLoggedIn ? <div>Hoşgeldin {fullname}</div> : <Login />}

    
    </div>
  );
}

export default App;
