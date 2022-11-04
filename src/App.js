import logo from './logo.svg';
import './App.css';
import Internetdata from "./components/Internetdata"
import Domains from "./components/Domains"
import Attackvolume from "./components/Attackvolume"

function App() {
 return (
    <div   style={{
        position: 'absolute', left: '50%', top: '0%',
        transform: 'translate(-50%,0%)'
    }} >
        <Internetdata />
        <Domains />
        <Attackvolume />
    </div>
  );
}

export default App;
