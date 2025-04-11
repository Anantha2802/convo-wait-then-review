
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit, BadgeCheck, AlertCircle, TrendingUp, PiggyBank, CreditCard } from "lucide-react";

// Mock AI recommendations (Innovation)
const recommendations = [
  {
    id: 1,
    title: "Increase your emergency fund",
    description: "Your emergency fund is below the recommended 3-6 months of expenses. Consider allocating more of your savings to this fund.",
    priority: "high",
    icon: <AlertCircle className="h-5 w-5 text-red-500" />,
    action: "Review Budget"
  },
  {
    id: 2,
    title: "Diversify your investments",
    description: "Your portfolio is heavily weighted in stocks. Consider adding more bonds or real estate for better diversification.",
    priority: "medium",
    icon: <TrendingUp className="h-5 w-5 text-amber-500" />,
    action: "View Options"
  },
  {
    id: 3,
    title: "Optimize retirement contributions",
    description: "You're not maximizing your tax-advantaged retirement accounts. Consider increasing contributions to your 401(k) or IRA.",
    priority: "medium",
    icon: <PiggyBank className="h-5 w-5 text-amber-500" />,
    action: "Adjust Contributions"
  },
  {
    id: 4,
    title: "Pay down high-interest debt",
    description: "You have credit card debt with high interest rates. Prioritize paying this down before focusing on other financial goals.",
    priority: "high",
    icon: <CreditCard className="h-5 w-5 text-red-500" />,
    action: "Make Payment"
  },
  {
    id: 5,
    title: "Great job maxing out your HSA",
    description: "You've maximized your Health Savings Account contributions, which provides excellent tax advantages.",
    priority: "low",
    icon: <BadgeCheck className="h-5 w-5 text-green-500" />,
    action: "View Details"
  }
];

export const AIRecommendations = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BrainCircuit className="h-5 w-5" />
          AI Financial Recommendations
        </CardTitle>
        <CardDescription>
          Personalized insights to improve your financial health
        </CardDescription>
      </CardHeader>
      <CardContent>
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
      </CardContent>
    </Card>
  );
};
