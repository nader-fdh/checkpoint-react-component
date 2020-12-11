import logo from './logo.svg';
import './App.css';
import ProfilPhoto from './component/profil/ProfilPhoto';
import Address from './component/profil/Address';
import FullName from './component/profil/FullName';




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div >
        <ProfilPhoto/>
        </div>
        <p>
        <FullName/>
        </p>
        <p>
          <Address/>
        </p>
   
          
        
      </header>
    </div>
  );
}

export default App;
