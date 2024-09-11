import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import ParticipationSection from './components/Participation/ParticipationSection';
import RegistrationPage from './components/Registration/Registration';



function App() {
  return (
    <div>
        <Header />
        <About />
        <ParticipationSection />
        <RegistrationPage/>
    </div>

  )
};

export default App;
