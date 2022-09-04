import './App.css';
import { Routes, Route } from 'react-router-dom'
import MainPage from './pages/main-page/MainPage'
import ProjectsPage from './pages/projects-page/ProjectsPage'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/projects/:projectId" element={<ProjectsPage />}/>
      </Routes>

    </div>
  );
}

export default App;
