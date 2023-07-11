import './App.css';
import Info from './components/Info/Info';
import Work from './components/Work/Work';
import Education from './components/Education/Education';

function App() {
  return (
    <div class="app">
        <div id="header">
            <h1>CV APPLICATION</h1>
        </div>
        <Info />
        <div id="work-section">
            <Work />
        </div>
        <div id="education-section">
            <Education />
        </div>
        <div id="save-cv-container">
            <button id="save-page-btn">SAVE CV</button>
        </div>
    </div>
  );
}

export default App;
