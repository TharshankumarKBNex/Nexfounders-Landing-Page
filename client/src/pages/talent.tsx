import { 
  TalentHero, 
  StartupOpportunities, 
  SkillsMarketplace, 
  CofounderMatching, 
  LearningResources,
  TalentFinalCTA
} from '@/components/talent/TalentDashboard'
import Navigation from '@/components/navigation';

type HomeProps = {
  showNavLinks: boolean;
  setShowNavLinks: (val: boolean) => void;
};

export default function talent({ showNavLinks, setShowNavLinks }: HomeProps) {
  return (
    <div className="min-h-screen">
        <Navigation showTargetLinks={!showNavLinks} />
      <TalentHero />
      <StartupOpportunities />
      <SkillsMarketplace />
      <CofounderMatching />
      <LearningResources />
      <TalentFinalCTA />
    </div>
  );
}