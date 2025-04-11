
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { FinancialSidebar } from "@/components/FinancialSidebar";
import { FinancialHeader } from "@/components/FinancialHeader";
import { DashboardStats } from "@/components/DashboardStats";
import { FinancialCalculator } from "@/components/FinancialCalculator";
import { FinancialChart } from "@/components/FinancialChart";
import { AIRecommendations } from "@/components/AIRecommendations";
import { FinancialGoals } from "@/components/FinancialGoals";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50 dark:bg-gray-900">
        <FinancialSidebar />
        <div className="flex-1 flex flex-col">
          <FinancialHeader />
          <SidebarTrigger className="fixed left-4 top-4 z-50 sm:hidden" />
          
          <main className="flex-1 container mx-auto px-4 py-6">
            <div className="mb-6">
              <h1 className="text-3xl font-bold tracking-tight">Financial Dashboard</h1>
              <p className="text-muted-foreground">
                Welcome to your personal financial advisor. Track, analyze, and plan your financial future.
              </p>
            </div>
            
            <DashboardStats />
            
            <div id="calculator" className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <FinancialCalculator />
              <FinancialChart />
            </div>
            
            <Separator className="my-6" />
            
            <div id="goals" className="mb-6">
              <h2 className="text-2xl font-bold tracking-tight mb-4">Your Financial Journey</h2>
              <FinancialGoals />
            </div>
            
            <Separator className="my-6" />
            
            <div id="insights" className="mb-6">
              <h2 className="text-2xl font-bold tracking-tight mb-4">Smart Insights</h2>
              <AIRecommendations />
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Index;
