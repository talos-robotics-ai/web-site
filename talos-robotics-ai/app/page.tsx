import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Lab from "./components/Lab";
import Problem from "./components/Problem";
import OperatingSystem from "./components/OperatingSystem";
import Features from "./components/Features";
import Benefits from "./components/Benefits";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Pilot from "./components/Pilot";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Lab />
      <Problem />
      <OperatingSystem />
      <Features />
      <Benefits />
      <Pricing />
      <Roadmap />
      <Pilot />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}
