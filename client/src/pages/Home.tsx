import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import IntroductionSection from "@/components/IntroductionSection";
import BiodiversitySection from "@/components/BiodiversitySection";
import StatisticsSection from "@/components/StatisticsSection";
import ClimateSection from "@/components/ClimateSection";
import ThreatsSection from "@/components/ThreatsSection";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div id="hero">
        <HeroSection />
      </div>
      <IntroductionSection />
      <div id="biodiversity">
        <BiodiversitySection />
      </div>
      <StatisticsSection />
      <div id="climate">
        <ClimateSection />
      </div>
      <div id="threats">
        <ThreatsSection />
      </div>
      <div id="gallery">
        <GallerySection />
      </div>
      <Footer />
    </div>
  );
}
