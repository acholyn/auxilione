import logo from "./aux-svg.svg";
import "./App.css";
import NavBar from "./NavBar";
import AboutUsContent from "./content/AboutUsContent";
import WhatWeDoContent from "./content/WhatWeDoContent";
import Facts from "./content/Facts";
import PartnersAndTeam from "./content/PartnersAndTeam";
import KeepUpToDate from "./content/KeepUpToDate";
import ContactForm from "./ContactForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <NavBar />
      </header>
      <main className="more-padding">
        <AboutUsContent />
        <WhatWeDoContent />
        <Facts />
        <PartnersAndTeam />
        <KeepUpToDate />
        <ContactForm />
      </main>
    </div>
  );
}

export default App;
