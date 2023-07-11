import './App.css';
import Info from './components/Info/Info';
import Work from './components/Work/Work';
import EducationInputForm from './components/Education/EducationInputForm';

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
            <div id="section-heading">EDUCATION</div>
            <EducationInputForm />
        </div>
        <div id="save-cv-container">
            <button id="save-page-btn">SAVE CV</button>
        </div>
    </div>
  );
}

export default App;
