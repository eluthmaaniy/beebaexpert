import AboutPreview from "./components/AboutPreview";
import FinalCTA from "./components/FinalCTA";
import Hero from "./components/Hero";
import PortfolioPreview from "./components/PortfolioPreview";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <PortfolioPreview />
      <FinalCTA />
    </>
  );
}
