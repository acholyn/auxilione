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
  document.addEventListener("DOMContentLoaded", function () {
    window.onscroll = function () {
      makeNavSticky();
    };

    var navbar = document.querySelector(".navbar");
    var content = document.querySelector(".content");

    // Get the offset position of the navbar
    var sticky = navbar.offsetTop;

    // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function makeNavSticky() {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("nav-sticky");
        content.classList.add("nav-sticky--content");
      } else {
        navbar.classList.remove("nav-sticky");
        content.classList.remove("nav-sticky--content");
      }
    }
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <NavBar />
      </header>
      <main className="more-padding content">
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
