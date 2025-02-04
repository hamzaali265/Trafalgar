import "./App.css";
import DownloadAppSection from "./componets/DownloadAppSection";
import HealthCareSection from "./componets/HealthCare";
import MainSection from "./componets/main_section";
import NavBar from "./componets/nav_bar";
import OurServicesSection from "./componets/OurServicesSection";
import TestimonialsSection from "./componets/TestimonialsSection";
function App() {
  return (
    <>
      <NavBar />
      <MainSection />
      <OurServicesSection />
      <HealthCareSection />
      <DownloadAppSection />
      <TestimonialsSection />
    </>
  );
}

export default App;
