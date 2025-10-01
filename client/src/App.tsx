import { useState } from "react";
import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Features from "@/pages/features";
import About from "@/pages/about";
import Pricing from "@/pages/pricing";
import founders from "@/pages/founders";
import investors from "@/pages/investors"
import talent from "@/pages/talent"

function Router({ showNavLinks, setShowNavLinks }: { showNavLinks: boolean; setShowNavLinks: (val: boolean) => void }) {
  return (
    <Switch>
      <Route path="/" component={() => <Home showNavLinks={showNavLinks} setShowNavLinks={setShowNavLinks} />} />
      {/* <Route path="/features" component={Features} /> */}
      {/* <Route path="/about" component={About} /> */}
      <Route path="/pricing" component={Pricing} />
      <Route path="/founders" component={founders} />
      <Route path="/investors" component={investors} />
      <Route path="/talent" component={talent} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [showNavLinks, setShowNavLinks] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router showNavLinks={showNavLinks} setShowNavLinks={setShowNavLinks} />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
