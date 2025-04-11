
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, ResponsiveContainer } from 'recharts';
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

// Mock data for sparklines
const sparklineData = {
  savings: [
    { value: 5 }, { value: 10 }, { value: 5 }, { value: 20 }, 
    { value: 15 }, { value: 30 }, { value: 25 }, { value: 40 }
  ],
  investments: [
    { value: 10 }, { value: 15 }, { value: 25 }, { value: 20 }, 
    { value: 30 }, { value: 35 }, { value: 45 }, { value: 40 }
  ],
  expenses: [
    { value: 20 }, { value: 15 }, { value: 25 }, { value: 22 }, 
    { value: 18 }, { value: 15 }, { value: 20 }, { value: 18 }
  ]
};

export const DashboardStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Savings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">$24,563</div>
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
            +20.1% from last month
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Investments</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">$83,214</div>
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
            +12.5% from last month
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Monthly Expenses</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">$3,864</div>
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
            -4.3% from last month
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
