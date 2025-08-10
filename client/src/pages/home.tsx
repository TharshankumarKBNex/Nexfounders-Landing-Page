import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ProblemsSection from "@/components/problems-section";
import MissionSection from "@/components/mission-section";
import UserTypesSection from "@/components/user-types-section";
import PlatformCapabilities from "@/components/platform-capabilities";
import FinalCTA from "@/components/final-cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ProblemsSection />
      <MissionSection />
      <UserTypesSection />
      <PlatformCapabilities />
      <FinalCTA />
      <Footer />
    </div>
  );
}
