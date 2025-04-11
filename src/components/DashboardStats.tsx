
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, ResponsiveContainer } from 'recharts';
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { useState, useEffect } from "react";

// Create sparkline data based on user income
const generateSparklineData = (baseValue: number, variation: number) => {
  return Array(8).fill(0).map((_, i) => ({
    value: Math.max(5, baseValue + (Math.random() * variation * 2 - variation))
  }));
};

export const DashboardStats = () => {
  const [userData, setUserData] = useState<any>(null);
  const [sparklineData, setSparklineData] = useState({
    savings: [] as { value: number }[],
    investments: [] as { value: number }[],
    expenses: [] as { value: number }[]
  });
  
  useEffect(() => {
    // Get user data from localStorage
    const storedData = localStorage.getItem("userData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setUserData(parsedData);
      
      // Generate data based on user's income
      const income = parseFloat(parsedData.income) || 5000;
      const savingsBase = income * 0.2; // 20% of income
      const investmentsBase = income * 0.15; // 15% of income
      const expensesBase = income * 0.65; // 65% of income
      
      setSparklineData({
        savings: generateSparklineData(savingsBase, savingsBase * 0.2),
        investments: generateSparklineData(investmentsBase, investmentsBase * 0.25),
        expenses: generateSparklineData(expensesBase, expensesBase * 0.1)
      });
    }
  }, []);
  
  // If no user data is available, show empty state
  if (!userData) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card>
          <CardContent className="pt-6">
            <p className="text-center text-muted-foreground">Please complete the onboarding process to see your financial data.</p>
          </CardContent>
        </Card>
      </div>
    );
  }
  
  // Calculate values based on user income
  const income = parseFloat(userData.income) || 0;
  const savings = income * 0.2; // Assume 20% of income goes to savings
  const investments = income * 0.15; // Assume 15% goes to investments
  const expenses = income * 0.65; // Assume 65% goes to expenses

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Savings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">${savings.toFixed(2)}</div>
          <div className="h-[50px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={sparklineData.savings}>
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#22c55e" 
                  strokeWidth={2} 
                  dot={false} 
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <p className="text-xs text-muted-foreground flex items-center">
            <ArrowUpRight className="h-3 w-3 mr-1 text-green-500" />
            Based on {userData.name}'s income
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Investments</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">${investments.toFixed(2)}</div>
          <div className="h-[50px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={sparklineData.investments}>
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#3b82f6" 
                  strokeWidth={2} 
                  dot={false} 
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <p className="text-xs text-muted-foreground flex items-center">
            <ArrowUpRight className="h-3 w-3 mr-1 text-green-500" />
            Based on your risk tolerance: {userData.riskTolerance}
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Monthly Expenses</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">${expenses.toFixed(2)}</div>
          <div className="h-[50px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={sparklineData.expenses}>
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#ef4444" 
                  strokeWidth={2} 
                  dot={false} 
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <p className="text-xs text-muted-foreground flex items-center">
            <ArrowDownRight className="h-3 w-3 mr-1 text-red-500" />
            Estimated monthly spending
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
