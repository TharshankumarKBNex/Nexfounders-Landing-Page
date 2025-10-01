import { 
  InvestorHero, 
  InvestmentApplications, 
  StartupSourcing, 
  InvestorTalentSourcing, 
  PortfolioManagement, 
  MarketIntelligence, 
  InvestorAnalytics,
  InvestorFinalCTA
} from '../components/investors/InvestorDashboard';

import Navigation from '@/components/navigation';

type HomeProps = {
  showNavLinks: boolean;
  setShowNavLinks: (val: boolean) => void;
};

export default function investors({ showNavLinks, setShowNavLinks }: HomeProps) {
  return (
    <div className="min-h-screen">
      <Navigation showTargetLinks={!showNavLinks} />
      <InvestorHero />
      <InvestmentApplications />
      <StartupSourcing />
      <InvestorTalentSourcing />
      <PortfolioManagement />
      <MarketIntelligence />
      <InvestorAnalytics />
      <InvestorFinalCTA />
    </div>
  );
}