import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import IntroductionSection from "@/components/IntroductionSection";
import SolutionSection from "@/components/SolutionSection";
import StatisticsSection from "@/components/StatisticsSection";
import MethodologySection from "@/components/MethodologySection";
import DataSourcesSection from "@/components/DataSourcesSection";
import ResultsSection from "@/components/ResultsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div id="hero">
        <HeroSection />
      </div>
      <IntroductionSection />
      <div id="solution">
        <SolutionSection />
      </div>
      <StatisticsSection />
      <div id="methodology">
        <MethodologySection />
      </div>
      <div id="data-sources">
        <DataSourcesSection />
      </div>
      <div id="results">
        <ResultsSection />
      </div>
      <Footer />
    </div>
  );
}
