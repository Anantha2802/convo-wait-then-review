
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit, BadgeCheck, AlertCircle, TrendingUp, PiggyBank, CreditCard } from "lucide-react";

export const AIRecommendations = () => {
  const [recommendations, setRecommendations] = useState<any[]>([]);
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    // Get user data from localStorage
    const storedData = localStorage.getItem("userData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setUserData(parsedData);
      
      // Generate personalized recommendations based on user data
      const personalized = [];
      const income = parseFloat(parsedData.income) || 0;
      const savingsGoal = parseFloat(parsedData.savingsGoal) || 0;
      const riskTolerance = parsedData.riskTolerance || "medium";
      
      // Emergency fund recommendation based on income
      const emergencyFundTarget = income * 6; // 6 months of income
      const emergencyFundCurrent = income * 0.2; // Assuming 20% of income
      if (emergencyFundCurrent < emergencyFundTarget * 0.5) {
        personalized.push({
          id: 1,
          title: "Increase your emergency fund",
          description: `Your emergency fund should cover 3-6 months of expenses (about $${emergencyFundTarget.toLocaleString()}). Consider allocating more to reach this goal.`,
          priority: "high",
          icon: <AlertCircle className="h-5 w-5 text-red-500" />,
          action: "Review Budget"
        });
      }
      
      // Investment recommendation based on risk tolerance
      if (riskTolerance === "low") {
        personalized.push({
          id: 2,
          title: "Consider diversifying investments",
          description: "Your conservative risk profile suggests you might prefer stable investments. Consider a mix of bonds and dividend stocks.",
          priority: "medium",
          icon: <TrendingUp className="h-5 w-5 text-amber-500" />,
          action: "View Options"
        });
      } else if (riskTolerance === "high") {
        personalized.push({
          id: 2,
          title: "Optimize your aggressive portfolio",
          description: "With your high risk tolerance, ensure you're maximizing growth potential while maintaining some safety nets.",
          priority: "medium",
          icon: <TrendingUp className="h-5 w-5 text-amber-500" />,
          action: "View Options"
        });
      } else {
        personalized.push({
          id: 2,
          title: "Balance your investment portfolio",
          description: "Your balanced risk profile suggests a mix of growth and value investments would suit your goals.",
          priority: "medium",
          icon: <TrendingUp className="h-5 w-5 text-amber-500" />,
          action: "View Options"
        });
      }
      
      // Retirement recommendation
      personalized.push({
        id: 3,
        title: "Optimize retirement contributions",
        description: `Based on your income of $${income.toLocaleString()}/month, consider contributing at least ${Math.round(income * 0.15)}$ to retirement accounts.`,
        priority: "medium",
        icon: <PiggyBank className="h-5 w-5 text-amber-500" />,
        action: "Adjust Contributions"
      });
      
      // Savings goal recommendation
      if (savingsGoal > 0) {
        const monthlySavingsNeeded = savingsGoal / 24; // Over 2 years
        if (monthlySavingsNeeded > income * 0.3) {
          personalized.push({
            id: 4,
            title: "Adjust your savings goal timeline",
            description: `Your savings goal of $${savingsGoal.toLocaleString()} may require more time given your current income. Consider extending your timeline.`,
            priority: "high",
            icon: <CreditCard className="h-5 w-5 text-red-500" />,
            action: "Adjust Goal"
          });
        } else {
          personalized.push({
            id: 4,
            title: "You're on track with your savings goal",
            description: `To reach your $${savingsGoal.toLocaleString()} goal, continue saving about $${Math.round(monthlySavingsNeeded).toLocaleString()} monthly.`,
            priority: "low",
            icon: <BadgeCheck className="h-5 w-5 text-green-500" />,
            action: "View Details"
          });
        }
      }
      
      // Budget recommendation
      const expenses = income * 0.65; // Estimated expenses
      if (expenses > income * 0.7) {
        personalized.push({
          id: 5,
          title: "Review your monthly expenses",
          description: "Your estimated expenses are high relative to your income. Consider tracking your spending to find areas to reduce.",
          priority: "high",
          icon: <CreditCard className="h-5 w-5 text-red-500" />,
          action: "Track Expenses"
        });
      }
      
      setRecommendations(personalized);
    }
  }, []);

  // If no user data is available, show empty state
  if (!userData) {
    return (
      <Card className="w-full">
        <CardContent className="pt-6">
          <p className="text-center text-muted-foreground">Complete the onboarding process to receive personalized financial recommendations.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BrainCircuit className="h-5 w-5" />
          AI Financial Recommendations
        </CardTitle>
        <CardDescription>
          Personalized insights for {userData.name}'s financial health
        </CardDescription>
      </CardHeader>
      <CardContent>
        {recommendations.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-muted-foreground">No recommendations available yet. Check back soon.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {recommendations.map((rec) => (
              <Card key={rec.id} className={`border-l-4 ${
                rec.priority === 'high' ? 'border-l-red-500' : 
                rec.priority === 'medium' ? 'border-l-amber-500' : 'border-l-green-500'
              }`}>
                <CardHeader className="p-4 pb-2">
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    {rec.icon}
                    {rec.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="text-sm text-muted-foreground">{rec.description}</p>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button variant="outline" size="sm">
                    {rec.action}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};
