import './App.css';
import Info from './components/Info/Info';
import Work from './components/Work/Work';
import Education from './components/Education/Education';
import SaveBtn from './components/Buttons/SaveBtn';

function App() {
  return (
    <div className="app">
        <div id="header">
            <h1>CV APPLICATION</h1>
        </div>
        <div id="info-section">
            <Info />    
        </div>
        <div id="work-section">
            <Work />
        </div>
        <div id="education-section">
            <Education />
        </div>
        <div id="save-cv-container">
            <SaveBtn />
        </div>
    </div>
  );
}

export default App;
