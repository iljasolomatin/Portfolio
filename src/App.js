import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import LeftPanel from './components/leftPanel';
import RightPanel from './components/rightPanel';

function App() {
  return (
    <div className="App">
      <Header />
      <LeftPanel />
      <RightPanel />
    </div>
  );
}

export default App;