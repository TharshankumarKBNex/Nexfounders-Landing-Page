import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ProblemsSection from "@/components/problems-section";
import UserTypesSection from "@/components/user-types-section";
import PlatformCapabilities from "@/components/platform-capabilities";
import FinalCTA from "@/components/final-cta";
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
      <ProblemsSection />
      <UserTypesSection />
      <PlatformCapabilities />
      <FinalCTA />
      <Footer />
    </div>
  );
}
