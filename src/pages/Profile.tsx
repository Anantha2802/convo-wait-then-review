
import { useState, useEffect } from "react";
import { FinancialHeader } from "@/components/FinancialHeader";
import { FinancialSidebar } from "@/components/FinancialSidebar";
import { Separator } from "@/components/ui/separator";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [userData, setUserData] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Get user data from localStorage
    const storedData = localStorage.getItem("userData");
    if (storedData) {
      setUserData(JSON.parse(storedData));
    }
  }, []);

  const handleResetProfile = () => {
    // Clear all user data from localStorage
    localStorage.removeItem("userData");
    localStorage.removeItem("onboardingComplete");
    localStorage.removeItem("financialGoals");
    
    toast({
      title: "Profile Reset",
      description: "All your data has been cleared. You'll be redirected to the onboarding screen.",
    });
    
    // Redirect to home page (which will show the onboarding form)
    setTimeout(() => {
      navigate("/");
      window.location.reload(); // Force reload to trigger onboarding
    }, 1500);
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50 dark:bg-gray-900">
        <FinancialSidebar />
        <div className="flex-1 flex flex-col">
          <FinancialHeader />
          <SidebarTrigger className="fixed left-4 top-4 z-50 sm:hidden" />
          
          <main className="flex-1 container mx-auto px-4 py-6">
            <div className="mb-6">
              <h1 className="text-3xl font-bold tracking-tight">Your Profile</h1>
              <p className="text-muted-foreground">
                Manage your personal information and preferences.
              </p>
            </div>
            
            <Separator className="my-6" />
            
            {userData ? (
              <div className="grid grid-cols-1 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Name</p>
                        <p className="text-lg">{userData.name}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Monthly Income</p>
                        <p className="text-lg">₹{parseFloat(userData.income).toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Current Savings</p>
                        <p className="text-lg">₹{parseFloat(userData.currentSavings).toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Monthly Expenses</p>
                        <p className="text-lg">₹{parseFloat(userData.monthlyExpenses).toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Current Investments</p>
                        <p className="text-lg">₹{parseFloat(userData.currentInvestments).toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Savings Goal</p>
                        <p className="text-lg">₹{parseFloat(userData.savingsGoal).toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Goal Timeframe</p>
                        <p className="text-lg">{userData.timeframe} months</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Risk Tolerance</p>
                        <p className="text-lg capitalize">{userData.riskTolerance}</p>
                      </div>
                    </div>
                    <Separator className="my-4" />
                    <div className="pt-2">
                      <Button variant="destructive" onClick={handleResetProfile}>
                        Reset Profile & Start Over
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ) : (
              <Card>
                <CardContent className="p-6 text-center">
                  <p>Please complete the onboarding process to see your profile information.</p>
                  <Button className="mt-4" onClick={() => navigate("/")}>
                    Go to Onboarding
                  </Button>
                </CardContent>
              </Card>
            )}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Profile;
