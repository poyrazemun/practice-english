import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import PresentSimpleExercises from './components/exercises/PresentSimpleExercises';
import PastSimpleExercises from './components/exercises/PastSimpleExercises';
import PresentContinuousExercises from './components/exercises/PresentContinuousExercises';
import FutureSimpleExercises from './components/exercises/FutureSimpleExercises';
import ReadingPractice from './components/reading/ReadingPractice';

function TenseCard({ title, description, path }) {
  const navigate = useNavigate();
  
  return (
    <section className="tense-card">
      <h2>{title}</h2>
      <p>{description}</p>
      <button 
        className="practice-button"
        onClick={() => navigate(path)}
      >
        Start Practice
      </button>
    </section>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>English Tenses Practice</h1>
      </header>
      
      <Routes>
        <Route path="/" element={
          <main className="App-main">
            <div className="tense-sections">
              <TenseCard 
                title="Reading Practice"
                description="Read short stories, learn new words, and create your own sentences"
                path="/reading-practice"
              />
              <TenseCard 
                title="Present Simple"
                description="Practice your present simple tense skills"
                path="/present-simple"
              />
              <TenseCard 
                title="Past Simple"
                description="Practice your past simple tense skills"
                path="/past-simple"
              />
              <TenseCard 
                title="Present Continuous"
                description="Practice your present continuous tense skills"
                path="/present-continuous"
              />
              <TenseCard 
                title="Future Simple"
                description="Practice your future simple tense skills"
                path="/future-simple"
              />
            </div>
          </main>
        } />
        <Route path="/reading-practice" element={<ReadingPractice />} />
        <Route path="/present-simple" element={<PresentSimpleExercises />} />
        <Route path="/past-simple" element={<PastSimpleExercises />} />
        <Route path="/present-continuous" element={<PresentContinuousExercises />} />
        <Route path="/future-simple" element={<FutureSimpleExercises />} />
      </Routes>
    </div>
  );
}

export default App;
