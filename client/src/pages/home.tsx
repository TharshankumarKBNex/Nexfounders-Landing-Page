import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import {ModulesShowcase} from "@/components/moduletypes"
import {UnifiedEcosystem} from "@/components/unified-eco-system"
import {PlatformFeatures} from "@/components/platform-features"
import {SuccessStories} from "@/components/success-stories"
import { FinalCTA } from "@/components/final-cta";
import Footer from "@/components/footer";

type HomeProps = {
  showNavLinks: boolean;
  setShowNavLinks: (val: boolean) => void;
};

export default function Home({ showNavLinks, setShowNavLinks }: HomeProps) {
  return (
    <div className="min-h-screen">
      <Navigation showTargetLinks={!showNavLinks} />
      <HeroSection onVisibilityChange={setShowNavLinks} />
      <ModulesShowcase />
      <UnifiedEcosystem />
      <PlatformFeatures />
      <SuccessStories />
      <FinalCTA />
      <Footer />
    </div>
  );
}
