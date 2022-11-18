import ParticlesBg from 'particles-bg';
import NavBar from './components/nav-bar/nav-bar.component';
import FormField from './components/form-field/form-field.component';
import LogoImage from './components/logo/logo.component';
import Ranking from './components/ranking/ranking.component';
import './App.css';

function App() {
  return (
    <div className="App">
      <ParticlesBg type="cobweb" num={200} color='#0E1294' bg={true} />
      <NavBar/>
      <LogoImage/>
      <Ranking/>
      <FormField/>
    </div>
  );
}

export default App;
