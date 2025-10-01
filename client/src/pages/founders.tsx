import { 
  EntrepreneurHero, 
  InvestorApplications, 
  TalentSourcing, 
  ResourceBank, 
  LegalHub, 
  OpenSourceTools, 
  StartupBlogging,
  EntrepreneurFinalCTA
} from '../components/founders/EntrepreneurDashboard';
import Navigation from '@/components/navigation';

type HomeProps = {
  showNavLinks: boolean;
  setShowNavLinks: (val: boolean) => void;
};

export default function founders({ showNavLinks, setShowNavLinks }: HomeProps) {
  return (
    <div className="min-h-screen">
      <Navigation showTargetLinks={!showNavLinks} />
      <EntrepreneurHero />
      <InvestorApplications />
      <TalentSourcing />
      <ResourceBank />
      <LegalHub />
      <OpenSourceTools />
      <StartupBlogging />
      <EntrepreneurFinalCTA />
    </div>
  );
}