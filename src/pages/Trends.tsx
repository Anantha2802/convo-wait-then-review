
import { FinancialHeader } from "@/components/FinancialHeader";
import { FinancialSidebar } from "@/components/FinancialSidebar";
import { Separator } from "@/components/ui/separator";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

const Trends = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50 dark:bg-gray-900">
        <FinancialSidebar />
        <div className="flex-1 flex flex-col">
          <FinancialHeader />
          <SidebarTrigger className="fixed left-4 top-4 z-50 sm:hidden" />
          
          <main className="flex-1 container mx-auto px-4 py-6">
            <div className="mb-6">
              <h1 className="text-3xl font-bold tracking-tight">Market Trends</h1>
              <p className="text-muted-foreground">
                Track the latest market trends and economic indicators.
              </p>
            </div>
            
            <Separator className="my-6" />
            
            <div className="grid grid-cols-1 gap-6">
              <div className="rounded-lg border p-6 shadow-sm">
                <h2 className="text-xl font-semibold mb-4">Market Analysis</h2>
                <p>Detailed market trend analysis content will be displayed here.</p>
              </div>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Trends;
