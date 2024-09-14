import { useState } from 'react';
import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import ParticipationSection from './components/Participation/ParticipationSection';
import RegistrationPage from './components/Registration/Registration';
import AutoPlay from './components/Gallery/Gallery';



function App() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div>
        <Header />
        <About />
        <AutoPlay/>
        <ParticipationSection setActiveTab={setActiveTab} />
        <RegistrationPage activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>

  )
};

export default App;
