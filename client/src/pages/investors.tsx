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

export default function investors() {
  return (
    <div className="min-h-screen">
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