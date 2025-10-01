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

export default function founders() {
  return (
    <div className="min-h-screen">
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