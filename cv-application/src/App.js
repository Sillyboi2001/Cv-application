import './App.css';
import Info from './components/Info/Info';
import WorkInputForm from './components/Work/WorkInputForm';
import EducationInputForm from './components/Education/EducationInputForm';

function App() {
  return (
    <div class="app">
        <div id="header">
            <h1>CV APPLICATION</h1>
        </div>
        <Info />
        <div id="work-section">
            <div id="section-heading">WORK EXPERIENCE</div>
            <div id="open-btn-container"><button type="button" >+ Add Work Experience</button></div>
            <WorkInputForm />
        </div>
        <div id="education-section">
            <div id="section-heading">EDUCATION</div>
            <div id="open-btn-container"><button type="button">+ ADD EDUCATION</button></div>
            <EducationInputForm />
        </div>
        <div id="save-cv-container">
            <button id="save-page-btn">SAVE CV</button>
        </div>
    </div>
  );
}

export default App;
