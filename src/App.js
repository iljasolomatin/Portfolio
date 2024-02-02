import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import LeftPanel from './components/leftPanel';
import RightPanel from './components/rightPanel';
import MainContent from './components/mainContent';

function App() {
  return (
    <div className="bg-navy h-screen">
      <nav class="bg-navy text-white p-4 flex justify-end items-center">
        <ol class="flex items-center space-x-4">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#Experience">Experience</a>
          </li>
          <li>
            <a href="#Projects">Projects</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ol>
      </nav>
      {/*<Header />*/}
      {/*<LeftPanel />*/}
      {/*<RightPanel />*/}
      {/*<MainContent />*/}
    </div>
  );
}

export default App;