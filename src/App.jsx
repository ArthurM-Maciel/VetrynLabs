import NavbarDemo from "@/components/NavbarDemo";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WebsiteBenefits from "@/components/WebsiteBenefits";
import Services from "@/components/Services";
import MacbookShowcase from "@/components/MacbookShowcase";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SafeComponent from "@/components/SafeComponent";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <SafeComponent name="NavbarDemo">
        <NavbarDemo />
      </SafeComponent>
      <SafeComponent name="Hero">
        <Hero />
      </SafeComponent>
      <SafeComponent name="About">
        <About />
      </SafeComponent>
      <SafeComponent name="WebsiteBenefits">
        <WebsiteBenefits />
      </SafeComponent>
      <SafeComponent name="Services">
        <Services />
      </SafeComponent>
      <SafeComponent name="MacbookShowcase">
        <MacbookShowcase />
      </SafeComponent>
      <SafeComponent name="Process">
        <Process />
      </SafeComponent>
      <SafeComponent name="Projects">
        <Projects />
      </SafeComponent>
      <SafeComponent name="Contact">
        <Contact />
      </SafeComponent>
      <SafeComponent name="Footer">
        <Footer />
      </SafeComponent>
    </div>
  );
}

export default App;
