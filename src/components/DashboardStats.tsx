
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparklines, SparklinesLine } from 'recharts';

// Mock data for sparklines
const sparklineData = {
  savings: [5, 10, 5, 20, 15, 30, 25, 40],
  investments: [10, 15, 25, 20, 30, 35, 45, 40],
  expenses: [20, 15, 25, 22, 18, 15, 20, 18]
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
            <Sparklines data={sparklineData.savings} margin={5}>
              <SparklinesLine color="#22c55e" />
            </Sparklines>
          </div>
          <p className="text-xs text-muted-foreground">
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
            <Sparklines data={sparklineData.investments} margin={5}>
              <SparklinesLine color="#3b82f6" />
            </Sparklines>
          </div>
          <p className="text-xs text-muted-foreground">
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
            <Sparklines data={sparklineData.expenses} margin={5}>
              <SparklinesLine color="#ef4444" />
            </Sparklines>
          </div>
          <p className="text-xs text-muted-foreground">
            -4.3% from last month
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
