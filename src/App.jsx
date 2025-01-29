
import './App.css';
import MainSection from './componets/main_section';
import NavBar from './componets/nav_bar';
import OurServicesSection from './componets/OurServicesSection';
function App() {

  return (
<div style={{ maxWidth: '1200px', marginLeft: 'auto', marginRight: 'auto'}}>
  <NavBar />
  <MainSection/>
<OurServicesSection/>
  </div>
  )
}

export default App;
